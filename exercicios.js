const vetor = [ 1,2,3,4,5 ]
 const dobrado  = vetor.map(function (item) {
   return {original: item, dobrado: item * 2 }
 })


 //console.log(vetor, dobrado)

const dobrar = item => item * 2
const somentePares = item => item % 2 === 0
 
 //Somente pares

const soPares = vetor.filter(function (item) {
  return item % 2 === 0
  
})

// Pares dobrado.

const paresDobrado = vetor.filter(somentePares).map(dobrar)
console.log("Somente pares", soPares, "Pares doblado", paresDobrado)


//Somar os pares com Reduce
 const somar = (acumulado, atual) => acumulado + atual
 const somarPares = paresDobrado.reduce(somar, 10)
 console.log("Somar com Reduce", somarPares)