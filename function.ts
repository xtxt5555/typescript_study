var fn2 = function(name: string, age?: number):string {
  if (!age) {
    return `${name}----${age}`
  }
  return `${name}----年龄保密`
}

console.log(fn2('tom', 20));

let s1: unknown = '123'
console.dir((s1 as object).constructor);

function fn3(name: string): void
function fn3(name: number, age?: number): void
function fn3(name: any, age?: any): void {
  if (typeof name === 'string') {
    console.log(`${name}----${age || '20'}`)
  } else {
    console.log(`${['tom', 'jack'][name]}----${age || '20'}`)
  }
}

function fn4(name: string = 'tom', age: number = 2) {
  console.log(`${name}----${age}`)
}