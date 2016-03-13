'use strict';


var gulp            = require('gulp'),
    clean           = require('gulp-clean'),
 // sass            = require('gulp-ruby-sass'),
 // concat          = require('gulp-concat'),

    browserify      = require('browserify'),
    source          = require('vinyl-source-stream'),

    express         = require('express'),
    serverport      = 8080;



var server = express();

server.use(express.static('./'));

server.all('/*', function(req, res) {
  res.sendfile('index.html');
});

gulp.task('dev', ['clean', 'browserify'], function() { });


gulp.task('clean', function() {
    return gulp.src(['src/css/*', 'src/js/*'], {read: false})
    .pipe(clean());
});

gulp.task('browserify', function() {
  return browserify(['app/app.module.js'])
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('src/js'));
});

gulp.task('watch', function() {

  server.listen(serverport);

  gulp.watch(['app/*.js', 'app/**/*.js', 'app/**/**/*.js'],[
    'browserify'
  ]);

});

gulp.task('default', ['dev', 'watch']);
