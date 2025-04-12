const listaDeContatos = [
{
    id: 1,
    nome: "Joaquim",
    ultimaMensagem: "Olá, vamos programar?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/david--moore.png"
},
{
    id: 2,
    nome: "Maria",
    ultimaMensagem: "Quer programar comigo?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/jessica--drew.png"
},
{
    id: 3,
    nome: "João",
    ultimaMensagem: "Eu sou o Novo Programador",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/greg--james.png"
},
{
    id: 4,
    nome: "José",
    ultimaMensagem: "Tem Café?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/emily--dorson.png"
},
];

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

    function carregarContatos() {        
        const divContatosElement = document.querySelector(".div--contacts");
         
        listaDeContatos.forEach((contato) => {
            console.log(contato);
            const divParentElement = document.createElement("div");
           divParentElement.classList.add("flex", "area--contact", "fade-in");

            divParentElement.innerHTML = `
                    <div class="flex justify--content--center align--items--center flex--1">
                        <img class="avatar--left--bar" src="${contato.avatar}" />                        
                    </div>

                    <div class="flex flex--direction--column justify--content--center flex--3">
                        <div class="flex align--items--center infos--contact">
                            <div class="font--family font--weight--bold">${contato.nome}</div>

                        </div>
                        <div class="last--message">${contato.ultimaMensagem}</div>                        
                    </div>

                    <div class="flex flex--direction--column justify--content--center align--items--end flex--1 div--last--messages--info">
                        <div class="hour--last--message">${contato.horarioUltimaMensagem}</div>
                        
                    </div>                
            `;            
            divContatosElement.appendChild(divParentElement);
        }); 
    }
     setTimeout(() => {
            carregarContatos();
    }, 2500);
});