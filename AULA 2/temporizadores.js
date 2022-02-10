
console.log(1)
setTimeout(() => {
   console.log('ola em 2 segundos') 
}, 2000);

console.log(2)
//processo muito pessado

let count = 0
let interval = setInterval(() => {
    console.log('Ola')
    count ++
    if(count > 5) {
        clearInterval(interval)
    }
}, 1000);
console.log(3)