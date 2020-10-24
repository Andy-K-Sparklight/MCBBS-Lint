class MCBBSLintModule {
  moduleName;
  loadText;
  constructor(nameIn, ltIn) {
    this.moduleName = nameIn;
    this.loadText = ltIn;
  }
  load(callback) {
    callback(true);
  }
  run(callback) {
    callback(true);
  }
  runson() {
    return true;
  }
}
