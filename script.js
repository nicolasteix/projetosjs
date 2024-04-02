function mudarImagem(){
let img = document.getElementById('imagem');
let selectFamilia = document.getElementById('familia');
let valorSelect = selectFamilia.value;
let titulo = document.getElementById('titulo');

switch (valorSelect) {
    case 'shelly':
        img.src = 'img/shelly.png';
        titulo.innerHTML='Bem-Vinda!';
        break;
        
    case 'luna':
        img.src = 'img/luna.png'
        titulo.innerHTML='Bem-Vinda!';
        break;
     case 'helen':
        img.src = 'img/mãe.png';
        titulo.innerHTML='Bem-Vinda!';
        break;
    case 'marcelo':
        img.src = 'img/pai.png'
        titulo.innerHTML='Bem-Vindo!';           break;
    case 'zegui':
        img.src = 'img/zegui.png';
        titulo.innerHTML='Bem-Vindo!';
        break;
    case 'mikael':
        img.src = 'img/mikael.png';
        titulo.innerHTML='Bem-Vindo!';
        break;
    default:
        img.src = 'img/shelly.png'; // Imagem padrão
}
}
document.getElementById('familia').addEventListener('change', mudarImagem);
