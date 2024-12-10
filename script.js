// script.js

// Definição das perguntas principais
const questions = [
    {
        id: "age",
        text: "Qual a sua idade?",
        type: "number"
    },
    {
        id: "gender",
        text: "Como você se identifica?",
        options: ["Homem", "Mulher", "Prefiro não responder"]
    },
    {
        id: "dependents",
        text: "Você possui pessoas que dependem da sua renda?",
        options: ["Sim", "Não"]
    },
    {
        id: "income",
        text: "Qual a sua renda familiar total?",
        options: [
            "Menor que R$1.000,00",
            "Entre R$1.000,00 e R$2.500,00",
            "Entre R$2.500,01 e R$5.000,00",
            "Entre R$5.000,01 e R$10.000,00",
            "Acima de R$10.000,00"
        ]
    },
    {
        id: "education",
        text: "Qual é o seu nível de escolaridade?",
        options: [
            "Ensino fundamental incompleto",
            "Ensino fundamental completo",
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo",
            "Pós-graduação ou especialização",
            "Mestrado ou doutorado"
        ]
    },
    {
        id: "professional",
        text: "O que melhor descreve seu momento profissional atual?",
        options: [
            "Estudante",
            "Aposentado",
            "Empresário",
            "Profissional autônomo",
            "Freelancer",
            "Colaborador CLT",
            "Funcionário(a) público(a)",
            "Desempregado(a)",
            "Dono(a) de casa",
            "Estagiário(a)"
        ]
    },
    {
        id: "sector",
        text: "Qual setor você atua?",
        options: [
            "Administração e Negócios",
            "Saúde e Bem-Estar",
            "Agronegócio e Produção Rural",
            "Educação",
            "Tecnologia",
            "Comunicação e Marketing",
            "Indústria e Produção",
            "Comércio e Varejo",
            "Direito e Justiça",
            "Construção e Engenharia",
            "Transporte e Logística",
            "Arte, Cultura e Entretenimento",
            "Gastronomia e Hospitalidade",
            "Serviços Gerais",
            "Ciências e Pesquisa",
            "Outro" // Adicionado
        ]
    },
    {
        id: "atomGoal",
        text: "Qual era seu objetivo ao se tornar um aluno da Atom?",
        options: [
            "Começar a investir no mercado financeiro",
            "Me tornar um day trader profissional",
            "Ganhar uma renda extra",
            "Melhorar meus resultados no day trade",
            "Entrar na mesa proprietária",
            "Outro"
        ]
    },
    {
        id: "financialConcern",
        text: "Qual é sua maior preocupação financeira no momento?",
        options: [
            "Sair das dívidas",
            "Conseguir pagar minhas contas em dia",
            "Construir minha reserva de emergência",
            "Começar a investir",
            "Planejar aposentadoria",
            "Outro"
        ]
    },
    {
        id: "studentInvestor",
        text: "Você investia antes de se tornar um aluno da Atom?",
        options: ["Sim", "Não"]
    },
    {
        id: "nonStudentInvestor",
        text: "Você investe no mercado financeiro?",
        options: ["Sim", "Não"]
    },
    {
        id: "studentReason",
        text: "Por que você decidiu se tornar nosso aluno?",
        type: "text"
    },
    {
        id: "nonStudentReason",
        text: "O que te impediu de se tornar nosso aluno?",
        type: "text"
    },
    {
        id: "questionsForCEOs",
        text: "Se você estivesse frente a frente com a Carol Paiffer e com o Kim Paiffer e tivesse 30 minutos para perguntar tudo o que você quisesse, o que você perguntaria?",
        type: "text"
    }
];

// Definição das perguntas de follow-up
const followUps = {
    dependentsCount: {
        id: "dependentsCount",
        text: "Qual a quantidade de dependentes em sua família?",
        options: ["1", "2", "3", "4", "5 ou mais"]
    },
    collegeCourse: {
        id: "collegeCourse",
        text: "Qual curso você fez na faculdade?",
        type: "text"
    },
    profession: {
        id: "profession",
        text: "Qual sua profissão atual?",
        options: [] // Será preenchido dinamicamente
    }
};

