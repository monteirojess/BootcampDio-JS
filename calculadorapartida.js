//let teste = prompt('teste:')
let msg1 = prompt('Digite o saldo de vitórias:');
let valor1 = parseInt(msg1);
let msg2 = prompt('Digite o saldo de derrotas:');
let valor2 = parseInt(msg2);

function calculadora (vitorias, derrotas){
    let saldo = vitorias - derrotas;

    if(saldo < 10 ){
        return 'Ferro';
    }else if (saldo >= 11 && saldo <= 20 ){
        return 'Bronze';

    }else if (saldo >= 21 && saldo <= 50){
        return 'Prata';
    }else if (saldo >= 51 && saldo <= 80) {
        return 'Ouro';
    } else if ( saldo >= 81 && saldo <= 90) {
        return 'Diamante';
    } else if ( saldo >= 91 && saldo <= 100){
        return 'Lendário';
    }else {
        return 'Imortal';
    }

} 
let ranking = calculadora (valor1,valor2);
console.log(ranking);

