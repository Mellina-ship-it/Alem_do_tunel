// Função para mostrar uma cena com suas opções de escolha
function showScene(sceneIndex) {
  const scene = scenes[sceneIndex]; // Pega a cena de acordo com o índice
  dialogueDiv.innerHTML = scene.dialogue; // Exibe o diálogo da cena

  // Limpa as opções de escolha anteriores
  choicesDiv.innerHTML = "";
  
  // Verifica se a cena tem opções de escolha
  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice.text; // Define o texto do botão de escolha
      button.onclick = () => handleChoice(choice); // Lida com a escolha
      choicesDiv.appendChild(button); // Adiciona o botão ao container de escolhas
    });
  } else {
    // Se não houver escolhas, vai para a próxima cena automaticamente
    handleTransition(scene.next);
  }
}

// Função para iniciar o jogo
function startGame() {
  initializeGame(); // Inicia o jogo, reseta as variáveis e exibe a cena inicial
  showScene(cenaAtual); // Exibe a cena inicial
}

// Função para mostrar uma mensagem de fim de jogo com base no tipo de final
function showEnding(endingType) {
  switch (endingType) {
    case "true":
      faseTitle.innerText = "Você completou a jornada!";
      dialogueDiv.innerHTML = "<b>Parabéns! Você completou sua missão com sucesso.</b>";
      break;
    case "alternative":
      faseTitle.innerText = "Você seguiu por outro caminho.";
      dialogueDiv.innerHTML = "<b>Você escolheu um caminho alternativo e teve uma experiência única.</b>";
      break;
    case "dark":
      faseTitle.innerText = "Final sombrio.";
      dialogueDiv.innerHTML = "<b>Infelizmente, sua jornada terminou em desespero. Tente novamente.</b>";
      break;
    default:
      faseTitle.innerText = "Fim de Jogo";
      dialogueDiv.innerHTML = "<b>O jogo terminou.</b>";
  }
  choicesDiv.innerHTML = "<button onclick='resetGame()'>Tentar novamente</button>"; // Opção para reiniciar
}

// Função que lida com os diferentes finais do jogo
function handleEnding(choice) {
  if (choice.type === "final") {
    showEnding(choice.result); // Mostra o final escolhido
  } else {
    handleChoice(choice); // Caso contrário, continua o jogo normalmente
  }
}