// Função para adicionar opções de profissão com base no setor
function addSectorProfessionOptions(sector) {
    console.log(`addSectorProfessionOptions called with sector: ${sector}`);
    const professions = {
        "Administração e Negócios": [
            "Administrador(a)", "Analista Financeiro(a)", "Consultor(a) de Negócios",
            "Contador(a)", "Economista", "Gestor(a) de Projetos",
            "Secretário(a) Executivo(a)", "Assistente Administrativo", "Outro"
        ],
        "Saúde e Bem-Estar": [
            "Enfermeiro(a)", "Farmacêutico(a)", "Fisioterapeuta",
            "Médico(a)", "Nutricionista", "Psicólogo(a)", 
            "Odontologista (Dentista)", "Técnico(a) de Enfermagem", "Veterinário(a)", "Outro"
        ],
        "Agronegócio e Produção Rural": [
            "Agricultor", "Pecuarista", "Engenheiro Agrônomo",
            "Técnico Agrícola", "Técnico em Agropecuária", "Silvicultor",
            "Apicultor", "Pescador e Aquicultor", "Especialista em Agricultura Orgânica", "Outro"
        ],
        "Educação": [
            "Coordenador(a) Pedagógico(a)", "Professor(a) de Educação Infantil",
            "Professor(a) de Ensino Fundamental/Médio", "Professor(a) Universitário(a)",
            "Educador(a) Social", "Instrutor(a) de Cursos", "Tutor(a) Online", "Outro"
        ],
        "Tecnologia": [
            "Analista de Sistemas", "Desenvolvedor(a) de Software", "Engenheiro(a) de Dados",
            "Cientista de Dados", "Programador(a) Web", "Designer UI/UX",
            "Especialista em Cibersegurança", "Técnico(a) de Informática", "Outro"
        ],
        "Comunicação e Marketing": [
            "Dono de agência", "Publicitário(a)", "Designer Gráfico",
            "Jornalista", "Produtor(a) de Conteúdo", "Redator(a)",
            "Social Media", "Fotógrafo(a)", "Videomaker", "Outro"
        ],
        "Indústria e Produção": [
            "Engenheiro(a)", "Projetista", "Eletricista",
            "Técnico(a) em Automação", "Operador(a) de Máquinas", "Soldador(a)",
            "Técnico(a) em Mecânica", "Outro"
        ],
        "Comércio e Varejo": [
            "Proprietário", "Atendente", "Gerente de Loja",
            "Representante Comercial", "Supervisor(a) de Vendas", "Caixa",
            "Comprador(a)", "Estoquista", "Outro"
        ],
        "Direito e Justiça": [
            "Advogado(a)", "Assistente Jurídico", "Promotor(a)",
            "Juiz(a)", "Defensor(a) Público(a)", "Oficial de Justiça", "Outro"
        ],
        "Construção e Engenharia": [
            "Arquiteto(a)", "Engenheiro(a)", "Mestre de Obras",
            "Técnico(a) em Edificações", "Pedreiro(a)", "Carpinteiro(a)",
            "Pintor(a)", "Outro"
        ],
        "Transporte e Logística": [
            "Caminhoneiro(a)", "Motoboy", "Entregador(a)",
            "Despachante", "Operador(a) de Empilhadeira", "Técnico(a) em Logística", "Outro"
        ],
        "Arte, Cultura e Entretenimento": [
            "Artista Plástico", "Ator/Atriz", "Escritor(a)",
            "Cantor(a)", "Dançarino(a)", "Músico(a)",
            "Fotógrafo(a)", "Diretor(a) de Cinema", "Outro"
        ],
        "Gastronomia e Hospitalidade": [
            "Chefe de Cozinha", "Garçom/Garçonete", "Barista",
            "Gerente de Restaurante", "Recepcionista de Hotel", "Guia de Turismo", "Outro"
        ],
        "Serviços Gerais": [
            "Babá", "Porteiro(a)", "Recepcionista",
            "Segurança", "Zelador(a)", "Auxiliar de Limpeza",
            "Cuidador(a) de Idosos", "Outro"
        ],
        "Ciências e Pesquisa": [
            "Biólogo(a)", "Cientista", "Pesquisador(a)",
            "Físico(a)", "Químico(a)", "Geólogo(a)", "Outro"
        ]
    };

    const result = professions[sector] || ["Outro"];
    console.log(`Profissões para o setor '${sector}':`, result);
    return result;
}

// Definição do nome do usuário

// Inicialização das variáveis de estado
let currentIndex = 0;
const userAnswers = {};
const pendingCustomInputs = new Set(); // Rastreamento de perguntas personalizadas

// URL do webhook para enviar as respostas
const WEBHOOK_URL = "https://n8nwebhook.iatom.site/webhook/b1e0ee1b-d59f-42ff-b786-706adac2b45b";

