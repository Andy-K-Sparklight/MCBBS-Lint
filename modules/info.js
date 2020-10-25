class InfoDisplayer extends MCBBSLintModule {
  constructor() {
    super("Info Displayer");
  }
  load(callback) {
    callback(true);
  }
  run(callback) {
    $("div[class='z light']").append(
      `<a id='lint'>MCBBS Lint v${ML_VERSION}</a>`
    );
    callback(true);
  }
}
var ML_Info = new InfoDisplayer();
