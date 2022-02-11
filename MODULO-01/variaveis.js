let obj = {
    name: 10, 
    obj: {
        a:1
    }
}
let c = obj.obj.a
let key = 'obj'
let d = obj [key] ['a']
console.log(d)
//

let vetor =[1,2,3,4,5]
console.log([0])
//

let funcao = function () {
    console.log('De dentro da função')
}
let funcaoCopia = funcao
funcaoCopia()