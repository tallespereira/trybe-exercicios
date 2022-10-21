let chessPiece = 'rook'

switch(chessPiece){
case 'bishop':
    console.log('Diagonals in any number of unoccupied squares in a straight line.');
break;

case 'pawn': 
    console.log('One vacant square directly forward. It may move two vacants squares instead if is their first move.');
break;

case 'rook':
    console.log('Horizontal or vertically, through any number of unoccupied squares');
break;

case 'knight':
    console.log('Two squares vertically and one square horizontally, or two squares horizontally and one square vertically');
break;

case 'queen': 
    console.log('Any number of unoccupied squares in a straight line, in any direction');
break;

case 'king': 
    console.log('One vacant square in any direction');

default:
    console.log(Error)

}







// exercícios de else/if
// const n1 = 60
// const n2 = 60
// const n3 = 60









// exercício calculo de ângulos de um triângulo.
// if(n1 + n2 + n3 == 180){
//     console.log(true);

// }

// else if(n1 + n2 + n3 > 180){
//     console.log(false);
// }

// else if(n1 + n2 + n3 < 180){
//     console.log(false);
// }

// else{
//     console.log("Erro, únidade(s) de medida não reconhecida(s).")
// }









// exercício comparação de números posítivos e negativos ->
// if(n1 < 0 ){
//     console.log(true);

// }

// else if(n1 > 0){
//     console.log(false);

// }

// else{
//     console.log(0)
// }









// exercício de comparação de 3 números ->
// if(n1 > n2 && n1 > n3){
//     console.log(n1);

// }

// else if(n2 > n1 && n2 > n3){
//     console.log(n2);

// }

// else if(n3 > n1 && n3 > n2){
//     console.log(n3);

// }









// exercício de comparação de 2 números ->
// if(n1 > n2) {
//     console.log(n1);

// }

// else if(n2 > n1){
//     console.log(n2);

// }









// console.log(n1 + n2);

// console.log(n1 - n2);

// console.log(n1 * n2);

// console.log(n1 / n2);

// console.log(n1 % n2);

// console.log(n1 ** n2)