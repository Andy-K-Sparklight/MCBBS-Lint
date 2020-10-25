class SprintAccess extends MCBBSLintModule {
  constructor() {
    super("Sprint Access");
  }
  load(callback) {
    callback(true);
  }
  runson() {
    return true;
  }
  run() {
    $("#google_esf").remove();
    $(
      "script[src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js']"
    ).remove();
  }
}
var ML_Sprint = new SprintAccess();
