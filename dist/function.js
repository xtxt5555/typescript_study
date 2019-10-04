"use strict";
var fn2 = function (name, age) {
    if (!age) {
        return name + "----" + age;
    }
    return name + "----\u5E74\u9F84\u4FDD\u5BC6";
};
console.log(fn2('tom', 20));
var s1 = '123';
console.dir(s1.constructor);
function fn3(name, age) {
    if (typeof name === 'string') {
        console.log(name + "----" + (age || '20'));
    }
    else {
        console.log(['tom', 'jack'][name] + "----" + (age || '20'));
    }
}
function fn4(name, age) {
    if (name === void 0) { name = 'tom'; }
    if (age === void 0) { age = 2; }
    console.log(name + "----" + age);
}
