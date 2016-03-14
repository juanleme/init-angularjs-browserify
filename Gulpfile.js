'use strict';


var gulp            = require('gulp'),
    clean           = require('gulp-clean'),
    jshint          = require('gulp-jshint'),
    uglify          = require('gulp-uglify'),
    buffer          = require('vinyl-buffer'),
 // sass            = require('gulp-ruby-sass'),
 //   concat          = require('gulp-concat'),
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

gulp.task('dev', ['clean', 'browserify', 'lint'], function() { });


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

gulp.task('lint', function() {
  return gulp.src('src/js/main.js')
    .pipe(jshint());
});


gulp.task('watch', function() {

  server.listen(serverport);

  gulp.watch(['app/*.js', 'app/**/*.js', 'app/**/**/*.js'],[
    'browserify',
    'lint'
  ]);

});

gulp.task('default', ['dev', 'watch']);
