//DOMContentLoeaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Minha página carregou");

    // Quando trabalhamos com ID utilizamos o #
    // Quando trabalhamos com Classes utilizamos o .

    const inputMsg = document.querySelector("#inputMensagem");
        console.log(inputMsg);
        
    inputMsg.placeholder = "Digite sua mensagem";

    const buttons = document.querySelectorAll(".cursor--pointer");
        console.log(buttons);

    const buttonSend = document.querySelector(".cursor--pointer[src*='send']");
        console.log(buttonSend);

    const listaMensagens = document.querySelector(".div--messages");
    console.log(listaMensagens);

    //buttonSend.classList.add("minha-classe-modulo-um")

const respostasParaOBot = [
    "Olá, tudo bem?",
    "Como você está?",
    "Qual o seu nome?",
    "Meu nome é o Novo BOT",
    "Eu faço o curso do novo Programador",
    "Você quer conversar comigo?"
];

    function enviarMensagem() {
       const texto = inputMsg.value.trim();

        if (texto === "") {
            alert("Não possue mensagem ainda.");
        }else {
            adicionarMensagen("enviada", texto);
            inputMsg.value = "";

        //setTimeout -> Executa alguma coisa apenas uma única vez, após um intrvalo de tempo.
        //setInterval -> Executa alguma coisa em um intervalo de tempo.
        
        setTimeout(responderMensagem, 2000);
        }  
    }

    function responderMensagem() {
        const posicao = Math.floor(Math.random() * respostasParaOBot.length);
        const mensagemDoBot = respostasParaOBot[posicao];
        adicionarMensagen("recebida", mensagemDoBot);
    }

    function adicionarMensagen(tipoMensagem, texto) {
        const mensagemElement = document.createElement("div");

        mensagemElement.classList.add("message", "fade-in");

        if (tipoMensagem === "enviada" ) {
            mensagemElement.classList.add('you');
        }else {
            mensagemElement.classList.add("other");
        }

        mensagemElement.innerText = texto;
        listaMensagens.appendChild(mensagemElement);

        setTimeout(() => {
            mensagemElement.classList.remove("fade-in");
        }, 500);
    }

    buttonSend.addEventListener("click", () => {
       enviarMensagem();
               
    });

    inputMsg.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            enviarMensagem();
        };
    });
});