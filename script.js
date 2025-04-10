const questionsKahoot = [

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
        question: "O que é um container no Docker?",
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

    // Conceitos avançados
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
        question: "Qual é a função principal de um Sistema de Informação em uma organização?",
        options: [
            "Criar redes sociais para os funcionários ",
            "Automatizar tarefas sem necessidade de análise",
            "Coletar, processar, armazenar e distribuir informações",
            "Apenas armazenar arquivos digitais"
        ],
        answer: 2,
        timer: 20
    },
    {
        question: "A diferença entre Virtualização completa e ParaVirtualização é:",
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
        question: "O processador é responsavel por fazer o processamento dos dados",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 0,
        timer: 20
    },
    {
       question: "Todos os sistemas operacionais são iguais e oferecem as mesmas funções",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 1,
        timer: 20 
    },
    {
        question: "Quais são os estados de um processo em um sistema operacional?",
        options: [
            "Ativo. inativo, suspenso, finalizado",
            "criado, executando, espera, terminado",
            "pronto, executando, bloqueado",
            "inicial, pronto, suspenso, termino(voluntario)"
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
        question: "Qual dessas opções não é uma função de um sistema operacional?",
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
            "Executando, Bloqueado e Pronto",
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
        question: "Threads são linhas de execução de um processo.",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: 0,  
        timer: 20
    },
    {
        question: 'Interrupção - evento inesperado vindo dentro de um processador',
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
]
const questionsTeoricas = [ /* Cole aqui suas perguntas teóricas */ 
    
        // Seção 1: Sistemas de Informação
        {
            question: "O que são sistemas?",
            options: [
                "Conjunto de elementos interdependentes integrados por fluxo de informações, matéria e energia.",
                "Programas de computador interligados.",
                "Dispositivos de hardware conectados em rede.",
                "Processos de reengenharia organizacional."
            ],
            answer: 0,
            timer: 20
        },
        {
            question: "Qual a diferença entre Dados e Informação?",
            options: [
                "Dados são fatos brutos; Informação são dados processados e organizados.",
                "Dados são sempre numéricos; Informação é textual.",
                "Informação é armazenada em bancos de dados; Dados são temporários.",
                "Não há diferença, são sinônimos."
            ],
            answer: 0,
            timer: 20
        },
        // Seção 2: Sistemas Operacionais
        {
            question: "Qual estrutura de SO usa um núcleo mínimo?",
            options: [
                "Monolítica",
                "Microkernel",
                "Máquina Virtual",
                "Batch"
            ],
            answer: 1,
            timer: 20
        },
        {
            question: "O que caracteriza um SO Multitarefa em Batch?",
            options: [
                "Processa tarefas em sequência sem intervenção do usuário.",
                "Permite interação em tempo real com o usuário.",
                "Executa apenas um programa por vez.",
                "Usa exclusivamente memória virtual."
            ],
            answer: 0,
            timer: 20
        },
        // Seção 3: Chamadas de Sistema e Interrupções
        {
            question: "O que são Interrupções de Software (Traps)?",
            options: [
                "Solicitações de serviços do kernel por aplicações.",
                "Falhas físicas no hardware.",
                "Erros de programação em aplicativos.",
                "Sinais elétricos externos."
            ],
            answer: 0,
            timer: 20
        },
        // Seção 4: Processos
        {
            question: "Qual estado de processo indica 'aguardando um evento externo'?",
            options: [
                "Executando",
                "Bloqueado",
                "Pronto",
                "Finalizado"
            ],
            answer: 1,
            timer: 20
        },
        {
            question: "O que faz um Escalonador Preemptivo?",
            options: [
                "Permite que processos percam a CPU forçosamente.",
                "Executa processos apenas em sequência.",
                "Não permite interrupções.",
                "Gerencia apenas memória virtual."
            ],
            answer: 0,
            timer: 20
        },
        // Seção 5: Threads
        {
            question: "O que threads compartilham em um processo?",
            options: [
                "Espaço de endereço e recursos do processo.",
                "Registradores da CPU individualmente.",
                "Código de execução independente.",
                "Nenhum recurso é compartilhado."
            ],
            answer: 0,
            timer: 20
        },
        // Seção 6: Gerenciamento de Memória
        {
            question: "Qual a função da MMU?",
            options: [
                "Converter endereços virtuais em físicos.",
                "Gerenciar processos em execução.",
                "Criar partições fixas na memória.",
                "Controlar dispositivos de E/S."
            ],
            answer: 0,
            timer: 20
        },
        {
            question: "O que é Swapping?",
            options: [
                "Troca de processos entre memória RAM e disco.",
                "Técnica de paginação de memória virtual.",
                "Alocação estática de partições.",
                "Comunicação entre threads."
            ],
            answer: 0,
            timer: 20
        },
        // Seção 7: Memória Virtual
        {
            question: "O que é um Page Fault?",
            options: [
                "Erro crítico no sistema operacional.",
                "Referência a uma página não carregada na RAM.",
                "Falha na conexão de rede.",
                "Interrupção de hardware."
            ],
            answer: 1,
            timer: 20
        },
        // Seção 8: E/S
        {
            question: "Qual vantagem da conexão serial?",
            options: [
                "Maior velocidade que a paralela.",
                "Custo reduzido e simplicidade.",
                "Uso exclusivo em dispositivos modernos.",
                "Não requer controle de fluxo."
            ],
            answer: 1,
            timer: 20
        },
        // Conceitos Avançados
        {
            question: "O que é Reengenharia de Processos?",
            options: [
                "Revisão radical de processos para melhorar resultados.",
                "Atualização de hardware em sistemas legados.",
                "Troca de sistemas operacionais.",
                "Backup automático de dados."
            ],
            answer: 0,
            timer: 20
        },
        {
            question: "Qual estrutura de SO usa 'máquinas virtuais independentes'?",
            options: [
                "Monolítica",
                "Microkernel",
                "Camadas",
                "Máquina Virtual"
            ],
            answer: 3,
            timer: 20
        },
        {
            question: "O que define uma Estrutura Organizacional?",
            options: [
                "Subunidades organizacionais e suas relações com a empresa como um todo.",
                "Um tipo de sistema operacional.",
                "Um modelo de gerenciamento de memória.",
                "Um protocolo de rede."
            ],
            answer: 0,
            timer: 20
        },
        // Sistemas Operacionais
        {
            question: "Por que uma máquina multinível é usada?",
            options: [
                "Para aumentar a velocidade do processador.",
                "Para reduzir a complexidade do sistema computacional.",
                "Para substituir a memória RAM.",
                "Para evitar o uso de chamadas de sistema."
            ],
            answer: 1,
            timer: 20
        },
        // Processos
        {
            question: "Qual a diferença entre Programa e Processo?",
            options: [
                "Programa é um algoritmo codificado; Processo é a execução do programa com estado e dados.",
                "Programa é uma instância de um processo.",
                "Processo é um tipo de dado alfanumérico.",
                "Não há diferença significativa."
            ],
            answer: 0,
            timer: 20
        },
        // Threads
        {
            question: "Qual a principal diferença entre Processos e Threads?",
            options: [
                "Threads compartilham recursos do processo; Processos são independentes.",
                "Processos são mais leves que threads.",
                "Threads não podem ser escalonados.",
                "Processos não usam memória virtual."
            ],
            answer: 0,
            timer: 20
        },
        // Gerenciamento de Memória
        {
            question: "O que caracteriza partições FIXAS na memória?",
            options: [
                "Tamanho e número variáveis para otimização.",
                "Tamanho e número pré-definidos, com desperdício de memória.",
                "Uso exclusivo para sistemas monolíticos.",
                "Alocação dinâmica de recursos."
            ],
            answer: 1,
            timer: 20
        },
        // Memória Virtual
        {
            question: "Qual a diferença entre Paginação e Segmentação?",
            options: [
                "Paginação usa blocos variáveis; Segmentação usa blocos fixos.",
                "Paginação usa blocos fixos; Segmentação usa blocos variáveis.",
                "Ambas usam blocos fixos.",
                "Segmentação não usa tabelas de mapeamento."
            ],
            answer: 1,
            timer: 20
        },
        // E/S
        {
            question: "Qual característica define dispositivos HÍBRIDOS?",
            options: [
                "Funcionam apenas como entrada.",
                "Funcionam como entrada e saída (ex: tela sensível ao toque).",
                "São exclusivamente usados em redes.",
                "Não requerem drivers."
            ],
            answer: 1,
            timer: 20
        },
        // Escalonamento
        {
            question: "Qual a diferença entre Escalonador Preemptivo e Não Preemptivo?",
            options: [
                "Preemptivo permite interrupção forçada; Não Preemptivo não permite.",
                "Não Preemptivo é mais comum em sistemas batch.",
                "Preemptivo é usado apenas em sistemas monolíticos.",
                "Não há diferença prática."
            ],
            answer: 0,
            timer: 20
        },
        // Chamadas de Sistema
        {
            question: "Qual o propósito de uma Chamada de Sistema?",
            options: [
                "Aumentar a velocidade do processador.",
                "Permitir que aplicações executem instruções privilegiadas via modo kernel.",
                "Substituir interrupções de hardware.",
                "Gerenciar threads."
            ],
            answer: 1,
            timer: 20
        },
        // Reengenharia
        {
            question: "Qual o objetivo da Reengenharia de Processos?",
            options: [
                "Atualizar hardware obsoleto.",
                "Revisar radicalmente processos para melhorar resultados organizacionais.",
                "Substituir sistemas operacionais.",
                "Otimizar conexões de rede."
            ],
            answer: 1,
            timer: 20
        }
    
    ];

// Variáveis globais
let selectedQuiz = [];
let currentQuestion = 0;
let score = 0;
let timeLeft;
let timerId;
let history = []; 

// Elementos DOM
const elements = {
    startScreen: document.querySelector('.start-screen'),
    quizScreen: document.querySelector('.quiz-screen'),
    resultsScreen: document.querySelector('.results-screen'),
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    nextBtn: document.getElementById('next-btn'),
    time: document.getElementById('time'),
    progress: document.getElementById('progress'),
    finalScore: document.getElementById('final-score'),
    totalQuestions: document.getElementById('total-questions'),
    correctAnswers: document.getElementById('correct-answers'),
    wrongAnswers: document.getElementById('wrong-answers'),
    history: document.getElementById('history')
};

// Dados do usuário
let userProfile = {
    name: "",
    icon: ""
};

// Conjuntos de perguntas (exemplos)



// Função para carregar ícones na tela de perfil
function loadIcons() {
    const iconGrid = document.getElementById('icon-grid');
    const icons = ["😊", "😎", "👩💻", "👑", "🚀"];
    iconGrid.innerHTML = '';
    
    icons.forEach(icon => {
        const iconElement = document.createElement('div');
        iconElement.className = 'icon-option';
        iconElement.textContent = icon;
        iconElement.setAttribute('data-icon', icon);
        
        iconElement.addEventListener('click', () => {
            document.querySelectorAll('.icon-option').forEach(i => i.classList.remove('selected'));
            iconElement.classList.add('selected');
            userProfile.icon = icon;
        });
        
        iconGrid.appendChild(iconElement);
    });
}

// Evento: Salvar perfil
document.getElementById('save-profile').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username || !userProfile.icon) {
        alert("Por favor, insira seu nome e escolha um ícone!");
        return;
    }
    userProfile.name = username;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    document.querySelector('.profile-screen').classList.add('hidden');
    document.querySelector('.quiz-select-screen').classList.remove('hidden');
});

