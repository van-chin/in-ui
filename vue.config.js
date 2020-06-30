// 增加环境变量
process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  pages: {
    index: {
      entry: "docs/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },

  configureWebpack: config => {
    // 判断为生产模式下，因为开发模式我们是想保存console的
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer.map(arg => {
        const option = arg.options.terserOptions.compress;
        option.drop_console = false; // 打开开关
        return arg;
      });
    }
  }
};
