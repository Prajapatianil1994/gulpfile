const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

//Path
const path = {
    styles:{
        src: 'assets/scss/**/*.scss',
        dest: './assets/css'
    }
}


//Task
function css(done){
    gulp.src(path.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compact" }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest(path.styles.dest));
    done();
};

//Watching files
function watch_files(){
    gulp.watch(path.styles.src, css);
}

gulp.task('css', css);


//default
gulp.task('default', gulp.parallel(css));

//Watch
gulp.task('watch', gulp.series(watch_files));