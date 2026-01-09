const botaoLogar = document.querySelector(".logar");
const botaoRegistrar = document.querySelector(".registrar");
const janelaFormulario = document.querySelector(".janela-formulario");
const inicio = document.querySelector(".inicio");
const botaoFechar = document.querySelector(".fechar")

botaoLogar.addEventListener('click', () => {
    botaoLogar.classList.add("ativo");
    inicio.classList.add("desativo");
    janelaFormulario.classList.add("ativo");
});

botaoRegistrar.addEventListener('click', () => {
    botaoRegistrar.classList.add("ativo");
    inicio.classList.add("desativo");
    janelaFormulario.classList.add("ativo");
});

botaoFechar.addEventListener('click', () => {
    inicio.classList.remove("desativo");
    janelaFormulario.classList.remove("ativo");
})

