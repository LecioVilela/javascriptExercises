//Ex 01
function test() {
    console.log(a), console.log(foo())
    var a = 1
    function foo() {
        return 2
    }
}

test()

//Ex02
function someFunction(number) {
    function otherFunction(input) {
        return a
    }

    a = 5

    return otherFunction
}

var firstResult = someFunction(9)
var result = firstResult(2)

//Ex 03
var fullname = 'Lécio Vilela'
var obj = { fullname: 'José Silva', prop: { fullname: 'Nome Sobrenome', getFullname: function () { return this.fullname } } }

console.log(obj.prop.getFullname())

var test = obj.prop.getFullname

console.log(test())

//Ex 04
var a = 1
function b() {
    a = 10
    return
    function a() { }
}
b()
console.log(a)

