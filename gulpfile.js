'use strict';
var gulp = require('gulp'),
  gulpIf = require('gulp-if'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  cssmin = require('gulp-minify-css'),

  browserify = require('gulp-browserify'),
  stringify = require('stringify'),
  uglify = require('gulp-uglify'),

  env = process.env.NODE_ENV || 'development',
  outputClientDir = 'www',
  inputDir = 'app',

  options = {
    libjs: [
      'bower_components/ionic/js/ionic.bundle.js',
      'bower_components/ngCordova/dist/ng-cordova.min.js',
      'bower_components/ng-cordova-oauth/dist/ng-cordova-oauth.min.js',
      'bower_components/ng-material-floating-button/src/mfb-directive.js',
      'bower_components/ng-videosharing-embed/build/ng-videosharing-embed.min.js'
    ]
  };


gulp.task('assets', function() {
  return gulp.src(inputDir + '/resources/**/*')
    .pipe(gulp.dest(outputClientDir + '/resources'));
});

gulp.task('fonts', function() {
  return gulp.src('bower_components/ionic/fonts/*')
    .pipe(gulp.dest(outputClientDir + '/fonts'));
});

gulp.task('html', function() {
  return gulp.src(inputDir + '/index.html')
    .pipe(gulp.dest(outputClientDir));
});


// gulp.task('css', function() {
//     gulp.src(inputDir + '/css/app.css')
//         .pipe(cssmin())
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest(outputClientDir + '/css'));
// });


gulp.task('sass', function() {
  var config = {};
  if (env === 'production') {
    config.outputStyle = 'compressed';
  }
  return gulp.src(inputDir + '/resources/sass/app.scss')
    .pipe(sass(config))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(outputClientDir + '/css'));
});


gulp.task('js', function() {
  return gulp.src(inputDir + '/scripts/app.js', {
      read: false
    })
    .pipe(browserify({
      transform: stringify({
        extensions: ['.html', '.tpl'],
        minify: true
      })
    }))
    .pipe(gulpIf(env !== 'development', uglify()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(outputClientDir + '/js'));
});

gulp.task('vendor', function() {
  return gulp.src(options.libjs)
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(outputClientDir + '/js'));
});

gulp.task('watch', function() {
  gulp.watch('./app/scripts/**/*.js', ['js']);
  gulp.watch('./app/scripts/**/*.html', ['js']);
  gulp.watch(inputDir + '/index.html', ['html']);
  gulp.watch(inputDir + '/resources/sass/**/*.scss', ['sass']);
  gulp.watch(inputDir + '/css/**/*.css', ['css']);
  gulp.watch(inputDir + '/resources/images/*', ['assets']);
  gulp.watch(inputDir + '/resources/fonts/*', ['fonts']);
});

gulp.task('default', ['assets', 'fonts', 'html', 'sass', 'js', 'vendor', 'watch']);
gulp.task('build', ['assets', 'fonts', 'html', 'sass', 'js', 'vendor']);
