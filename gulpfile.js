const gulp = require('gulp');

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
  return gulp.src(jsFiles);
});

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
