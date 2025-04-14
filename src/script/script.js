const listaDeContatos = [
{
    id: 1,
    nome: "Joaquim",
    ultimaMensagem: "Olá, vamos programar?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/david--moore.png",
    conversas: [
        {
            mensagem: "Oi, eu sou o novo rogramador!",
            tipo: "recebida",
            horario: "20:20"},
        {
            mensagem: "Que legal, eu tembém sou",
            tipo: "enviada",
            horario: "20:20"},
        {
            mensagem: "Vamos codar juntos?",
            tipo: "recebida",
            horario: "20:20"
        },
    ]
},
{
    id: 2,
    nome: "Maria",
    ultimaMensagem: "Quer programar comigo?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/jessica--drew.png",
    conversas: [
        {
            mensagem: "Oi, eu sou o novo rogramador!",
            tipo: "recebida",
            horario: "20:20"},
        {
            mensagem: "Que legal, eu tembém sou",
            tipo: "enviada",
            horario: "20:20"},
        {
            mensagem: "Vamos codar juntos?",
            tipo: "recebida",
            horario: "20:20"
        },
    ]
},
{
    id: 3,
    nome: "João",
    ultimaMensagem: "Eu sou o Novo Programador",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/greg--james.png",
    conversas: [
        {
            mensagem: "Oi, eu sou o novo rogramador!",
            tipo: "recebida",
            horario: "20:20"},
        {
            mensagem: "Que legal, eu tembém sou",
            tipo: "enviada",
            horario: "20:20"},
        {
            mensagem: "Vamos codar juntos?",
            tipo: "recebida",
            horario: "20:20"
        },
    ]
},
{
    id: 4,
    nome: "José",
    ultimaMensagem: "Tem Café?",
    horarioUltimaMensagem: "20:20",
    avatar: "./src/assets/images/emily--dorson.png",
    conversas: [
        {
            mensagem: "Oi, eu sou o novo rogramador!",
            tipo: "recebida",
            horario: "20:20"},
        {
            mensagem: "Poxa acho que vou fazer um café!",
            tipo: "enviada",
            horario: "20:20"},
        {
            mensagem: "Eu quero café também!",
            tipo: "recebida",
            horario: "20:20"
        },
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

    const inputBuscaContato = document.querySelector(".div--search input[type='search']");
        console.log(inputBuscaContato);

        inputBuscaContato.addEventListener("input", () => {
            const termoDeBusca = inputBuscaContato.value;
            console.log(`O termo buscado foi: ${termoDeBusca}`);
            carregarContatos(termoDeBusca);
         });

   
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
        const mensagemRenderizada = renderizarMensagem("recebida", mensagemDoBot, "21:10");
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
        const stylesDiv = tipo === "enviada" ? "you" : "other";

        divMensagem.classList.add(
            "flex",
            "flex--direction--row",
            "width--100",
            `justify--content--${direcao}`,
            "fade-in",
        );

        divMensagem.innerHTML = `
        <div class="flex flex--direction--row justify--content--${direcao} width--100">
            <div class="flex flex--direction--column message ${stylesDiv}">
                <div class="flex--6">
                   ${mensagem}
                </div>
                <div class="flex--1 flex align--items--center flex--direction--row justify--content--end infos--message font--size--12">
                    <div>${horario}</div>
                    <img src="./src/assets/icons/viewed.svg"/>

                </div>
            </div>
        </div>             
        `;

        return divMensagem;
    }

    function carregarMensagemContato(index) {
        const contato = listaDeContatos[index];
        listaMensagens.innerHTML = "";

        contato.conversas.forEach((conversa) => {
            const mensagemRenderizada = renderizarMensagem(
                conversa.tipo,
                conversa.mensagem,
                conversa.horario
            );
            listaMensagens.appendChild(mensagemRenderizada);
        });
    };

    function carregarContatos(filtro = "") {        
        const divContatosElement = document.querySelector(".div--contacts");
        divContatosElement.innerHTML = "";

        //toLowCase() -> transforma uma string para minúscula
        //toUpperCase() -> transforma uma string para maiúscula

        // filter, find, reduce, map

        const contatosFiltrados = listaDeContatos.filter((contato) => 
            contato.nome.toLowerCase().includes(filtro.toLowerCase())
        );

        if (contatosFiltrados.length === 0 ){
            divContatosElement.innerHTML =
            "<div><span>Contato não encontrado<span/><div/>";
            return;
        }        
         
        contatosFiltrados.forEach((contato, index) => {
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

            divParentElement.addEventListener("click", () => {
                carregarMensagemContato(index);
            });

            divContatosElement.appendChild(divParentElement);
        }); 
    }
     setTimeout(() => {
        carregarContatos();
    }, 2500);
});