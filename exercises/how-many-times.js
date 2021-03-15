const vetor = [1, 2, 3, 4, 2, 1, 3, 2, 1]
const howManyTimes = (agg, val) => {
    if (!agg[val]) {
        agg[val] = 0
    }
    agg[val] = agg[val] + 1
    return agg
}
const times = vetor.reduce(howManyTimes, {})
console.log(times)