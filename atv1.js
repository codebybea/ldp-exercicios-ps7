// Beatriz Alves Borges - 23214290001

// Crie 10 funções em JS  de vários formatos seguindo algumas regras:

// i) Crie funções tanto numéricas quanto não numéricas.
// ii) Algumas funções devem conter parâmetros, enquanto outras não.
// iii) Crie funções de modo que o usuário deva entrar com os argumentos após a definição da função.
// iv) Crie funções que usem for loops, while loops, switch/case
// v) Crie funções que usem condicionais, if else....
// vi) Crie funções que gerem arrays a partir de for loops e com exceções (use includes())


// multiplicação
function multNormal (n, n1) {
    return n * n1;
}
let a = 14;
let b = 3;
console.log(multNormal(a, b));

// livro
function livroAutor (nome, titulo) {
    return `Esse eh ${titulo}, do autor ${nome}. \n`
}
let autor = 'Collen Hoover';
let livro = 'Assim que acaba';
console.log(livroAutor(autor, livro));

// ola
function ola() {
    return `Olá! \n`
}
console.log(ola());

// idade
const main = require('prompt-sync')({signint: true});
function idade(age) {
    return `Sua idade eh ${age}. \n`;
}
let pergunta = parseInt(main('Digite sua idade: '));
console.log(idade(pergunta));

// impar
function impar() {
    let resultado = ''
    for (let n = 0; n < 11; n++) {
        if (n % 2 == 1) {
            resultado += `O numero ${n} eh impar. \n`
        } else {
            resultado += `O numero ${n} eh par. \n`
        }
    }
    return resultado;
}
console.log(impar());

// pares
let pares = [];
function par() {
    for (i = 0; i <= 20; i++) {
        while (i < 21) {
        if (i % 2 == 0) {
            pares.push(i);
        }
        break;
    }
    }
    return pares;
}
console.log(par());

// includes
function dez() {
    return pares.includes(10);
}
console.log(dez());

// bebida
function bebida() {
    for(let j = 16; j <= 20; j++) {
        switch (j) {
            case 16:
                console.log `Não pode beber`
                break;
            case 17:
                console.log `Não pode beber`
                break;
            case 18:
                console.log `Não pode beber`
                break;
            case 19:
                console.log `Pode beber`
                break;
            case 20:
                console.log `Pode beber`
                break;
        }
    }
}
bebida();

// soma
function calcularSoma() {
    const n1 = parseFloat(main("Digite um o número: "));
    const n2 = parseFloat(main("Digite um segundo número: "));
    const soma = n1 + n2;
    return console.log(`A soma dos números é: ${soma}`);
  }
  
  calcularSoma()

// jogo
function jogo(thebest) {
    return `O Jogo ${thebest} é o MELHOR jogo!!`
}
let comida = main('Escreva o nome do melhor jogo na sua opn: ');
console.log(jogo(thebest));