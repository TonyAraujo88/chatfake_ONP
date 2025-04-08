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

    function enviarAlerta(tipo) {
       const texto = inputMsg.value.trim();

        if (texto === "") {
            alert("Não possue mensagem ainda.");
        }else {
            adicionarMensagen(tipo, texto);
        }  
    }

    function adicionarMensagen(tipoMensagem, texto) {
        const mensagemElement = document.createElement("span");

        mensagemElement.classList.add("message");

        if (tipoMensagem === "enviada" ) {
            mensagemElement.classList.add('you');
        }else {
            mensagemElement.classList.add("other");
        }

        mensagemElement.innerText = texto;

        listaMensagens.appendChild(mensagemElement);
    }

    buttonSend.addEventListener("click", () => {
       enviarAlerta("recebida");
               
    });

    inputMsg.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            enviarAlerta("enviada");
        };
    });
});