console.log('Nesse arquivo vamos trabalhar um pouco sobre while')

console.log('While é uma estrutura de repetiçao')

console.log('Trabalhando com lista:')

// const salvador = 'Salvador';
// const saoPaulo = 'Sao Paulo';
// const rioDeJaneiro = ' Rio De Janeiro';


let array = new Array('Salvador', 'Sao Paulo', ' Rio De Janeiro')
array.push('BH') //Adicionando itens na lista (array)
console.log("Destinos Possiveis:")
console.log(array)

 array.splice(1,1) // deletar itens do array 
 console.log(array)

 console.log('Aprendendo a ver o node no terminal')

 console.log('Trabalhando com condicionais:')


array.push('BH') //Adicionando itens na lista (array)
console.log("Destinos Possiveis:")
console.log(array)



const idadeComprador =20;
const estaAcompanhada = true;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhada) {
   console.log("Passagem comprada com sucesso");
   array.splice(1, 1) // remover item do array
} else {
   console.log("Comprador menor de idade e nao posso vender");
}

console.log('Embarque: ');
if(idadeComprador >= 18 && temPassagemComprada){
   console.log("Boa viagem!");
} else {
   console.log('Voce nao pode embarcar');
}

const podeViajar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;

while(contador < 3){
    if(array[contador] ){
        console.log("Destino existe")
    } else {
        console.log("Destino nao existe")
    }
    contador +=1;
}


console.log(array)



