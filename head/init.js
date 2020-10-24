var RC_debug = true;
function globalInit() {
  $("head").prepend(
    "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/toastr/toastr.min.css' type='text/css'/>"
  );
  toastr.options = {
    closeButton: true,
    debug: false,
    progressBar: true,
    positionClass: "toast-bottom-right",
    onclick: null,
    showDuration: 300,
    hideDuration: 1000,
    timeOut: 3000,
    extendedTimeOut: 2000,
    maxOpened: 3,
  };
}
