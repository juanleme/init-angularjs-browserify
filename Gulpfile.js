'use strict';


var gulp            = require('gulp'),
    clean           = require('gulp-clean'),
    eslint          = require('gulp-eslint'),
    uglify          = require('gulp-uglify'),
    buffer          = require('vinyl-buffer'),
    sass            = require('gulp-sass'),
    streamify       = require('gulp-concat'),

    browserify      = require('browserify'),
    source          = require('vinyl-source-stream'),

    express         = require('express'),
    serverport      = 8080;



var server = express();

server.use(express.static('./'));

server.all('/*', function(req, res) {
  res.sendfile('index.html');
});

gulp.task('dev', ['clean', 'sass', 'browserify', 'lint'], function() { });


gulp.task('clean', function() {
    return gulp.src(['src/css/*', 'src/js/*'], {read: false})
    .pipe(clean());
});

gulp.task('browserify', function() {
  return browserify(['app/app.module.js'])
  .bundle()
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(uglify({mangle: false}))
  .pipe(gulp.dest('src/js'));
});

gulp.task('sass', function () {
   return gulp.src('./assets/scss/*.scss')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('lint', function() {
  return gulp.src(['app/*.js', 'app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('watch', function() {

  server.listen(serverport);

  gulp.watch(['app/*.js', 'app/**/*.js', 'app/**/**/*.js'],[
    'browserify',
    'lint'
  ]);
  gulp.watch(['assets/scss/*.scss', 'assets/scss/**/*.scss', 'assets/scss/**/**/*.scss'],[
    'sass'
  ]);

});

gulp.task('default', ['dev', 'watch']);
