var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var browserSync = require("browser-sync");

gulp.task('sass', function(){
  gulp.src('src/scss/main.scss')
  .pipe(plumber())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task("watch", ["sass", "browser"], function() {
  gulp.watch("src/sass/**/*.scss", ["sass"]);
  gulp.watch("src/index.html", browserSync.reload);
});


gulp.task('browser', function(){
  browserSync({
    server: { baseDir: 'src'},
    notify: false
  })
});

gulp.task("build", function() {
  gulp.src(["src/css/*.css"]).pipe(gulp.dest("build/css"));
  gulp.src(["src/js/*.js"]).pipe(gulp.dest("build/js"));
  gulp.src(["src/images/*.*"]).pipe(gulp.dest("build/images"));
  gulp.src("src/*.html").pipe(gulp.dest("build"));
});
