const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  lintOnSave: true,
  outputDir: "dist",
  publicPath: "./",
  devServer: {
    port: 8801
    // proxy: {
    //   "/chaincode": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true
    //     // pathRewrite: {
    //     //   "/chaincode": "/chaincode"
    //     // }
    //   }
    // }
  },
  configureWebpack: config => {
    // 将每个依赖包打包成单独的js文件
    let optimization = {
      minimizer: [
        new UglifyJsPlugin({
          // exclude: [],
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log"]
            }
          }
        })
      ]
    };
    Object.assign(config, {
      optimization
    });
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "stylus",
      patterns: [path.resolve(__dirname, "./src/styles/mixin.styl")]
    }
  },
  // 路径别名
  chainWebpack: config => {
    config.resolve.alias
      // 图片
      .set("@images", resolve("src/assets/images"));
  }
};
