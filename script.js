const questions = [

    {
        question: "O que é um Sistema de Informação?",
        options: [
          "Um programa de edição de imagens",
          "Um conjunto de dados desconectados",
          "Um sistema que coleta, processa, armazena e distribui informações",
          "Um tipo de hardware de rede"
        ],
        answer: 2,
        timer: 20
    },
    {
        question: "Qual estrutura de sistema operacional usa um núcleo mínimo?",
        options: [
          "Monolítica",
          "Máquina Virtual",
          "Microkernel",
          "Batch"
        ],
        answer: 2,
        timer: 20
    },
    {
        question: "O que é um processo no sistema operacional?",
        options: [
          "Um aplicativo não iniciado",
          "A execução de um programa",
          "Um espaço vazio na memória",
          "Um arquivo do kernel"
        ],
        answer: 1,
        timer: 20
    },
    {
        question: "Qual tipo de SO permite execução simultânea de programas?",
        options: [
          "Monoprogramado",
          "Multitarefa",
          "Batch",
          "Interativo"
        ],
        answer: 1,
        timer: 20
    },
    {
        question:"Qual principal befício de usar Docker?",
        options: [
            "Aumentar o consumo de memória do sistema",
            "Executar múltiplas versões de um app em máquinas diferentes",
            "Empacotar aplicações com todas as suas dependências",
            "Substituir completamente o sistema operacional"
        ],
        answer: 2,
        timer: 20
    },
    
    // Pergunta 15
    {
        pergunta: "O que é um container no Docker?",
        options: [
            "Um tipo de máquina virtual pesada",
            "Um ambiente leve e isolado para executar aplicações",
            "Um programa usado para programar servidores",
            "Uma ferramenta para atualizar o sistema operacional"
        ],
        answer: 1,
        timer: 20
    },
    
    // Pergunta 16
    {
        question: "Qual comando do Docker é usado para baixar uma imagem do repositório?",
        options: [
            "docker pull",
            "docker start",
            "docker push",
            "docker save"
        ],
        answer: 0,
        timer: 20
    },
    {
        question: "ENIAC - foi o primeiro computador eletrônico, utilizava válvulas eletronicos.",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 0,
        timer: 25
    },
    {
        question: "Qual era a principal função dos papéis perfurados no contexto de sistemas",
        options: [
            "Armazenar grandes volumes de dados em formato digital",
            "Processar informações em tempo real em sistemas interativos",
            "Servir como meio de entrada e saída para computadores, codificando dados,",
            "Controlar o fluxo de energia elétrica no sistema de computação"
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
    }, 
    {
        question: "Qual é a função principal de um Sistema de Informação em uma organizaç?",
        options: [
            "Criar redes sociais para os funcionários ",
            "Automatizar tarefas sem necessidade de análise",
            "Coletar, processar, armazenar e distribuir informações",
            "Apenas armazenar arquivos digitais"
        ],
        answer: 0,
        timer: 20
    },
    {
        question: "A diferença entre virtualização completa e paravirtualização é:",
        options: [
            "Acesso direto ao hardware",
            "Uso de drivers especiais",
            "Compatibilidade com SOs",
            "Isolamento de rede"
        ],
        answer: 1,
        timer: 25
    },
    {
        question: "O que é multitarefa em um sistema operacional??",
        options: [
            "Realizar tarefas de forma lenta",
            "Realizar uma única tarefa de cada vez",
            "Não realizar tarefas",
            "Realizar várias tarefas simultaneamente "
        ],
        answer: 3,
        timer: 15
    },
    {
        question: "O que é um Dockerfile?",
        options: [
            "Arquivo de configuração do Docker",
            "Script para criar imagens Docker",
            "Registro de containers em execução",
            "Interface gráfica do Docker"
        ],
        answer: 1,
        timer: 20
    },
    {
        question: "Qual é a principal função de um sistema operacional?",
        options: [
            "Gerenciar hardware e software",
            "Criar aplicativos",
            "Proteger dados pessoais",
            "Conectar à internet"
        ],
        answer: 0,
        timer: 15
    },
    {
        question: "O procesaado é respponsavel por fazer o processamento dos dados",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 0,
        timer: 20
    },
    {
       question: " Todos os sistemas operacionais são iguais e oferecem as mesmas funções",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 1,
        timer: 20 
    },
    {
        question: "Quais sãp os estados de um processo em um sistema operacional?",
        options: [
            "Ativo. inativo, suspenso, finalizado",
            "CRIADO, EXECUTANDO, ESPERA, TERMINADO",
            "PRONTO, EXECUTANDO, BLOQUEADOO",
            "INCIAL, PRONTO, SUSPENSO, TERMINO(VOLUNTARIO)"
        ],
        answer: 2,
        timer: 20
    },
    {
        question: "O Kernel é um sistema operacional completo que fornece todos os serviços necessários",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 1,
        timer: 20
    },
    {
        question: "Qual é a principal função do Kernel em um sistema operacional?",
        options: [
            "Armazenar arquivos de usuário",
            "Personalizar a aparência da interface gráfica:",
            "Executar apenas aplicativos de terceiros",
            "Gerenciar hardware e software, fazendo a comunicação entre eles"
        ],
        answer: 3,
        timer: 20
    },
    {
        question: "Qual das funções abaixo é uma função básica de um sistema operacional?",
        options: [
            "Conectar computador à internet",
            "Criar aplicativos para o usuário",
            "Controlar os dispositivos de hardware do computador",
            "Armazenar dados na nuvem"
        ],
        answer: 2,
        timer: 20
    },
    {
        question: "O que é um escalanador de processos em um sistema operacional?",
        options: [
            "É um processo que é sempre executado em segundo plano.",
            "É uma ferramenta que permite ao usuário revisar todos os processos em execução",
            "É um recurso que permite ao usuário interromper e reiniciar processos.s",
            "É uma parte do S.O que decide qual processo deve ser executado a seguir."
        ],
        answer: 3,
        timer: 20
    },
    {
        question: "Uma máquina multinível é vista como tendo vários níveis, cada um capaz de executar um conjunto de instruções específicas.",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 0,
        timer: 20
    },
    {
        question: "Qual dessas opções não é uma funcao de um sistema operacional?",
        options: [
            "Gerenciar memória",
            "Compilar códigos de programação",
            "Controlar dispositivos de entrada e saída",
            "Administrar processos"
        ],
        answer: 1,
        timer:40
    },
    {
        question: "Quais são um os estadoos de um processol?",
        options: [
            "Executando, Pronto e Usando a CPU",
            "Novo, Terminando e Usando a CPU",
            "Executando, Bloqueado e Prontoo",
            "N.D.A (Nenhuma das Alternativas)"
        ],
        answer: 2,
        timer: 35
    }, 
    {
        question: "Trap é o mecanismo que ocorre quando uma chamadaa de sistema é acionada por um programa em execução.",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 0,
        timer: 20
    },
    {
        question: "Qual desses dipositivos é utilizado para entrada e saída de dados em um computador?",
        options: [
            "Teclado",
            "Monitor",
            "Impressora",
            "Caixa de som"
        ],
        answer: 0,
        timer: 15
    },
    {
        question: "Threads são linhas de execuçao de um processo.",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 0,  
        timer: 20
    },
    {
        question: 'Inrterrupção - eveento inesperado vindo dentro de um processador',
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 0,
        timer: 20
    },
    {
        question: "Qual principal vantagem do uso de threads em um programa",
        options: [
            "Melhorar o desempenho em tarefas de entrada e saída (I/O)",
            "Amentar a complexidade do código-fonte ",
            "Facilitar a criação de gráficos e interfaces de usuário",
            "Permitir que um programa execute múltiplas tarefas simultaneamente"
        ],
        answer: 3,
        timer: 20
    },
    {
        question: "Que tipo de operações a ULA é capaz de realizar?",
        options:[
            "Armazenamento de dados permanentes",
            "Controle de dispositivos externos ",
            "Operações lógicas e aritméticas",
            "Gerenciamento de memória"

        ],
        answer: 2,
        timer: 20
    }
];


let currentQuestion = 0;
let score = 0;
let timeLeft;
let timerId;
const quizDuration = 1000;
let history = []; // Array para armazenar o histórico

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
    wrongAnswers: document.getElementById('wrong-answers'),
    history: document.getElementById('history')
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
        <button class="option-btn" data-index="${index}">
            ${String.fromCharCode(65 + index)}. ${option}
        </button>
    `).join('');

    // Adiciona event listeners aos botões de opção
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedIndex = parseInt(e.target.getAttribute('data-index'));
            selectAnswer(selectedIndex);
        });
    });

    // Atualiza a barra de progresso
    elements.progress.style.width = `${Math.round((currentQuestion / questions.length) * 100)}%`;
    timeLeft = q.timer;
    updateTimerDisplay();
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].answer;
    const isCorrect = selectedIndex === correctIndex;

    // Adiciona ao histórico
    history.push({
        question: questions[currentQuestion].question,
        userAnswer: questions[currentQuestion].options[selectedIndex],
        correctAnswer: questions[currentQuestion].options[correctIndex],
        isCorrect: isCorrect
    });

    // Destaca a resposta correta e a selecionada (se errada)
    document.querySelector(`.option-btn[data-index="${correctIndex}"]`).classList.add('correct');
    if (selectedIndex !== -1 && selectedIndex !== correctIndex) {
        document.querySelector(`.option-btn[data-index="${selectedIndex}"]`).classList.add('incorrect');
    }

    // Desabilita os botões após a seleção
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    // Atualiza a pontuação
    if (selectedIndex === correctIndex) score++;

    // Habilita o botão "Próxima"
    elements.nextBtn.disabled = false;

    // Para o timer
    clearInterval(timerId);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
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

        if (timeLeft <= 0) {
            clearInterval(timerId);
            selectAnswer(-1); // Seleciona automaticamente uma resposta incorreta
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

    // Exibe o histórico
    const historyHTML = history.map((item, index) => `
        <div class="history-item ${item.isCorrect ? 'correct' : 'incorrect'}">
            <p><strong>Pergunta ${index + 1}:</strong> ${item.question}</p>
            <p>Sua resposta: ${item.userAnswer}</p>
            <p>Resposta correta: ${item.correctAnswer}</p>
        </div>
    `).join('');
    elements.history.innerHTML = historyHTML;
}
function skipQuestion() {
    // Adiciona ao histórico como "Pulada"
    history.push({
        question: questions[currentQuestion].question,
        userAnswer: "Pulada",
        correctAnswer: questions[currentQuestion].options[questions[currentQuestion].answer],
        isCorrect: false
    });

    // Avança para a próxima pergunta
    nextQuestion();
}

// Adiciona o event listener ao botão "Pular"
document.getElementById('skip-btn').addEventListener('click', skipQuestion);

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    history = [];
    elements.resultsScreen.classList.add('hidden');
    elements.startScreen.classList.remove('hidden');
});
