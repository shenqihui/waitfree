
export default {
  entry: "src/index.js",
  less: true,
  multipage: false,
  extraBabelPlugins: [
    "transform-runtime",
  ],
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
      ]
    },
    production: {}
  }
}
