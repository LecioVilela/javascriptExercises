const vetor = [1, 2, 3, 4, 5]
const par = numero => numero % 2 === 0
const somadora = (total, atual) => total + atual
const soma = vetor
    .filter(par)
    .reduce(somadora, 0)
console.log('A soma dos pares ', soma)