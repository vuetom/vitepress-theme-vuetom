const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  if (req.url.startsWith('/vt')) {
    target = 'https://vitepress-theme-vuetom.vercel.app'
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/myblog/': '/'
    }
  })(req, res)
}
