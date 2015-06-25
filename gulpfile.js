var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
//var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var less = require('gulp-less');


gulp.task('buildLib', function() {
  var libraries = require('./dependencies.json').dependencies;

  gulp.src(libraries)
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});

gulp.task('webserver', function() {
  gulp.src('./')
  .pipe(webserver({
    livereload: true,
    directoryListing: true,
    open: true
  }));
});

gulp.task('less', function () {
  return gulp.src('./app/less/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('./build/css'));
});

gulp.task('imageMin', function() {
  return gulp.src('./app/img/**/*.*')
  .pipe(imagemin({
    optimizationLevel: 7
  }))
  .pipe(gulp.dest('./build/images'));
});

gulp.task('watch', ['cssConcat'], function () {
  gulp.watch('./app/css/**/*.css', ['cssConcat']);
  gulp.watch('./app/js/**/*.js', ['jsUglify']);
  gulp.watch('./app/templates/**/**/*.js', ['templatesDirect']);
});

gulp.task('cssConcat', function() {
  return gulp.src(['./css/**/*.css', './bower_components/angular-bootstrap/ui-bootstrap-csp.css'])
  .pipe(autoprefixer())
  .pipe(concat('all.css'))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('jsUglify', function() {
  return gulp.src('./js/**/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});

gulp.task('templates', function() {
  return gulp.src('./app/index.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('templates.direct', function() {
  return gulp.src(['./app/templates/**/**/.*html'])
  .pipe(gulp.dest('./build/templates'));
});

gulp.task('default', ['cssConcat', 'jsUglify', 'watch', 'webserver', 'templates', 'buildLib', 'less']);