// Função para salvar respostas de perguntas com opções (botões)
function saveAnswer(questionId, selectedOption) {
    console.log(`Salvando resposta para ${questionId}: ${selectedOption}`);

    if (selectedOption === "Outro") {
        // Marcar como aguardando resposta personalizada
        userAnswers[questionId] = "Outro";
        pendingCustomInputs.add(questionId);

        // Re-renderiza a pergunta atual para exibir o campo de entrada personalizado
        renderQuestion();
        return;
    }

    // Salva a resposta selecionada e remove estado de personalizado, se necessário
    userAnswers[questionId] = selectedOption;
    pendingCustomInputs.delete(questionId);

    // Enviar respostas atualizadas ao webhook
    sendAnswersToWebhook();

    // Lógica de follow-up para dependentes
    if (questionId === "dependents") {
        if (selectedOption === "Sim") {
            addFollowUp("dependentsCount");
        } else {
            removeFollowUp("dependentsCount");
        }
    }

    // Lógica de follow-up para nível de escolaridade
    if (questionId === "education") {
        const requiresFollowUp = [
            "Ensino superior incompleto",
            "Ensino superior completo",
            "Pós-graduação ou especialização",
            "Mestrado ou doutorado",
        ].includes(selectedOption);

        if (requiresFollowUp) {
            addFollowUp("collegeCourse");
        } else {
            removeFollowUp("collegeCourse");
        }
    }

    // Lógica de follow-up para setor
    if (questionId === "sector") {
        const options = addSectorProfessionOptions(selectedOption);
        followUps.profession.options = options;

        // Remover todas as instâncias existentes de 'profession' para evitar duplicatas
        removeFollowUp("profession");

        // Re-adiciona 'profession' com novas opções
        addFollowUp("profession");

        // Limpa resposta anterior de 'profession', se houver
        if (userAnswers["profession"]) {
            delete userAnswers["profession"];
        }
        pendingCustomInputs.delete("profession");
    }

    currentIndex++;
    renderQuestion();
}

// Função para salvar respostas de perguntas com inputs e avançar
function handleNext() {
    const currentQuestion = activeQuestions[currentIndex];
    const customInput = document.getElementById("customInput");
    const inputField = document.getElementById("inputField");

    let answer;

    // Capturar entrada personalizada ("Outro")
    if (pendingCustomInputs.has(currentQuestion.id)) {
        if (customInput) {
            answer = customInput.value.trim();
        }
    } else if (inputField) {
        // Capturar respostas de campos de entrada padrão (ex: idade)
        answer = inputField.value.trim();
    }

    if (!answer) {
        alert("Por favor, preencha a resposta antes de continuar.");
        return;
    }

    // Salva a resposta e avança
    userAnswers[currentQuestion.id] = answer;

    // Enviar respostas atualizadas ao webhook
    sendAnswersToWebhook();

    pendingCustomInputs.delete(currentQuestion.id);

    currentIndex++;
    renderQuestion();
}

// Função para adicionar perguntas de follow-up dinamicamente
function addFollowUp(followUpId) {
    const followUp = followUps[followUpId];
    if (!followUp) {
        console.error(`Follow-up com id '${followUpId}' não encontrado.`);
        return;
    }

    if (!activeQuestions.some(q => q.id === followUp.id)) {
        console.log(`Adicionando follow-up: ${followUp.id}`);
        activeQuestions.splice(currentIndex + 1, 0, followUp);
        console.log("Lista atual de perguntas:", activeQuestions.map(q => q.id));
    } else {
        console.log(`Follow-up '${followUp.id}' já está na lista.`);
    }
}

// Função para remover perguntas de follow-up dinamicamente
function removeFollowUp(followUpId) {
    let index = activeQuestions.findIndex(q => q.id === followUpId);
    while (index !== -1) {
        console.log(`Removendo follow-up: ${followUpId}`);
        activeQuestions.splice(index, 1);
        index = activeQuestions.findIndex(q => q.id === followUpId);
    }
    console.log("Lista atual de perguntas:", activeQuestions.map(q => q.id));
}

// Função para navegar para a pergunta anterior
function handleBack() {
    if (currentIndex === 0) {
        alert("Você já está na primeira pergunta.");
        return;
    }

    currentIndex--;

    const currentQuestion = activeQuestions[currentIndex];
    const currentAnswer = userAnswers[currentQuestion.id];

    // Atualizar estado de "Outro"
    if (currentAnswer === "Outro") {
        pendingCustomInputs.add(currentQuestion.id);
    } else {
        pendingCustomInputs.delete(currentQuestion.id);
    }

    renderQuestion();
}

