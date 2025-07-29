let nome = 'Davi'

let saudacao = nome ? `Olá, ${nome}` : 'Olá, pessoa' // operador ternario

console.log(saudacao);


// verificar se estudante recebe bonus se a nota for 8 ou mais e se tiver no max 2 faltas


let nota = 8
let faltas = 3

const recebeBonus = (nota >= 8) && (faltas <=2) ? `${nome} recebe bonus` : `${nome} nao recebe bonus`;

console.log(recebeBonus);





