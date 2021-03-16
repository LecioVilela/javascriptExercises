console.log(1)
setTimeout(() => {
    console.log('Olá em 10 segundos...')
}, 0)
console.log(2)

let count = 0
let interval = setInterval(() => {
    console.log('ola')
    count++
    if (count > 5) {
        clearInterval(interval)
    }
}, 1000)
console.log(3)