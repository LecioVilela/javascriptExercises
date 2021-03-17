const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})
const execute = async () => {
    console.log('Olá!')
    await sleep(2000)
    console.log('Depois de 2 segundos...')
}
execute()
console.log('Passando na frente dos 2 segundos...')