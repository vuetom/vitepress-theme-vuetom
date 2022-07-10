const fs = require('fs-extra')
const glob = require('globby')

function toDist(file) {
  return file.replace(/vuetom\//, 'vuetom/dist/')
}

glob.sync('../vuetom/**').forEach((file) => {
  if (/(\.ts|tsconfig\.json)$/.test(file)) return
  if (/(\.ts|package\.json)$/.test(file)) return
  if (/dist\//.test(file)) return
  if (/node_modules\//.test(file)) return
  const target = toDist(file)
  if (file !== target) fs.copy(file, target)
})
