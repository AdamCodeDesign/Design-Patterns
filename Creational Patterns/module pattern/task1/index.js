const Module = (function (globalObj) {
  let privData = 679;

  return {
    getData: function () {
      return privData;
    },

    setData: function (data) {
      privData = data;
    },
  };
})(window);

Module.setData(24)
console.log(Module.getData())