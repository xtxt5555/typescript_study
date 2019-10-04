var num:number = 1
var arr:Array<number> = [1,2,3]
var arr1:number[] = [1,2,3]
var arr2:[number, string] = [111,'str']
enum Err {
  timeout,
  fatal
}
var f:Err = Err.timeout
var para:any = 1

function fn():void {
  console.log('run')
}

var n:never = (()=> {
  throw new Error('111')
})()
