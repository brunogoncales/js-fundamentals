//foreach
const listOfcolors = ['blue', 'green', 'black', 'yellow', 'white']
listOfcolors.forEach((value, index) => {
  console.log(index + 1, value) //`${index + 1}.${value}`)
})

//---------------------

const testForEach = (value, index, arr) => {
  console.log(index, value, arr)
}
listOfcolors.forEach(testForEach)

//------------------------------------------------------------

// Map

const listOfNumbers = [1, 2, 3, 4, 5]

const testMap = ((value, index, arr) => {
  console.log(value, index, arr)
  return value * 3
})

const retMap = listOfNumbers.map(testMap)
console.log(retMap)

//------------------------------------------------------------------------------------

//Reduce

const nums = [1, 2, 3, 4]
const testReduce = (previousValue, currentValue, currentIndex, arr) => {
  console.log(previousValue, currentValue, currentIndex, arr)
  return previousValue + currentValue
}
const retReduce = nums.reduce(testReduce)
console.log('Retorno Reduce', retReduce)

const soma = nums
  .map(a => a * 2)
  .reduce((a, b) => a + b)

console.log(soma)
