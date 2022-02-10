const fs = require ('fs')
const readdir = caminho => new Promise ((resolve, reject)=>{
    fs.readdir (caminho, (err, arquivos)=> {
        if (err) {
            reject(err)
        }else{
            resolve(arquivos)
        }
    })
})
readdir("./").then (arquivos => console.log(arquivos))