// Eventos de seleção de simulado
document.getElementById('kahoot-btn').addEventListener('click', () => {
    selectedQuiz = questionsKahoot;
    startQuiz();
});

document.getElementById('teoricas-btn').addEventListener('click', () => {
    selectedQuiz = questionsTeoricas;
    startQuiz();
});

// Função principal do quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    history = [];
    document.querySelector('.quiz-select-screen').classList.add('hidden');
    elements.quizScreen.classList.remove('hidden');
    displayProfile();
    loadQuestion();
    startTimer();
}

// Carrega uma pergunta
function loadQuestion() {
    const q = selectedQuiz[currentQuestion];
    elements.question.textContent = q.question;
    
    elements.options.innerHTML = q.options.map((option, index) => `
        <button class="option-btn" data-index="${index}">
            ${String.fromCharCode(65 + index)}. ${option}
        </button>
    `).join('');

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedIndex = parseInt(e.target.getAttribute('data-index'));
            selectAnswer(selectedIndex);
        });
    });

    elements.progress.style.width = `${(currentQuestion / selectedQuiz.length) * 100}%`;
    timeLeft = q.timer;
    updateTimerDisplay();
}

// Processa resposta selecionada
function selectAnswer(selectedIndex) {
    const q = selectedQuiz[currentQuestion];
    const correctIndex = q.answer;
    const isCorrect = selectedIndex === correctIndex;

    history.push({
        question: q.question,
        userAnswer: selectedIndex !== -1 ? q.options[selectedIndex] : "Tempo esgotado",
        correctAnswer: q.options[correctIndex],
        isCorrect: isCorrect
    });

    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
    document.querySelector(`.option-btn[data-index="${correctIndex}"]`).classList.add('correct');
    if (selectedIndex !== -1 && !isCorrect) {
        document.querySelector(`.option-btn[data-index="${selectedIndex}"]`).classList.add('incorrect');
    }

    if (isCorrect) score++;
    elements.nextBtn.disabled = false;
    clearInterval(timerId);
}

