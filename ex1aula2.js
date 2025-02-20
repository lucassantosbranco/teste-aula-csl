const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual é a velocidade do seu carro? ", (velocidade) => {
  const velocidadeNum = parseFloat(velocidade);

  if (velocidadeNum > 80) {
    const excesso = velocidadeNum - 80;
    const multa = excesso * 5;
    console.log(
      `Você foi multado! A multa é R$${multa.toFixed(
        2
      )} por excesso de ${excesso} km/h.`
    );
  } else {
    console.log("Você está dentro do limite de velocidade.");
  }

  rl.close(); // fecha a interface após a captura do dado
});
