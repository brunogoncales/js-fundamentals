let promise1 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    resolve('A promise 1 foi resolvida')
  }, 2000);
})

let promise2 = new Promise((resolve, reject)=>{
  setTimeout(() => {
    reject('A promise 2 foi NEGADA')
  }, 2000);
});

let promise3= new Promise ((resolve, reject)=>{
  setTimeout(() => {
    resolve('A promise 3 foi resolvida')
  }, 2000);
})

Promise.all([promise1, promise2, promise3])
.then(([resultado1, resultado2, resultado3])=> {
  console.log("Todas as Promises foram resolvidas")
  console.log(resultado1)
  console.log(resultado2)
  console.log(resultado3)
})

.catch((err)=>{ 
  console.log('Umas das promises foram negadas')
  console.log(err)
})



// promise2.then((resultado) => {
//   console.log(resultado)
// }).catch((err)=> {
//   console.log(err)
// })

