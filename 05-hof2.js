/*
const soma = (valor1, valor2) => valor1 + valor2
const calc = (op, valor1, valor2) => op(valor1, valor2)

const c = calc(soma, 10, 5)
console.log(c)
*/
//--------------------------------

const mult = (a, b) => a * b
const calcular = (op, a, b) => op(a, b)

const selectOp = op => {
  const ops = {
    '*': mult
  }
  return ops[op]
}

const d = calcular(selectOp('*'), 20, 10)
console.log(d)