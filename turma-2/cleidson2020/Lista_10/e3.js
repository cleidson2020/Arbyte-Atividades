const rs = require("readline-sync");

class formulaMagica {
    constructor() {
        this.nomeUser = rs.question("Insira Seu Nome: ");
        this.idadeUser = rs.questionInt('Insira Sua Idade: ');

    };
};

let magica = new formulaMagica();
console.log(`Olá ${magica.nomeUser} você tem ${magica.idadeUser} Anos`)