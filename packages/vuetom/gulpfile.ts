import path from 'path'
import {
  src, dest, series, parallel
} from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

const distFolder = path.resolve(__dirname, './dist/styles')
const distRewriteFolder = path.resolve(__dirname, './dist/styles/rewrite')

function buildRewriteStyles() {
  const sass = gulpSass(dartSass)
  const noPrefixFile = /(index|main)/
  return src(path.resolve(__dirname, 'styles/rewrite/*.scss'))
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        cascade: true // 是否美化属性值 默认 true
      })
    )
    .pipe(
      cleanCSS(
        {
          compatibility: 'ie9', // 压缩兼容模式IE9
          format: 'beautify'
        },
        (details) => {
          console.log(
            `${details.name}: ${details.stats.originalSize / 1000} KB -> ${
              details.stats.minifiedSize / 1000
            } KB`
          )
        }
      )
    )
    .pipe(
      rename((file) => {
        if (!noPrefixFile.test(file.basename)) {
          file.basename = `vt-${file.basename}`
        }
      })
    )
    .pipe(dest(distRewriteFolder))
}

function buildCommonStyles() {
  const sass = gulpSass(dartSass)
  const noPrefixFile = /(index|main)/
  return src(path.resolve(__dirname, 'styles/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: true }))
    .pipe(
      cleanCSS(
        {
          compatibility: 'ie9',
          format: 'beautify'
        },
        (details) => {
          console.log(
            `${details.name}: ${details.stats.originalSize / 1000} KB -> ${
              details.stats.minifiedSize / 1000
            } KB`
          )
        }
      )
    )
    .pipe(
      rename((file) => {
        if (!noPrefixFile.test(file.basename)) {
          file.basename = `vt-${file.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}

/**
 * 移动图标、字体、tailwind样式文件至dist对应目录下
 */
function copyOtherResource() {
  return src([
    path.resolve(__dirname, 'styles/fa'),
    path.resolve(__dirname, 'styles/fonts'),
    path.resolve(__dirname, 'styles/tailwind')
  ]).pipe(
    dest(distFolder)
  )
}

export const build = parallel(
  buildRewriteStyles,
  buildCommonStyles,
  copyOtherResource
)

export default build
