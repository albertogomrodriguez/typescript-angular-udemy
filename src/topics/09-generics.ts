export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString= whatsMyType<string>("Hola Mundo")
const amINumber= whatsMyType<number>(333)
const amIArray= whatsMyType<number[]>([1,223,43,56,7])

console.log(amIString.split(" "))
console.log(amINumber.toFixed())
console.log(amIArray.join("-"))