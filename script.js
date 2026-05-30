const questions = [
  {
    text: "Quando você lê notícias, o que te prende mais?",
    answers: [
      {
        text: "Geopolítica, conflitos entre países e organizações mundiais.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Inflação, desemprego das famílias, investimento em empresas, orçamento público e mercado financeiro.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Tudo um pouco, dependendo do momento.",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Em grupo, você normalmente...",
    answers: [
      {
        text: "Negocia, media conflitos ou conecta grupo de amigos que até então não se conheciam.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Organiza números, elabora roteiros, calcula os custos da pizza ou lanche que fez com os amigos/família e fica atento a prazos.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Um pouco dos dois, dependendo da necessidade.",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Sua parte favorita num projeto seria:",
    answers: [
      {
        text: "Entender culturas, atores e interesses e articular acordos.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Modelar dados, testar hipóteses, simular cenários.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Pesquisar e apresentar panoramas gerais.",
        scores: { economia: 1, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Ferramentas e áreas em que gosta de trabalhar:",
    answers: [
      {
        text: "Idiomas, redação, comunicação intercultural, análise de conjuntura.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Excel/planilhas, estatística básica, gráficos.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Pesquisa e leitura de relatórios.",
        scores: { economia: 1, ri: 1, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Impacto que você quer gerar primeiro:",
    answers: [
      {
        text: "Cooperação internacional, direitos humanos, política externa.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Políticas públicas eficazes, gestão financeira, desenvolvimento econômico.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Desenvolvimento social amplo (mix).",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Sua rotina ideal de trabalho seria:",
    answers: [
      {
        text: "Reuniões com atores diversos, eventos, relatórios estratégicos.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Análise de dados, estudos, apresentações quantitativas.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Um equilíbrio entre reuniões e análises.",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Uma empresa brasileira quer entrar na Ásia e você é o profissional que irá auxiliar esta empresa a montar sua operação. Em qual parte do processo você gostaria de estar envolvido?",
    answers: [
      {
        text: "Mapear as regulações políticas, barreiras e atores locais; analisar riscos geopolíticos e culturais.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Estimar a demanda de consumidores naquela região, os custos envolvidos e simular retorno do investimento desta unidade empresarial.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Fazer as duas coisas em paralelo de forma integrada.",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Um município quer melhorar o emprego juvenil. Qual trilha inicial você prioriza?",
    answers: [
      {
        text: "Parcerias com ONGs/empresas, programas internacionais e redes de cidades.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Análise de dados locais, cursos técnicos com base na demanda, avaliação de impacto.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Desenho de política que combine cooperação externa e avaliação econômica.",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Onde você se vê trabalhando?",
    answers: [
      {
        text: "Embaixadas, organismos internacionais, ONGs, consultorias de internacionalização, órgãos governamentais.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Bancos, consultorias econômicas, órgãos de governo (planejamento, fazenda), mercado financeiro.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Em empresas privadas (comércio exterior, compliance, ESG, inteligência de mercado).",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Habilidades que você considera fortes em você:",
    answers: [
      {
        text: "Cálculo/estatística aplicada, exatas, raciocínio lógico.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Interpretação de texto, leitura de cenário, negociação, análise multidisciplinar.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Mistura de dados quantitativos e qualitativos para análise.",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
  {
    text: "Qual tema você gostaria mais de falar sobre?",
    answers: [
      {
        text: "Estudo de caso sobre a imagem do Brasil no exterior, relações entre países, segurança nacional.",
        scores: { economia: 0, ri: 3, indefinido: 0 },
      },
      {
        text: "Estimativa do efeito do salário mínimo no emprego usando dados, projeção de demanda, balanço financeiro.",
        scores: { economia: 3, ri: 0, indefinido: 0 },
      },
      {
        text: "Plano de internacionalização de uma empresa brasileira, macroeconomia, fóruns internacionais de economia.",
        scores: { economia: 2, ri: 2, indefinido: 0 },
      },
      {
        text: "Nenhuma das opções acima.",
        scores: { economia: 0, ri: 0, indefinido: 3 },
      },
    ],
  },
];

const resultContent = {
  economia: {
    title: "Seu perfil se aproxima mais de Economia",
    description:
      "Suas respostas indicam maior afinidade com análise de dados, raciocínio lógico, planejamento financeiro, políticas públicas e compreensão de como decisões econômicas afetam pessoas, empresas e governos. Esse resultado sugere interesse por temas como mercado financeiro, desenvolvimento econômico, inflação, orçamento público, avaliação de impacto e tomada de decisão baseada em evidências. Na prática, Economia pode combinar com quem gosta de interpretar números, comparar cenários, construir argumentos com dados e pensar soluções para problemas sociais e financeiros.",
    links: [
      {
        label: "Conhecer o curso de Ciências Econômicas na UFSC",
        url: "https://guiadecursos.ufsc.br/ciencias-economicas/",
      },
    ],
  },
  ri: {
    title: "Seu perfil se aproxima mais de Relações Internacionais",
    description:
      "Suas respostas indicam maior afinidade com geopolítica, negociação, comunicação intercultural, cooperação internacional, direitos humanos e análise de cenários globais. Esse resultado sugere interesse por temas como política externa, organizações internacionais, diplomacia, conflitos entre países, comércio internacional e atuação de governos ou instituições em escala global. Na prática, Relações Internacionais pode combinar com quem gosta de compreender diferentes culturas, articular interesses, analisar acontecimentos mundiais e pensar soluções para desafios que envolvem vários atores.",
    links: [
      {
        label: "Conhecer o curso de Relações Internacionais na UFSC",
        url: "https://guiadecursos.ufsc.br/relacoes-internacionais/",
      },
    ],
  },
  misto: {
    title: "Seu perfil combina elementos de Economia e Relações Internacionais",
    description:
      "Suas respostas mostram equilíbrio entre interesses econômicos e internacionais. Isso indica que você pode se identificar tanto com análises quantitativas, políticas públicas e mercado quanto com geopolítica, negociação e cooperação entre países. Esse perfil é especialmente interessante para áreas que conectam os dois campos, como comércio exterior, desenvolvimento internacional, consultoria, políticas públicas, ESG, inteligência de mercado, organismos internacionais e análise de risco.",
    links: [
      {
        label: "Conhecer Ciências Econômicas na UFSC",
        url: "https://guiadecursos.ufsc.br/ciencias-economicas/",
      },
      {
        label: "Conhecer Relações Internacionais na UFSC",
        url: "https://guiadecursos.ufsc.br/relacoes-internacionais/",
      },
    ],
  },
  indefinido: {
    title: "Seu perfil ainda não aponta claramente para Economia ou Relações Internacionais",
    description:
      "Suas respostas indicam que seus interesses talvez não estejam fortemente conectados aos temas centrais desses dois cursos, ou que você ainda esteja em uma fase de exploração. Isso não significa que Economia ou Relações Internacionais não possam fazer sentido para você. Significa apenas que, com base neste quiz, seria interessante pesquisar outras áreas, comparar grades curriculares e refletir sobre quais atividades despertam mais curiosidade no seu dia a dia.",
    links: [
      {
        label: "Comparar Ciências Econômicas na UFSC",
        url: "https://guiadecursos.ufsc.br/ciencias-economicas/",
      },
      {
        label: "Comparar Relações Internacionais na UFSC",
        url: "https://guiadecursos.ufsc.br/relacoes-internacionais/",
      },
    ],
  },
};

const titleElement = document.querySelector("#screen-title");
const descriptionElement = document.querySelector("#screen-description");
const optionsElement = document.querySelector("#options");
const progressElement = document.querySelector("#progress");
const progressBarElement = document.querySelector("#progress-bar");
const progressLabelElement = document.querySelector("#progress-label");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");

let currentQuestionIndex = 0;
let selectedAnswers = [];

startButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", goBack);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  startButton.hidden = true;
  restartButton.hidden = true;
  progressElement.hidden = false;
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  titleElement.textContent = `Pergunta ${questionNumber} de ${questions.length}`;
  descriptionElement.textContent = currentQuestion.text;
  optionsElement.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.style.animationDelay = `${index * 45}ms`;
    button.appendChild(createOptionLetter(index));
    button.appendChild(createOptionText(answer.text));
    button.addEventListener("click", () => selectAnswer(answer.scores));
    optionsElement.appendChild(button);
  });

  backButton.hidden = currentQuestionIndex === 0;
  updateProgress();
}

function selectAnswer(scores) {
  selectedAnswers[currentQuestionIndex] = scores;
  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
    return;
  }

  showResult();
}

function goBack() {
  if (currentQuestionIndex === 0) {
    return;
  }

  currentQuestionIndex -= 1;
  selectedAnswers.pop();
  showQuestion();
}

function showResult() {
  const totals = calculateTotals();
  const percentages = calculatePercentages(totals);
  const resultKey = getResultKey(percentages);
  const finalResult = resultContent[resultKey];

  titleElement.textContent = finalResult.title;
  descriptionElement.innerHTML = "";
  descriptionElement.appendChild(createParagraph(finalResult.description));
  descriptionElement.appendChild(createPercentagesList(percentages));
  descriptionElement.appendChild(createLinksList(finalResult.links));

  optionsElement.innerHTML = "";
  backButton.hidden = true;
  restartButton.hidden = false;
  updateProgress(100);
}

function calculateTotals() {
  return selectedAnswers.reduce(
    (totals, answer) => {
      totals.economia += answer.economia;
      totals.ri += answer.ri;
      totals.indefinido += answer.indefinido;
      return totals;
    },
    { economia: 0, ri: 0, indefinido: 0 },
  );
}

function calculatePercentages(totals) {
  const totalPoints = totals.economia + totals.ri + totals.indefinido || 1;

  return {
    economia: Math.round((totals.economia / totalPoints) * 100),
    ri: Math.round((totals.ri / totalPoints) * 100),
    indefinido: Math.round((totals.indefinido / totalPoints) * 100),
  };
}

function getResultKey(percentages) {
  const difference = Math.abs(percentages.economia - percentages.ri);

  if (percentages.indefinido >= 35) {
    return "indefinido";
  }

  if (difference <= 14) {
    return "misto";
  }

  return percentages.economia > percentages.ri ? "economia" : "ri";
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function createPercentagesList(percentages) {
  const wrapper = document.createElement("div");
  wrapper.className = "result-percentages";

  const title = document.createElement("strong");
  title.textContent = "Afinidade estimada:";
  wrapper.appendChild(title);

  wrapper.appendChild(
    createResultMeter("Economia", percentages.economia, "#d94f35"),
  );
  wrapper.appendChild(
    createResultMeter("Relações Internacionais", percentages.ri, "#0f766e"),
  );
  wrapper.appendChild(
    createResultMeter("Indefinido", percentages.indefinido, "#356ac3"),
  );

  return wrapper;
}

function createLinksList(links) {
  const wrapper = document.createElement("div");
  wrapper.className = "result-links";

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.label;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    wrapper.appendChild(anchor);
  });

  return wrapper;
}

function createOptionLetter(index) {
  const letter = document.createElement("span");
  letter.className = "option-letter";
  letter.textContent = String.fromCharCode(65 + index);
  return letter;
}

function createOptionText(text) {
  const optionText = document.createElement("span");
  optionText.className = "option-text";
  optionText.textContent = text;
  return optionText;
}

function createResultMeter(label, value, color) {
  const meter = document.createElement("div");
  meter.className = "result-meter";

  const header = document.createElement("div");
  header.className = "result-meter-header";

  const labelElement = document.createElement("span");
  labelElement.textContent = label;

  const valueElement = document.createElement("span");
  valueElement.textContent = `${value}%`;

  header.appendChild(labelElement);
  header.appendChild(valueElement);

  const track = document.createElement("div");
  track.className = "result-meter-track";

  const fill = document.createElement("div");
  fill.className = "result-meter-fill";
  fill.style.setProperty("--meter-width", `${value}%`);
  fill.style.setProperty("--meter-color", color);

  track.appendChild(fill);
  meter.appendChild(header);
  meter.appendChild(track);

  return meter;
}

function restartQuiz() {
  titleElement.textContent = "Responda e veja seu resultado";
  descriptionElement.textContent =
    "Escolha as alternativas que mais combinam com você. No final, mostramos sua afinidade com cada caminho.";
  optionsElement.innerHTML = "";
  progressElement.hidden = true;
  progressBarElement.style.width = "0%";
  startButton.hidden = false;
  restartButton.hidden = true;
}

function updateProgress(forcePercent) {
  const percent =
    forcePercent ?? Math.round((currentQuestionIndex / questions.length) * 100);
  progressBarElement.style.width = `${percent}%`;

  if (progressLabelElement && currentQuestionIndex < questions.length) {
    progressLabelElement.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  }
}
