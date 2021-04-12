const fs = require('fs')

console.log('inicio')

//console.log(fs.readdirSync('./'))

fs.readdir('./', function(err, lista){
    if(err){
        console.log('erro', err)
    } else {
        console.log(lista)
    }
})

console.log('fim')