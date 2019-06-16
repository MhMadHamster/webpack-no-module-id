module.exports = {
  entry: {
    a: "./src/a",
  },
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        b: {
          test: /b\.js/,
          name: "common",
          enforce: true,
        },
        c: {
          test: /c\.js/,
          name: "common",
          enforce: true,
        }
      }
    }
  }
}