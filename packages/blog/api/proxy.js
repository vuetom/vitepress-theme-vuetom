const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  if (req.url.startsWith('/myblog')) {
    target = 'https://vitepress-theme-vuetom-blog.vercel.app'
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/myblog/': '/'
    }
  })(req, res)
}
