export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Louis/Documents/PdfTeachAnnotator_docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/faq.html", { loader: () => import(/* webpackChunkName: "guide_faq.html" */"C:/Users/Louis/Documents/PdfTeachAnnotator_docs/docs/.vuepress/.temp/pages/guide/faq.html.js"), meta: {"title":"常见问题"} }],
  ["/guide/features.html", { loader: () => import(/* webpackChunkName: "guide_features.html" */"C:/Users/Louis/Documents/PdfTeachAnnotator_docs/docs/.vuepress/.temp/pages/guide/features.html.js"), meta: {"title":"功能介绍"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"C:/Users/Louis/Documents/PdfTeachAnnotator_docs/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"快速开始"} }],
  ["/guide/settings.html", { loader: () => import(/* webpackChunkName: "guide_settings.html" */"C:/Users/Louis/Documents/PdfTeachAnnotator_docs/docs/.vuepress/.temp/pages/guide/settings.html.js"), meta: {"title":"设置选项"} }],
  ["/guide/shortcuts.html", { loader: () => import(/* webpackChunkName: "guide_shortcuts.html" */"C:/Users/Louis/Documents/PdfTeachAnnotator_docs/docs/.vuepress/.temp/pages/guide/shortcuts.html.js"), meta: {"title":"快捷键"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Louis/Documents/PdfTeachAnnotator_docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
