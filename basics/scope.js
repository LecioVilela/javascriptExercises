const scopeGlobal = 1

function teste() {
    const var0 = 20

    function outroTeste() {
        const var1 = 10
        console.log(var0, var1)
    }
    outroTeste()
}

teste()