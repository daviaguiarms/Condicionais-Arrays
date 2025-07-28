const ano = 1992

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)){
    console.log(`O ano de ${ano} é bissexto`);
    
} else {
     console.log(`O ano de ${ano} NAO é bissexto`);
}