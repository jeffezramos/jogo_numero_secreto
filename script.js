// --- 1. PREPARAÇÃO DO JOGO ---

// Selecionar os elementos do HTML com os quais vamos interagir
const chuteInput = document.querySelector("#chuteInput");
const chutarBtn = document.querySelector("#chutarBtn");
const feedback = document.querySelector("#feedback");
const resetBtn = document.querySelector("#resetBtn");

// Array de frases (o mesmo que você criou)
const feedbackMotivacional = [
  "Não desista! Cada tentativa te aproxima do sucesso! 💪",
  "Você é capaz! Continue tentando! 🌟",
  "A persistência é o caminho do êxito! 🚀",
];

// Variáveis de estado do jogo
const maxTentativas = 3;
let numeroSecreto;
let tentativasFeitas;
let acertou;

// Função para iniciar/reiniciar o jogo
function iniciarJogo() {
  // O computador escolhe um número aleatório entre 1 e 10
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  // Define o estado inicial do jogo
  tentativasFeitas = 0;
  acertou = false;

  // Limpa o feedback anterior e o input
  feedback.textContent = "Você tem 3 tentativas. Boa sorte!";
  chuteInput.value = "";

  // Garante que o input e o botão de chutar estejam ativos
  chuteInput.disabled = false;
  chutarBtn.disabled = false;

  // Esconde o botão de reiniciar
  resetBtn.classList.add("hidden");
}

// --- 2. LÓGICA DE VERIFICAÇÃO (QUANDO O BOTÃO É CLICADO) ---

// Adicionamos um "ouvinte" ao botão. A função 'verificarChute' será chamada CADA VEZ que o botão for clicado.
chutarBtn.addEventListener("click", verificarChute);

function verificarChute() {
  // Obter o valor do input e converter para número inteiro
  let chute = parseInt(chuteInput.value);

  // Validação simples: verificar se é um número válido
  if (isNaN(chute) || chute < 1 || chute > 10) {
    feedback.textContent = "Por favor, digite um número válido entre 1 e 10.";
    return; // Para a função aqui
  }

  // Incrementar o número de tentativas
  tentativasFeitas++;

  // Verificar se o chute está correto
  if (chute === numeroSecreto) {
    acertou = true;
    if (tentativasFeitas === 1) {
      // Mensagem de vitória na primeira tentativa
      feedback.textContent = `Parabéns! Você acertou o número secreto ${numeroSecreto}! Quem sabe o próximo não seja a Mega da Virada! 🍀🍾🥂`;
    } else {
      // Mensagem de vitória nas demais tentativas
      feedback.textContent = `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativasFeitas} tentativas! O segredo é não desistir! 💪`;
    }
    // Fim de jogo
    encerrarJogo();
  } else {
    // O chute estava errado, vamos dar feedback
    darFeedbackDistancia(chute);

    // Verificar se as tentativas acabaram
    if (tentativasFeitas >= maxTentativas) {
      feedback.textContent = `Que pena! Não foi dessa vez. O número secreto era ${numeroSecreto}. Tente novamente!`;
      // Fim de jogo
      encerrarJogo();
    }
  }

  // Limpar o input para o próximo chute
  chuteInput.value = "";
  // Focar no input novamente para facilitar
  chuteInput.focus();
}

// Função para dar o feedback de distância (quente/frio)
function darFeedbackDistancia(chute) {
  const diff = Math.abs(numeroSecreto - chute);
  let feedbackDistancia = "";

  if (diff <= 2) {
    feedbackDistancia = "Está pelando 🔥, tente mais uma vez!";
  } else if (diff <= 4) {
    feedbackDistancia = "Está morno 🥵, mas ainda não é esse... Tente novamente!";
  } else {
    feedbackDistancia = "Está frio 🥶, quase congelando... Tente novamente!";
  }

  // Escolher o motivacional (exatamente como no seu código)
  const indicefeedback = Math.floor(Math.random() * feedbackMotivacional.length);
  const fraseMotivacional = feedbackMotivacional[indicefeedback];

  // Mostrar o feedback (e quantas tentativas restam)
  const tentativasRestantes = maxTentativas - tentativasFeitas;
  feedback.textContent = `${feedbackDistancia} ${fraseMotivacional} (Tentativas restantes: ${tentativasRestantes})`;
}

// --- 3. FUNÇÕES DE CONTROLO DO JOGO ---

// O que acontece quando o jogo acaba (vitória ou derrota)
function encerrarJogo() {
  // Desativar o input e o botão de chutar
  chuteInput.disabled = true;
  chutarBtn.disabled = true;
  // Mostrar o botão de reiniciar
  resetBtn.classList.remove("hidden");
}

// Adicionar um ouvinte para o botão de reiniciar
resetBtn.addEventListener("click", iniciarJogo);

// --- 4. INÍCIO ---
// Chamar a função pela primeira vez para preparar o jogo quando a página carrega
iniciarJogo();