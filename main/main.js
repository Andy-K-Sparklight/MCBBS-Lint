(function () {
  globalInit();
  loadModule(ML_Info, (s) => {
    if (s) {
      runModule(ML_Info, () => {});
    }
  });
  loadModule(ML_AntiBlock, (s) => {
    if (s) {
      runModule(ML_AntiBlock, () => {});
    }
  });
})();
