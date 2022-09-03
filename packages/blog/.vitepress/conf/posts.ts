import fs from 'fs'
import { pageRoot } from './path'

const readDir = (dir) => {
  const res = []
  const files = fs.readdirSync(dir)
  files.forEach(item => {
    const filepath = `${dir}/${item}`
    const stat = fs.statSync(filepath)
    if (stat.isFile()) {
      const name = item.replace('.md', '')
      res.push({
        text: name,
        link: `/${name}`
      })
    }
  })
  return res
}

const getDefaultPage = () => ({
  text: '',
  link: ''
})

export default () => readDir(pageRoot)
