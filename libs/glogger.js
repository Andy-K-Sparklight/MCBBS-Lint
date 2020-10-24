var glogger = {};
glogger.log = function (levelIn, msgIn, titleIn) {
  switch (levelIn) {
    case "error":
      toastr.error(msgIn, titleIn);
      break;
    case "success":
    case "succ":
      toastr.success(msgIn, titleIn);
      break;
    case "warn":
    case "warning":
      toastr.warning(msgIn, titleIn);
      break;
    case "debug":
      if (RC_debug) {
        toastr.info(msgIn, `[调试] ${titleIn}`);
      }
      break;
    case "info":
    default:
      toastr.info(msgIn, titleIn);
  }
};
glogger.info = function (msgIn, titleIn) {
  glogger.log("info", msgIn, titleIn);
};
glogger.error = function (msgIn, titleIn) {
  glogger.log("error", msgIn, titleIn);
};
glogger.success = function (msgIn, titleIn) {
  glogger.log("succ", msgIn, titleIn);
};
glogger.warn = function (msgIn, titleIn) {
  glogger.log("warn", msgIn, titleIn);
};
glogger.debug = function (msgIn, titleIn) {
  glogger.log("debug", msgIn, titleIn);
};
