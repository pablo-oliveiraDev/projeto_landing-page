const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setavoltar = document.getElementById('btn-voltar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {


    imagemAtual++;
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
        console.log(imagem)

        if (imagemAtual >= 2) {
            document.getElementById("btn-avancar").style.opacity = "0"
            document.getElementById("btn-voltar").style.opacity = "1"
            return imagemAtual = 2;
        }
    })
    imagensPainel[imagemAtual].classList.add('mostrar');
});
setavoltar.addEventListener('click', function () {


    imagemAtual--;
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
        console.log(imagem)

        if (imagemAtual <= 0) {
            document.getElementById("btn-voltar").style.opacity = "0"
            document.getElementById("btn-avancar").style.opacity = "1"
            return imagemAtual = 0 ;
        
        }
    })
    imagensPainel[imagemAtual].classList.add('mostrar');
});