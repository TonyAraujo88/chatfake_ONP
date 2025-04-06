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

    //buttonSend.classList.add("minha-classe-modulo-um")

    buttonSend.addEventListener("click", () => {
        const texto = inputMsg.value.trim();

        if (texto === "") {
            alert("Não possue mensagem ainda.");
        }else {
            alert(texto);
        }
               
    });
});