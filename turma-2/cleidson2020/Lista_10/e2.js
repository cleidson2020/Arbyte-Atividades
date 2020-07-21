const rs = require('readline-sync');

class nome {
    constructor(name) {
        this.seuNome = rs.question('Insira um nome: ');
        this.suaIdade = rs.questionInt('Insira uma idade ');

    }
}

let printar = new nome();
console.log(printar);