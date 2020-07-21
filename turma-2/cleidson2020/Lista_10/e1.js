const rs = require('readline-sync');


class user {
    constructor() {
        this.nome = rs.question('Insira Seu Nome: ')

    }
}

let printar = new user();
console.log(printar);