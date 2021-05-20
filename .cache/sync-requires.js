const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/irfan/Documents/GitHub/12A-gatsbly-blog-main/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/irfan/Documents/GitHub/12A-gatsbly-blog-main/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/home/irfan/Documents/GitHub/12A-gatsbly-blog-main/src/pages/About.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/irfan/Documents/GitHub/12A-gatsbly-blog-main/src/pages/index.tsx"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/irfan/Documents/GitHub/12A-gatsbly-blog-main/src/pages/using-typescript.tsx"))),
  "component---src-templates-blog-post-contentful-tsx": hot(preferDefault(require("/home/irfan/Documents/GitHub/12A-gatsbly-blog-main/src/templates/blog-post-contentful.tsx")))
}

