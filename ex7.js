const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quanto dinheiro você tem na carteira (em R$)? ", (dinheiro) => {
  const valordol = 5.6;
  const dolares = dinheiro / valordol;

  console.log(`Com R$${dinheiro}, você pode comprar US$${dolares.toFixed(2)}.`);

  rl.close(); // fecha a interface após a captura do dado
});
