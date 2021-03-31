//pure function

const somar = (num1, num2) => {
    if (num1 > num2) {
        return num1 - num2
    }
    return num2 + num1
}
const media = (num1, num2) => somar(num1, num2) / 2
console.log(media(41, 78))