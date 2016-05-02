var paths = {
    HTML: 'src/**/*.html',
    JS: 'src/**/*.js',
    TSX: 'src/**/*.tsx',
    TS: 'src/**/*.ts',
    DIST: 'dist',
    TDCONFIG : 'tsconfig.json',
    LESS_FILES: '/**/*.less',
    SOURCE_LESS_FOLDER: 'src/less',
    BOOTSTRAP_LESS_FOLDER: 'node_modules/bootstrap/less'
};

var gulp = require('gulp');
var ts = require('gulp-typescript');
var less = require('gulp-less');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('typescript', function () {
    tsconfig = ts.createProject(paths.TDCONFIG);
    tsconfig.src().pipe(ts(tsconfig)).js.pipe(gulp.dest('./src'));
});

gulp.task('less:prepare', function() {
    gulp.src(paths.SOURCE_LESS_FOLDER + paths.LESS_FILES)
        .pipe(gulp.dest(paths.BOOTSTRAP_LESS_FOLDER));
});

gulp.task('less:compile', ['less:prepare'], function () {
    gulp.src(paths.BOOTSTRAP_LESS_FOLDER + '/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest(paths.DIST));
});

gulp.task('html', function(){
    gulp.src(paths.HTML)
        .pipe(gulp.dest(paths.DIST));
});

gulp.task('js', function () {
    browserify('src/index.js')
        .transform(reactify)
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest(paths.DIST));
});

gulp.task('watch', function() {
    gulp.watch(paths.HTML, ['html']);
    gulp.watch(paths.SOURCE_LESS_FOLDER + paths.LESS_FILES, ['less:compile']);
    gulp.watch(paths.TS, ['typescript']);
    gulp.watch(paths.TSX, ['typescript']);
    gulp.watch(paths.JS, ['js']);
});

gulp.task('default', ['typescript', 'html', 'watch']);