import{aleatorio,nome} from '.aleatorio.js';
import{perguntas} from 'perguntas.js';
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Eai meus amigos, oque acham de fazer a diferença no mundo? por meio de uma equipe de reflorestamento  ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "cuidar do noso planeta e muito importante precisamos fazer o reflorestamento",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas sobre o desmatamento.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita.    pra sabermos as porcentagens de desmatamento",
        alternativas: [
            {
                texto: "Defende a ideia de que a população ainda pode fazer o bem?",
                afirmacao: "Vem impulsionando a inovação na área do desmatamento fazendo pessoas ajudar no reflorestamento."
            },
            {
                texto: "Me preocupo com os animais que perderam seus habitatis naturais.",
                afirmacao: "Sua preocupação com os animais pessmotivou a criar um grupo de  trabalhadores para discutir meios de utilização de ferramenta em prol do meio ambiente."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, voçê percebeu que o planea Terra esta muito prejudicado pela falta de vegetações ",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design nainternet.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos sobre do reflorestamento."
            },
            {
                texto: "Criar um trabalho sobre o reflorestamento em grupo.",
                afirmacao: "sentar em grupo econversa sobr o trabalho"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de geografia para entregar na semana seguinte, o andamento do trabalho esta bem,voçê decidiu falar sobre o desmatamento ",
        alternativas: [
            {
                texto: "Escrever texto falando formas de ajudar o meio ambiente.",
                afirmacao: "felizmente concluiu o tranalho."
            },
            {
                texto: "a internet pode ajudar voçê.",
                afirmacao: "Percebeu que todos os amigos o ajudaram a fazer o trabalho. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
