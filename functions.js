

const sayHello = () => { return "Hello"};   //nic nie jet zwracane, trzeba dodać return przed
const sayHello2 = () => "Hello";   //zwraca nam console.log
function sayHello3 () {
    return "hello"
}



console.log(sayHello() + ", Andrzej");
console.log(sayHello2() + ", Andrzej2");
console.log(sayHello3() + ", Andrzej3");

module.exports = {
    sayHello, sayHello3, sayHello2
}