const vetor = [1, 2, 3, 4, 5]

/*let sum = 0
for (let i = 0; i < vetor.length; i++) {
    sum = sum + vetor[i]
}*/

const soma = vetor.reduce((total, valor) => total + valor, 0)
console.log('soma', soma)