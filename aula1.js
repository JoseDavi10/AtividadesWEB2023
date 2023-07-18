/*function example (a, b){
    return a * b;
}

console.log(example.length)
console.log(example.constructor)

const square = function(number) {return number * number}
let x = square(4)*/

// ------------------------------------------------------//

/*function soma(x, y=10){
    return x + y;
}
console.log(soma(5));*/

// ----------------------------------------------------------//

/*const a = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium'
];
const a2 = a.map(function(s) {return s.length});
console.log(a2);*/

// ----------------------------------------------------------//

/*const a = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium'
];
const a3 = a.map(s => s.length);
console.log(a3);

function soma(a,b){
    return a+b;
}

(a, b) => {
    return a + b;
}
let resultado = (a, b) => a + b;*/

// ----------------------------------------------------------//

/*let pikachu = {
    nome: "Pikachu",
    especie: "Pikachu",
    nivel: 1,
    falar: function () {
        return '${this.nome} ${this.nome}'
    }
}
let charmander = new Object();
charmander.nome = "Charmander";
charmander.falar = () => "chaaarr"*/

// ----------------------------------------------------------//

function Pokemon(nome, especie, nivel=1) {
    this.nome = nome;
    this.especie = especie;
    this.nivel = nivel;
    this.falar = () => '${this.nome} ${this.nome}';
}

 let pikachu = new Pokemon("Pikachu", "Pikachu");
let charmander = new Pokemon("Charmander", "Charmander", 10);