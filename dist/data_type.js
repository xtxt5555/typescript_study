"use strict";
var num = 1;
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
var arr2 = [111, 'str'];
var Err;
(function (Err) {
    Err[Err["timeout"] = 0] = "timeout";
    Err[Err["fatal"] = 1] = "fatal";
})(Err || (Err = {}));
var f = Err.timeout;
var para = 1;
function fn() {
    console.log('run');
}
var n = (function () {
    throw new Error('111');
})();
