const calculadora = (num1, op, num2) => {
    const ops = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '/': (num1, num2) => num1 / num2,
        '*': (num1, num2) => num1 * num2
    }
    return ops[op](num1, num2)

    /*
     if (op === '+') {
         return num1 + num2
     }
     if (op === '-') {
         return num1 - num2
     }
     if (op === '/') {
         return num1 / num2
     }
     if (op === '*') {
         return num1 * num2
     } */
}

console.log(calculadora(10, '+', 20))