/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => gulp.src(jsFiles));

gulp.task('inject', () => {
  const wiredep = require('wiredep').stream;
  const inject = require('gulp-inject');
  const injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'],
    { read: false });
  const injectOptions = {
    ignorePath: '/public'
  };
  const options = {
    bowerJSON: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public'
  };

  return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['inject'], () => {
  const options = {
    script: 'public/js/app.js',
    delayTime: 1,
    env: {
      PORT: 3000
    },
    watch: jsFiles
  };

  return nodemon(options)
    .on('restart', () => {
      console.log('Restarting...');
    });
});
