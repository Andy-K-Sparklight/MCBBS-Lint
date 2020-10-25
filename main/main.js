(function () {
  jQuery(() => {
    globalInit();
    commonLoad(ML_Info);
    commonLoad(ML_AntiBlock);
    commonLoad(ML_Sprint);
  });
})();
function commonLoad(moduleIn, callback) {
  if (!callback) {
    callback = () => {};
  }
  loadModule(moduleIn, (s) => {
    if (s) {
      runModule(moduleIn, callback);
    }
  });
}
