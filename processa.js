
const fs = require('fs')
const { resolve } = require('path')

console.log(1)

//Callback
/*
fs.readFile('./in1.txt', (err, contents)=> {
  fs.readFile('./in2.txt', (err2, contents2)=>{
    console.log(err,String(contents))
    console.log(err2, String(contents2))
  })
})
*/


//Promises
/*
const readFile = file => new Promise ((resolve, reject)=>{
  fs.readFile(file, (err, contents) =>{
    if(err) { 
      reject(err)
    }else {
      resolve(contents)
    }
  })
})

readFile('./in1.txt') 
  .then(contents => {
    console.log(String (contents))
    return readFile('./in2.txt')
})

.then(contents => {
  console.log(String(contents))

})
*/
 //async-await

 const readFile = file => new Promise ((resolve, reject)=>{
  fs.readFile(file, (err, contents) =>{
    if(err) { 
      reject(err)
    }else {
      resolve(contents)
    }
  })
})

const init = async() => {
  try{
   const contents = await readFile('./in1.txt')
   const contents2 = await readFile('./in2.txt')
   console.log(String(contents))
   console.log(String(contents2))

 }catch(err){
   console.log(err, 'Esse arquivo não existe')
 }
}

console.log('init', init())

console.log(2)

console.log(3)