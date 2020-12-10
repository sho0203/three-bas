const gulp = require('gulp')
const browserSync = require('browser-sync')

const browser_preview = (done) => {
  browserSync({
    files: ["index.html"],
    port: 3000,
    server: {
      baseDir: "./"
    }
  })
  done()
}

const bs_reload = (done) => {
  browserSync.reload();
  done()
}

const watchFiles = [
  "./*.js",
  "./*.html",
  "img/*"
]

const watch_files = (done) => {
  gulp.watch(watchFiles, bs_reload)
  done()
}

gulp.task('default', gulp.series(browser_preview, watch_files));