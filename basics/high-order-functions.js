// HOF

const valores = [1, 2, 3, 4]

const dobro = valor => valor + 2
const impares = valor => valor % 2 === 0
const somar = (num1, num2) => num1 + num2

const soma = valores
    .filter(impares)
    .map(dobro)
    .reduce(somar, 0)

console.log(soma)