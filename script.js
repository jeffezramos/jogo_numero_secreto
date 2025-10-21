// Iníco do jogo ---------------------------
alert(
  "Bem vindo o jogo do Número Secreto! 🔢\nTente adivinhar o número entre 1 e 10."
);

//Definir as regras
alert(
  "Regras do Jogo:\n1. Você tem 3 tentativas para adivinhar o número secreto.\n2. Após cada tentativa, você receberá uma dica de quão próximo está do número secreto.\n3. Quem sabe você acerte de primeira? Boa sorte!"
);

// Preparação do Jogo -------------------------------

// O computador escolhe um número aleatório entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Definir número máximo de tentativas
const maxTentativas = 3;
let acertou = false;

//3. SOLICITAÇÃO DE CHUTES E FEEDBACK ----------

// Array de frases motivacionais
const feedbackMotivacional = [
  "Não desista! Cada tentativa te aproxima do sucesso! 💪",
  "Você é capaz! Continue tentando! 🌟",
  "A persistência é o caminho do êxito! 🚀",
];

//Loop de tentativas
for (let tentativas = 1; tentativas <= maxTentativas; tentativas++) {
  //Solicitar o chute
  let chute = parseInt(
    prompt(`Tentativa ${tentativas} de ${maxTentativas}: Digite o seu chute:`)
  );

  //Verificar se o chute está correto
  if (chute === numeroSecreto) {
    acertou = true;

    if (tentativas === 1) {
      //Mensagem de vitória mediante primeiro ao chute correto
      alert(
        "Parabéns! Você acertou o número secreto " +
          numeroSecreto +
          "!\nQuem sabe o próximo não seja a Mega da Virada! 🍀🍾🥂"
      );
    }
    //Mensagem de vitória para chutes corretos nas demais tentativas
    else {
      alert(
        `Parabéns!\n Você acertou o número secreto, o segredo é não desistir! 💪.\n Precisou de ${tentativas} tentativas.\n O número secreto era ${numeroSecreto}.`
      );
    }
    break;

    // Calcular a diferença entre o chute e o número secreto e definir o feedback motivacional
  } else {
    const diff = Math.abs(numeroSecreto - chute);
    let feedbackDistancia = "";

    if (diff <= 2) {
      // Distância muito próxima
      feedbackDistancia = "Está pelando 🔥, tente mais uma vez!";
    } else if (diff <= 4) {
      // Distância mediana
      feedbackDistancia =
        "Está morno 🥵, mas ainda não é esse... Tente novamente!";
    } else {
      // Distância sem proximidade
      feedbackDistancia = "Está frio 🥶, quase congelando... Tente novamente!";
    }

    //Escolha o motivacinal a ser exibido
    const indicefeedback = Math.floor(
      Math.random() * feedbackMotivacional.length
    );
    const fraseMotivacional = feedbackMotivacional[indicefeedback];

    //Mostrar o feedback ao usuário
    alert(`${feedbackDistancia}\n${fraseMotivacional}`);
  }
}
//Mensagem de derrota após 3 tentativas
if (!acertou) {
  alert(
    "Que pena! Não foi dessa vez.\n O número secreto era " +
      numeroSecreto +
      ".\nNão desanime, recarregue a página e tente novamente!"
  );
}
