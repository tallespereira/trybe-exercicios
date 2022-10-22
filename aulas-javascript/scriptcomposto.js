let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let aritmeticResult = 0;
let higherNumber = numbers[0];
let lowerNumber = numbers[0];
let newArray = [];
let newArrayResult = [];


// Exercício utilizando for e push para criação automatica de nova array->
for(let index = 1; index <= 25; index += 1){
    newArray.push(index)

}


for (let index = 0; index < newArray.length; index += 1){
    console.log(newArray[index] / 2);
}






// Exercício de identificar os valores impares dentro da array->
// for (let index = 0; index < numbers.length; index += 1){
//     if(numbers[index] % 2 !==0){
//         result += 1;
//     }
// }

// if(result === 0){
//     console.log('Nenhum valor impar encontrado.');

// }

// else{
//     console.log(result);

// }









// Exercícios de comparação de valores na array->
// Maior numero
// for(index = 1; index < numbers.length; index += 1 ){
//     if(higherNumber < numbers[index]){
//     higherNumber = numbers[index];
    
//     }

// }

// console.log(higherNumber);

// Menor número
// for(index = 1; index < numbers.length; index += 1 ){
//     if(lowerNumber > numbers[index]){
//         lowerNumber = numbers[index];
    
//     }

// }

// console.log(lowerNumber);









// Exercício de média aritimetica + exercicio de soma de todos os valores da array->
// for(index = 0; index < numbers.length; index += 1){
//     result += numbers[index];
//     aritmeticResult = result / numbers.length;

// }

// if (aritmeticResult > 20){
//     console.log('Valor da média aritmética maior do que 20.')

// }

// else if(aritmeticResult <= 20){
//     console.log('Valor da média aritmética menor ou igual a 20.')
// }

// console.log (result);
// console.log (aritmeticResult);









// Exercicios de for para listagem->
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for(let name of names){
//     console.log(name);
// }



// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for(index = 0; index < groceryList.length; index++){
//     console.log(groceryList[index]);

// }









// Exercício de tabuada utilizando o for->
// let numero = 982;

// for(let contador = 1; contador <= 9; contador++){
//     console.log(numero * contador);
//     console.log('-');
// }

// let listaDeNomes =['Julia', 'Nicoli', 'Luciano'];

// for (let index = 0; index < listaDeNomes.length; index++){
//     console.log('Boas Vindas ao curso da Trybe, ' + listaDeNomes[index])
// }