// Avança para próxima pergunta
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < selectedQuiz.length) {
        resetQuestionState();
        loadQuestion();
        startTimer();
    } else {
        showResults();
    }
}

// Controle do timer
function startTimer() {
    clearInterval(timerId);
    elements.nextBtn.disabled = true;
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerId);
            selectAnswer(-1);
        }
    }, 1000);
}

// Atualiza display do timer
function updateTimerDisplay() {
    elements.time.textContent = timeLeft;
    elements.time.style.color = timeLeft <= 5 ? 'red' : 'inherit';
}

// Mostra resultados finais
function showResults() {
    elements.quizScreen.classList.add('hidden');
    elements.resultsScreen.classList.remove('hidden');
    
    elements.finalScore.textContent = score;
    elements.totalQuestions.textContent = selectedQuiz.length;
    elements.correctAnswers.textContent = score;
    elements.wrongAnswers.textContent = selectedQuiz.length - score;

    elements.history.innerHTML = history.map((item, index) => `
        <div class="history-item ${item.isCorrect ? 'correct' : 'incorrect'}">
            <p><strong>Pergunta ${index + 1}:</strong> ${item.question}</p>
            <p><strong>Sua resposta:</strong> ${item.userAnswer}</p>
            <p><strong>Resposta correta:</strong> ${item.correctAnswer}</p>
        </div>
    `).join('');
}

