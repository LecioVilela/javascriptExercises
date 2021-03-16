const vetor = [1, 2, 2, 3, 4, 5, 5]

const howManyTimes = (agg, val) => {
    if (!agg[val]) {
        agg[val] = {
            value: val,
            occur: 0
        }
    }
    agg[val].occur = agg[val].occur + 1
    return agg
}

const contagem = vetor.reduce(howManyTimes, {})
const keys = Object.keys(contagem)
const unique = keys.filter(key => contagem[key].occur === 1)
const uniqueValues = unique.map(val => contagem[val].value)
console.log(uniqueValues)