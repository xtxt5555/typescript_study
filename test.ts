let a:boolean = false
a = true

enum Flag {
  success = 1,
  error,
}

var flag:Flag = Flag.success
console.log(Flag.error);
