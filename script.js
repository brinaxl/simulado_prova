const questions = [
    // Virtualização
    {
        question: "Qual é o principal benefício da virtualização de servidores?",
        options: [
            "Redução de custos com hardware",
            "Aumento do consumo energético",
            "Dependência de fornecedor único",
            "Complexidade de gerenciamento"
        ],
        answer: 0,
        timer: 25
    },
    {
        question: "Um hypervisor Tipo 2 é caracterizado por:",
        options: [
            "Executar diretamente no hardware",
            "Rodar sobre um sistema operacional host",
            "Não permitir múltiplas VMs",
            "Ser usado apenas em mainframes"
        ],
        answer: 1,
        timer: 20
    },

    // Docker
    {
        question: "Qual comando lista containers em execução no Docker?",
        options: [
            "docker ps",
            "docker list",
            "docker containers",
            "docker show"
        ],
        answer: 0,
        timer: 15
    },
    {
        question: "A principal vantagem do Docker sobre VMs tradicionais é:",
        options: [
            "Maior isolamento de hardware",
            "Menor consumo de recursos",
            "Necessidade de hypervisor",
            "Compatibilidade com qualquer SO"
        ],
        answer: 1,
        timer: 20
    },

    // Sistemas Operacionais
    {
        question: "Na gerência de memória, a paginação serve para:",
        options: [
            "Dividir a memória em partes variáveis",
            "Permitir acesso direto ao disco rígido",
            "Criar espaços de endereçamento contíguos",
            "Mapear memória virtual em blocos fixos"
        ],
        answer: 3,
        timer: 25
    },
    {
        question: "O mecanismo TRAP está relacionado a:",
        options: [
            "Chamadas de sistema",
            "Gerenciamento de interrupções de hardware",
            "Controle de processos zombie",
            "Sincronização de threads"
        ],
        answer: 0,
        timer: 20
    },

    // Arquitetura de Computadores
    {
        question: "Na arquitetura de von Neumann, a unidade de controle é parte:",
        options: [
            "Da memória principal",
            "Do sistema de E/S",
            "Da UCP (CPU)",
            "Do barramento de dados"
        ],
        answer: 2,
        timer: 25
    },
    {
        question: "A BIOS é responsável por:",
        options: [
            "Gerenciar processos do sistema",
            "Inicialização do hardware (POST)",
            "Controlar dispositivos USB",
            "Executar aplicações em rede"
        ],
        answer: 1,
        timer: 15
    },

    // Gerenciamento de Memória
    {
        question: "Fragmentação externa ocorre quando:",
        options: [
            "Há espaço não utilizado dentro das partições",
            "Existem áreas livres entre partições alocadas",
            "A memória virtual está cheia",
            "O sistema usa paginação por demanda"
        ],
        answer: 1,
        timer: 30
    },
    {
        question: "A memória virtual permite:",
        options: [
            "Acesso mais rápido ao disco",
            "Executar programas maiores que a memória física",
            "Compartilhamento direto de registradores",
            "Redução do consumo energético"
        ],
        answer: 1,
        timer: 25
    },

    // Segurança
    {
        question: "A virtualização completa oferece:",
        options: [
            "Compartilhamento de kernel com o host",
            "Isolamento completo entre VMs",
            "Acesso direto aos dispositivos USB",
            "Compatibilidade reduzida com SOs"
        ],
        answer: 1,
        timer: 20
    },
    {
        question: "No Docker, o Docker Hub funciona como:",
        options: [
            "Um serviço de monitoramento",
            "Repositório de imagens públicas",
            "Ferramenta de orquestração",
            "Sistema de virtualização"
        ],
        answer: 1,
        timer: 15
    },

    // Comandos Docker
    {
        question: "Para criar um novo container a partir de uma imagem, usa-se:",
        options: [
            "docker build",
            "docker create",
            "docker run",
            "docker start"
        ],
        answer: 2,
        timer: 15
    },
    {
        question: "O comando para remover um container parado é:",
        options: [
            "docker delete",
            "docker rm",
            "docker kill",
            "docker clean"
        ],
        answer: 1,
        timer: 10
    },

    // Conceitos Avançados
    {
        question: "O que é Namespace no contexto de containers?",
        options: [
            "Técnica de isolamento de recursos",
            "Sistema de arquivos virtual",
            "Protocolo de rede",
            "Formato de imagem"
        ],
        answer: 0,
        timer: 25
    },
    {
        question: "Cgroups no Linux são utilizados para:",
        options: [
            "Limitar recursos do sistema",
            "Gerenciar namespaces",
            "Virtualizar dispositivos",
            "Monitorar temperatura"
        ],
        answer: 0,
        timer: 20
    }
];


let currentQuestion = 0;
let score = 0;
let timeLeft;
let timerId;
const quizDuration = 300;

const elements = {
    startScreen: document.querySelector('.start-screen'),
    quizScreen: document.querySelector('.quiz-screen'),
    resultsScreen: document.querySelector('.results-screen'),
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    time: document.getElementById('time'),
    progress: document.getElementById('progress'),
    nextBtn: document.getElementById('next-btn'),
    finalScore: document.getElementById('final-score'),
    totalQuestions: document.getElementById('total-questions'),
    correctAnswers: document.getElementById('correct-answers'),
    wrongAnswers: document.getElementById('wrong-answers')
};

function startQuiz() {
    elements.startScreen.classList.add('hidden');
    elements.quizScreen.classList.remove('hidden');
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    elements.question.textContent = q.question;
    elements.options.innerHTML = q.options.map((option, index) => `
        <button class="option-btn" onclick="selectAnswer(${index})">
            ${String.fromCharCode(65 + index)}. ${option}
        </button>
    `).join('');

    elements.progress.style.width = `${(currentQuestion / questions.length) * 100}%`;
    timeLeft = q.timer;
    updateTimerDisplay();
}

function selectAnswer(selectedIndex) {
    const options = document.querySelectorAll('.option-btn');
    const correctIndex = questions[currentQuestion].answer;

    options.forEach((btn, index) => {
        btn.disabled = true;
        if(index === correctIndex) {
            btn.classList.add('correct');
        } else if(index === selectedIndex) {
            btn.classList.add('incorrect');
        }
    });

    if(selectedIndex === correctIndex) score++;
    elements.nextBtn.disabled = false;
    clearInterval(timerId);
}

function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        resetQuestionState();
        loadQuestion();
        startTimer();
    } else {
        showResults();
    }
}

function startTimer() {
    clearInterval(timerId);
    elements.nextBtn.disabled = true;
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if(timeLeft <= 0) {
            clearInterval(timerId);
            selectAnswer(-1);
        }
    }, 1000);
}

function updateTimerDisplay() {
    elements.time.textContent = timeLeft;
    elements.time.style.color = timeLeft <= 5 ? 'red' : 'inherit';
}

function resetQuestionState() {
    elements.nextBtn.disabled = true;
    elements.options.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
    });
}

function showResults() {
    elements.quizScreen.classList.add('hidden');
    elements.resultsScreen.classList.remove('hidden');
    elements.finalScore.textContent = score;
    elements.totalQuestions.textContent = questions.length;
    elements.correctAnswers.textContent = score;
    elements.wrongAnswers.textContent = questions.length - score;
}

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    elements.resultsScreen.classList.add('hidden');
    elements.startScreen.classList.remove('hidden');
});

document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        if(!btn.disabled) {
            btn.style.transform = 'translateY(-2px)';
        }
    });
    
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0)';
    });
});