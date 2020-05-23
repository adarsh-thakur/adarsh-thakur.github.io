var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src("./styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

gulp.task('index', function() {
    return gulp.src("./app/src/*.html")
        .pipe(gulp.dest("dist"))
});

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch("./styles/*.scss",gulp.series(['sass']));
    gulp.watch("./app/src/*.html",gulp.series(['index']));
    gulp.watch("./app/src/*").on('change',browserSync.reload);
});


gulp.task('default', gulp.series(['index','sass','serve']));
