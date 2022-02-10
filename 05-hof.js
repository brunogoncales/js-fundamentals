const vetor = [1, 2, 3]
vetor.forEach(item => console.log(item))



function mathOperator(num1, num2, op) {
  return op(num1, num2)
}

function operadorMult(num1, num2) {
  return num1 * num2

}

console.log(mathOperator(10, 2, (num1, num2) => num1 + num2))
console.log(mathOperator(10, 2, operadorMult))