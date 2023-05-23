alert("Olá!");
const alterarTema = document.getElementById("escurecer");

const main = document.querySelector("main")


const imagemTrocaDeIcone = document.querySelector(".imagem-botao");

alterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = main.classList.contains("modo-escuro")

    main.classList.toggle("modo-escuro") 

    if (modoEscuroAtivo) {
        imagemTrocaDeIcone.setAttribute('src', './src/imagens/imagens/moon.png');
    } else {
        imagemTrocaDeIcone.setAttribute('src', './src/imagens/imagens/sun.png')
    }
});
