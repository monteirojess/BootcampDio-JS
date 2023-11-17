

let nome = prompt(String('Nome do herói:'));
console.log(nome);
let xp = parseInt(prompt('Nivel do herói:'));
console.log(xp);

if(xp <= 1000){
    console.log('Ferro')
}else if(xp >= 1001 || xp <= 2000) {
    console.log('Bronze')
    
}else if(xp >= 2001 || xp <= 5000) {
    console.log('Prata')
    
}else if(xp >= 6001 || xp <= 7000) {
    console.log('Ouro')

} else if(xp >= 7001 || xp <= 8000) {
    console.log(' Platina Diamante')

}else if(xp >= 8001 || xp <= 9000) {
    console.log('Ascendente')

}else if(xp >= 9001 || xp <= 10000) {
    console.log('Imortal')


}else{
    console.log('Radiante')
}

console.log('O herói de nome ' + nome + 'está no nivel de ' + xp);
