const listaDeContatos = [
{
    id: 1,
    nome: "Joaquim",
    ultimaMensagem: "Olá, vamos programar?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/david--moore.png",
    conversa: [
        { mensagem: "Oi, eu sou o novo programador!", tipo: "recebida", horario: "20:20" },
        { mensagem: "Que legal, eu também sou", tipo: "enviada", horario: "20:20" },
        { mensagem: "Vamos codar juntos?", tipo: "recebida", horario: "20:20" },
    ]
},
{
    id: 2,
    nome: "Maria",
    ultimaMensagem: "Quer programar comigo?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/jessica--drew.png",
    conversa: [
        { mensagem: "Oi, eu sou o novo programador!", tipo: "recebida", horario: "20:20" },
        { mensagem: "Que legal, eu também sou", tipo: "enviada", horario: "20:20" },
        { mensagem: "Vamos codar juntos?", tipo: "recebida", horario: "20:20" },
    ]
},
{
    id: 3,
    nome: "João",
    ultimaMensagem: "Eu sou o Novo Programador",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/greg--james.png",
    conversa: [
        { mensagem: "Oi, eu sou o novo programador!", tipo: "recebida", horario: "20:20" },
        { mensagem: "Que legal, eu também sou", tipo: "enviada", horario: "20:20" },
        { mensagem: "Vamos codar juntos?", tipo: "recebida", horario: "20:20" },
    ]
},
{
    id: 4,
    nome: "José",
    ultimaMensagem: "Tem Café?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/emily--dorson.png",
    conversa: [
        { mensagem: "Oi, eu sou o novo programador!", tipo: "recebida", horario: "20:20" },
        { mensagem: "Que legal, eu também sou", tipo: "enviada", horario: "20:20" },
        { mensagem: "Tem café ai?", tipo: "recebida", horario: "20:20" },
    ]
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
            const mensagemRenderizada = renderizarMensagem("enviada", texto, "21:00");
            listaMensagens.appendChild(mensagemRenderizada);
            inputMsg.value = "";

        //setTimeout -> Executa alguma coisa apenas uma única vez, após um intrvalo de tempo.
        //setInterval -> Executa alguma coisa em um intervalo de tempo.
        
        setTimeout(responderMensagem, 2000);
        }  
    }

    function responderMensagem() {
        const posicao = Math.floor(Math.random() * respostasParaOBot.length);
        const mensagemDoBot = respostasParaOBot[posicao];
        const mensagemRenderizada = renderizarMensagem("recebida", mensagemDoBot, "21:00");
        listaMensagens.appendChild(mensagemRenderizada);
    }

    buttonSend.addEventListener("click", () => {
       enviarMensagem();
               
    });

    inputMsg.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            enviarMensagem();
        };
    });

    function renderizarMensagem(tipo, mensagem, horario) {
        const divMensagem = document.createElement("div");
        const direcao = tipo === "enviada" ? "end" : "start";
        const styleDiv = tipo === "enviada" ? "you" : "other";

        divMensagem.classList.add(
            "flex",
            "flex--direction--row",
            "width--100",
            `justify--content--${direcao}`,
            "fade-in"
        );

        divMensagem.innerHTML = `       
            <div class="flex flex--direction--column message ${styleDiv}">
                <div class="flex--6">
                    ${mensagem}
                </div>

                <div class="flex--1 flex align--items--center flex--direction--row justify--content--end infos--message font--size--12">                    
                    <div>${horario}</div>
                    <img src="./src/assets/icons/viewed.svg"/>

                </div>
            </div>            
        `;
        return divMensagem;
    }

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