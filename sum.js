//1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.


/*
const vetor =[1,2,3,4,5]
const soma = vetor.reduce ((total, valor)=> total + valor, 0)
console.log('soma', soma)
*/

//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter

//soamente pares
/*
const vetor = [1,2,3,4,5]
const ehPar = numero => numero % 2 ===0
const pares = vetor.filter(ehPar)
console.log('Somente Pares', pares)
*/
// somando os pares
/*
const somadora = (total, atual) => total + atual
const soma =  pares.reduce(somadora, 0)
console.log('Somando os pares', soma)
*/

//3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
/*
const vetor = [1,2,3,4,5]
const ehImpar = numero => numero % 2 !== 0
const somadora = (total, atual) => total + atual
const soma = vetor
        .filter(ehImpar)
        .reduce(somadora)
console.log(soma)
*/

const calculator = (num1, op , num2) =>{
        if (op === '+') {
                return (num1 + num2)
        }

        if (op === '-') {
                return(num1 - num2)
        }
}
console.log(calculator(10, '-', 2))


const calculadoraFn = (numero1, operacao, numero2) => operacao(numero1, numero2)

const somar = (numero1, numero2) => numero1+numero2
const sub =(numero1, numero2) => numero1-numero2
console.log("somar", calculadoraFn(10, somar, 20))
console.log("subtrair",calculadoraFn(20, sub, 10))
