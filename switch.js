const avaliacao = 5

switch (avaliacao) {
    case 5:
        console.log('Avaliação otima');
        break;
    case 4:
        console.log('Avaliação boa');
        break;
    case 3:
        console.log('Avaliaçao neutra');
        break;
    default:
        console.log('Avaliação baixa');
        break;

}

// criar um fluxo que identifica o tipo de usuario e comunica de acord0
// ex: usuario free tem acesso limitado ao app
//     usuario premium tem acesso a todas as funçoes
//     usuario super premium tem acesso total e bonus especiais


const usuario = 'free';
switch (usuario) {
    case 'free':
        console.log('Usuario tem acesso limitado ao app');
        break;
    case 'premium':
        console.log('usuario premium tem acesso a todas as funçoes');
        break;
    case 'superPremium':
        console.log(' usuario super premium tem acesso total e bonus especiais');
        break;
    default:
        console.log('Tipo de usuario desconhecido');
        break;


}

