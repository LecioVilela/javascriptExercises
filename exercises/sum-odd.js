const vetor = [1, 2, 3, 4, 5]
const impar = valor => valor % 2 !== 0
const soma = (atual, valor) => atual + valor

const somas = vetor.filter(impar).reduce(soma)
console.log(somas)