// Funções auxiliares
function resetQuestionState() {
    elements.nextBtn.disabled = true;
    elements.options.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
    });
}

function displayProfile() {
    const profileDisplay = document.querySelector('.user-profile-display');
    if (profileDisplay) {
        profileDisplay.querySelector('.user-icon').textContent = userProfile.icon;
        profileDisplay.querySelector('.username').textContent = userProfile.name;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadIcons();
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
        document.querySelector('.profile-screen').classList.add('hidden');
        document.querySelector('.quiz-select-screen').classList.remove('hidden');
    }
});

// Evento de reiniciar
document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    history = [];
    elements.resultsScreen.classList.add('hidden');
    document.querySelector('.quiz-select-screen').classList.remove('hidden');
});

// Evento de pular pergunta
document.getElementById('skip-btn').addEventListener('click', () => {
    history.push({
        question: selectedQuiz[currentQuestion].question,
        userAnswer: "Pulada",
        correctAnswer: selectedQuiz[currentQuestion].options[selectedQuiz[currentQuestion].answer],
        isCorrect: false
    });
    nextQuestion();
});

// Evento de sair do quiz
document.getElementById('exit-btn').addEventListener('click', () => {
    const confirmExit = confirm("Deseja realmente sair do simulado? Seu progresso será perdido.");
    if (confirmExit) {
        currentQuestion = 0;
        score = 0;
        history = [];
        elements.quizScreen.classList.add('hidden');
        document.querySelector('.quiz-select-screen').classList.remove('hidden');
    }
});

// Evento de próxima pergunta
document.getElementById('next-btn').addEventListener('click', nextQuestion);