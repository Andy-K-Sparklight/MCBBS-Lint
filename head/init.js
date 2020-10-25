var RC_debug = true;
function globalInit() {
  $("head").prepend(
    "<link rel='stylesheet' href='https://cdn.staticfile.org/toastr.js/latest/css/toastr.min.css' type='text/css'/>"
  );
  $("head").prepend(
    "<link rel='stylesheet' href='https://cdn.staticfile.org/font-awesome/5.15.1/css/all.min.css' type='text/css'/>"
  );

  toastr.options = {
    closeButton: true,
    debug: false,
    progressBar: true,
    positionClass: "toast-bottom-right",
    onclick: null,
    showDuration: 300,
    hideDuration: 1000,
    timeOut: 2000,
    preventDuplicate: true,
    extendedTimeOut: 2000,
  };
}
