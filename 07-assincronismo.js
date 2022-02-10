const fs = require('fs')
const { clearScreenDown } = require('readline')

console.log('1111')
const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (!err) {
        resolve(content.toString())
      } else {
        reject(err)
      }
    })
  })
}

//Async/wait
const run = async () => {
  const content = await readFile('05-hof.js')
  console.log(content)
  return 1111
}
run()

console.log('2222')