import path from 'path'
import {
  src, dest, series, parallel
} from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

const distFolder = path.resolve(__dirname, 'css/styles')

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function buildThemeChalk() {
  const sass = gulpSass(dartSass)
  const noPrefixFile = /(index|main)/

  return src(path.resolve(__dirname, 'styles/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        console.log(
          `${details.name}: ${
            details.stats.originalSize / 1000
          } KB -> ${details.stats.minifiedSize / 1000} KB`
        )
      })
    )

    .pipe(
      rename((path) => {
        if (!noPrefixFile.test(path.basename)) {
          path.basename = `vt-${path.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}

export const build = parallel(
  buildThemeChalk
)

export default build
