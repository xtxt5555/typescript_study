"use strict";
var a = false;
a = true;
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var flag = Flag.success;
console.log(Flag.error);
