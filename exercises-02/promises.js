function tempo(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

let num1 = 0
let num2 = 3

if (num2%num1 == 0) {
    tempo()
} else if
    (num2+num1 == 3) {
    console.log('erro')
}


tempo(2000)
.then(() => console.log('opa'))
