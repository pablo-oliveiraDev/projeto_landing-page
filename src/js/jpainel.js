const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setavoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click',function(){
    imagemAtual++;
    imagensPainel.forEach(imagem => {
       imagem.classList.remove('mostrar') 
       console.log(imagem)
    })
    imagensPainel[imagemAtual].classList.add('mostrar');
})