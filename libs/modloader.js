function loadModule(moduleIn, callback) {
  if (moduleIn.runson()) {
    moduleIn.load((e) => {
      if (e) {
        glogger.success(
          `${moduleIn.moduleName || "某个模块"} ${
            moduleIn.loadText || "已经加载完成。"
          }`,
          "MCBBS Lint 模块加载器"
        );
        callback(true);
      } else {
        glogger.error(
          `${moduleIn.moduleName || "某个模块"}${
            moduleIn.loadText || "加载遇到错误。"
          }`,
          "MCBBS Lint 模块加载器"
        );
        callback(false);
      }
    });
  }
}
function runModule(moduleIn, callback) {
  if (moduleIn.runson()) {
    moduleIn.run((e) => {
      if (!e) {
        glogger.error(
          `${moduleIn.moduleName || "某个模块"}${
            moduleIn.loadText || "启动发生错误"
          }`,
          "MCBBS Lint 模块加载器"
        );
        callback(false);
      } else {
        callback(true);
      }
    });
  }
}