// Função para renderizar a pergunta atual
function renderQuestion() {
    const app = document.getElementById("app");
    if (!app) {
        console.error("Elemento com ID 'app' não encontrado!");
        return;
    }

    if (currentIndex >= activeQuestions.length) {
        submitResponses();
        return;
    }

    const question = activeQuestions[currentIndex];
    const progressPercent = Math.min(((currentIndex + 1) / activeQuestions.length) * 100, 100);

    console.log(`Renderizando pergunta ${currentIndex + 1}: ${question.id}`);

    let contentHTML = "";

    // Verifica se a pergunta é personalizada com "Outro"
    if (pendingCustomInputs.has(question.id)) {
        // Renderiza o campo de entrada personalizado
        contentHTML = `
            <input type="text" id="customInput" class="large-input" placeholder="Outro..."/>
        `;
    } else if (question.options && question.options.length > 0) {
        // Renderizar botões de opções
        contentHTML = question.options
            .map(option => `
                <button class="option" onclick="saveAnswer('${question.id}', '${option}')">${option}</button>
            `)
            .join("");
    } else if (question.type === "text" || question.type === "number") {
        // Campo de entrada padrão para texto ou número
        let placeholder = "Digite sua resposta...";
        if (question.id === "age") {
            placeholder = "20";
        }
        contentHTML = `
            <input type="${question.type}" id="inputField" class="large-input" placeholder="${placeholder}"/>
        `;
    } else {
        console.error("Tipo de pergunta não suportado:", question);
        return;
    }

    // Adiciona texto de introdução na pergunta da idade
    let introductionHTML = "";
    if (question.id === "age") {
        introductionHTML = `
        <div class="welcome">
            <h2 style="margin: 0px;">${userName},</h2>
            <p style="margin-top: 5px; margin-bottom: 30px;">gostaríamos de te conhecer um pouco melhor...</p>
        </div>
        `;
    }

    app.innerHTML = `
        ${introductionHTML}
        <div class="question">${question.text}</div>
        <div class="options-container">${contentHTML}</div>
        <div class="navigation-buttons">
            ${currentIndex > 0 ? '<button onclick="handleBack()">Voltar</button>' : ""}
            <button id="nextButton" onclick="handleNext()" disabled>Próxima <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<path d="M4.64986 0.713955L5.19173 0.172081C5.42118 -0.0573605 5.79219 -0.0573605 6.01919 0.172081L10.7642 4.9147C10.9937 5.14414 10.9937 5.51515 10.7642 5.74215L6.01919 10.4872C5.78975 10.7166 5.41874 10.7166 5.19173 10.4872L4.64986 9.94533C4.41798 9.71345 4.42286 9.33511 4.65962 9.10811L7.60088 6.30599H0.585809C0.261173 6.30599 0 6.04482 0 5.72018V4.9391C0 4.61447 0.261173 4.35329 0.585809 4.35329H7.60088L4.65962 1.55117C4.42042 1.32417 4.41554 0.945838 4.64986 0.713955Z" fill="black"/>
</svg></button>
        </div>
    `;

    // Atualiza a largura da barra de progresso
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.background = `linear-gradient(90deg, #B98300 ${progressPercent}%, rgba(0, 0, 0, 0) ${progressPercent+10}%, rgba(0, 0, 0, 0) 100%)`;


    const customInput = document.getElementById("customInput");
    const inputField = document.getElementById("inputField");
    const nextButton = document.getElementById("nextButton");

    if (customInput) {
        customInput.addEventListener("input", () => {
            nextButton.disabled = customInput.value.trim() === "";
        });
    } else if (inputField) {
        inputField.addEventListener("input", () => {
            nextButton.disabled = inputField.value.trim() === "";
        });
    }
}

// Função para enviar respostas ao webhook
function sendAnswersToWebhook() {
    fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Id": `${userId}`
        },
        body: JSON.stringify(userAnswers)
    })
        .then(response => {
            if (response.ok) {
                console.log("Respostas enviadas ao webhook com sucesso.");
            } else {
                console.error("Erro ao enviar respostas ao webhook.");
            }
        })
        .catch(error => {
            console.error("Erro de rede ao enviar respostas ao webhook:", error);
        });
}

// Função para finalizar o questionário e exibir as respostas
function submitResponses() {
    console.log("Respostas do usuário:", userAnswers);
    alert("Formulário concluído! Confira o console para ver suas respostas.");
    showCompletionMessage();
}

