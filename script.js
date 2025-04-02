<!DOCTYPE html>
<html lang="pt-BR">
<!-- Declaração do tipo de documento HTML5 e definição da linguagem como Português Brasileiro. -->

<head>
  <meta charset="UTF-8" />
  <!-- Define o conjunto de caracteres utilizado no documento como UTF-8, permitindo o uso de caracteres especiais como acentos. -->

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Configura a visualização para garantir que o site seja responsivo em dispositivos móveis. -->

  <title>A Jornada de Chihiro</title>
  <!-- Define o título da aba do navegador, que é o nome do jogo. -->

  <link rel="stylesheet" href="style.css" />
  <!-- Faz a ligação com o arquivo CSS externo que contém os estilos visuais do jogo. -->
</head>

<body>
  <div id="background"></div>
  <!-- Div que representa o fundo do jogo, provavelmente estilizado via CSS para criar a atmosfera. -->

  <!-- MENU INICIAL -->
  <div id="menu" class="menu">
    <!-- Contêiner principal do menu inicial do jogo. -->
    <div class="menu-content">
      <!-- Div que agrupa os elementos do menu inicial, como título, descrição e botões. -->

      <h1 class="title">A Jornada de Chihiro</h1>
      <!-- Título do jogo que aparece na tela inicial. -->

      <p class="description">
        <!-- Texto que apresenta a premissa do jogo para o jogador. -->
        Você é Chihiro, uma jovem que, ao atravessar um túnel misterioso com sua família,
        acaba se separando deles e descobre um mundo repleto de espíritos e seres mágicos.
      </p>

      <ul class="mechanics">
        <!-- Lista que descreve as mecânicas básicas do jogo. -->
        <li>A história avança conforme suas escolhas.</li>
        <li>3 finais diferentes baseados nas suas decisões.</li>
        <li>Você começa com 3 vidas. ❤️</li>
      </ul>

      <!-- Botões de interação do menu inicial. -->
      <button id="start-button" onclick="startGame()">Iniciar</button>
      <!-- Botão para iniciar o jogo, que chama a função "startGame" para começar uma nova partida. -->

      <button onclick="carregarJogo()">Continuar Jogo</button>
      <!-- Botão para carregar o progresso do jogo previamente salvo. Executa a função "carregarJogo". -->

      <button onclick="resetarJogo()">Novo Jogo</button>
      <!-- Botão para reiniciar o jogo do começo, executando a função "resetarJogo". -->
    </div>
  </div>

  <!-- ÁREA DO JOGO -->
  <div class="overlay" id="game-container" style="display: none;">
    <!-- Contêiner principal do jogo, inicialmente oculto, onde a interação com o jogador acontece. -->

    <div class="hud">
      <!-- Heads-Up Display (HUD), que exibe informações importantes para o jogador, como o número de vidas. -->
      <span id="vidas">3❤️</span>
      <!-- Exibe o número de vidas restantes do jogador. Inicialmente, o jogador começa com 3 vidas. -->

      <button onclick="salvarJogo(cenaAtual, vidas)">Salvar</button>
      <!-- Botão para salvar o progresso atual do jogo, chamando a função "salvarJogo" com os parâmetros relevantes (cena e vidas). -->
    </div>

    <div id="fase-cartao" class="fase-cartao"></div>
    <!-- Elemento possivelmente utilizado para representar cartões de transição entre as fases ou para exibir elementos de história. -->

    <div class="game-box">
      <!-- Contêiner que agrupa os elementos da fase do jogo, incluindo o título da fase, personagens, diálogos e escolhas. -->
      <h2 id="fase-title"></h2>
      <!-- Título da fase ou etapa atual do jogo. -->

      <div class="character" id="character"></div>
      <!-- Div que representa visualmente o personagem da fase. O conteúdo será estilizado via CSS. -->

      <div class="dialogue" id="dialogue"></div>
      <!-- Área onde os diálogos ou narrativas são exibidos durante o jogo. -->

      <div class="choices" id="choices"></div>
      <!-- Contêiner onde as escolhas do jogador são apresentadas. O jogador seleciona uma opção para avançar na história. -->
    </div>
  </div>

  <!-- Inclusão de arquivos JavaScript que adicionam funcionalidades ao jogo. -->
  <script src="storage.js"></script>
  <!-- Arquivo responsável por manipular o armazenamento local, incluindo salvar e carregar o progresso do jogo. -->

  <script src="script.js"></script>
  <!-- Arquivo principal com a lógica do jogo, interações do jogador, manipulação de cenas e escolhas. -->
</body>
</html>
