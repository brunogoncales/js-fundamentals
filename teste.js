// const soma = function (a,b) {
//   return a + b

// }

// const calculadora = function (op, a, b) {
//   return op(a , b)
// }

// console.log(calculadora (soma, 1,2))

// const vetor = [1,2,3,4,5]
// const dobrado = vetor.map(function(item) {
//   return {oirginal: item, dobrado: item * 2}
// })

// console.log(vetor, dobrado)


const vetor = [1, 2, 3, 4, 5]

const pares = vetor.filter(function (item) {
  return item % 2 === 0
})

const dobrarPares = item => item * 2 
const somentePares = vetor.filter(function (item) {
  return item % 2 === 0
}).map(dobrarPares)

const impares = vetor.filter (function (item) {
  return item % 2 === 1
})

console.log('Pares', pares,'Pares dobrado',somentePares,'Impares', impares)

const somar = (acumulado, atual) => acumulado + atual
const somatorio = somentePares.reduce(somar, 10)
console.log('Somar com Reduce', somatorio)