// URL base do webhook
const FETCH_WEBHOOK_BASE_URL = "https://n8nwebhook.iatom.site/webhook/6c57dd67-870a-44df-aad6-e861477ab260";

// Variável global para armazenar o ID do usuário
let userId;
let isStudent = false;
let userName = 'Olá'; 
let activeQuestions = [];
// Função para obter o ID da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para buscar as respostas do aluno
async function fetchUserProgress() {
    try {
        // Obtém o ID da URL e armazena na variável global
        userId = getQueryParam("id");
        userName = getQueryParam("name");
        if (!userId) {
            throw new Error("ID não encontrado na URL.");
        }

        // Monta a URL do webhook com o ID
        const FETCH_WEBHOOK_URL = `${FETCH_WEBHOOK_BASE_URL}?id=${userId}&name=${userName}`;
        console.log(`Buscando progresso do ID: ${userId} na URL: ${FETCH_WEBHOOK_URL}`);

        const response = await fetch(FETCH_WEBHOOK_URL);
        if (!response.ok) {
            throw new Error(`Erro ao buscar progresso: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dados do webhook:", data);
        userName = data.name.split(' ')[0];

        isStudent = data.student
        activeQuestions = filterQuestionsBasedOnStudentStatus(isStudent, questions);
        console.log("Perguntas ativas:", activeQuestions);
        // Verifica se o progresso está disponível no campo `result`
        if (data && data.result) {
            return data.result; // Retorna o progresso diretamente do campo `result`
        }

        return null; // Nenhum progresso encontrado
    } catch (error) {
        console.error("Erro ao buscar progresso do aluno:", error);
        return null;
    }
}

// Função para posicionar o formulário na pergunta correta
async function initializeForm() {
    const userProgress = await fetchUserProgress();

    if (userProgress) {
        // Atualiza `userAnswers` com as respostas salvas
        Object.assign(userAnswers, userProgress);

        // Determina se é estudante ou não

        // Filtra perguntas com base no status de estudante
        filterQuestionsBasedOnStudentStatus(isStudent);

        // Define o índice atual com base nas respostas salvas
        let foundUnanswered = false;
        for (let i = 0; i < activeQuestions.length; i++) {
            const questionId = activeQuestions[i].id;

            // Procura a primeira pergunta que não tem resposta no progresso
            if (!userProgress.hasOwnProperty(questionId) || userProgress[questionId] === "") {
                currentIndex = i - 1; // Posiciona na primeira pergunta não respondida
                foundUnanswered = true;
                break;
            }
        }

        if (!foundUnanswered) {
            currentIndex = activeQuestions.length; // Marca como completo
        }

        console.log("Progresso recuperado e índice ajustado:", userAnswers, "Índice atual:", currentIndex);
    } else {
        console.log("Nenhum progresso anterior encontrado.");
    }

    if (currentIndex >= activeQuestions.length) {
        // Se o formulário já estiver concluído, exibe a mensagem de conclusão
        showCompletionMessage();
    } else {
        renderQuestion(); // Caso contrário, renderiza a próxima pergunta
    }
}
// Função para filtrar perguntas com base no status do estudante
function filterQuestionsBasedOnStudentStatus(isStudent, questions) {
    if (!Array.isArray(questions)) {
        console.error("A lista de perguntas não é válida:", questions);
        return [];
    }
    console.log("Status do aluno:", isStudent);

    const filteredQuestions = questions.filter(q => {
        if (isStudent) {
            return !["nonStudentInvestor", "nonStudentReason"].includes(q.id);
        } else {
            return !["studentReason", "studentInvestor"].includes(q.id);
        }
    });

    console.log("Perguntas após filtragem:", filteredQuestions.map(q => q.id));
    return filteredQuestions;
}



// Função para exibir a mensagem de formulário já preenchido
function showCompletionMessage() {
    const app = document.getElementById("app");
    if (!app) {
        console.error("Elemento com ID 'app' não encontrado!");
        return;
    }

    app.innerHTML = `
        <div class="completion-message" style="display: flex; flex-direction: column; align-items: center; gap: 30px;">
            <div>
                <h2>${userName}</h2>
                <p>Você já preencheu este formulário, obrigado por colaborar com a equipe da ATOM!</p>
            </div>
            <img src="./iconAtom.png" alt="Logo Concluido">
            <button style="cursor: pointer;" class="close" onclick="window.top.postMessage({ action: 'closePopup' }, '*')"> Fechar </button>
        </div>
    `;
}

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    initializeForm();
});
