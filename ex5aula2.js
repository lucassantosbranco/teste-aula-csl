const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Qual a distância que você deseja percorrer em Km? ",
  (distancia) => {
    distancia = parseFloat(distancia);

    let preco;
    if (distancia <= 200) {
      preco = distancia * 0.5;
    } else {
      preco = distancia * 0.45;
    }

    console.log(`O preço da passagem é R$${preco.toFixed(2)}`);

    rl.close(); // fecha a interface após a captura do dado
  }
);
