const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o ano para verificar se é bissexto: ", (ano) => {
  const anoNum = parseInt(ano);

  if (anoNum % 4 === 0) {
    console.log(`${anoNum} é um ano bissexto!`);
  } else {
    console.log(`${anoNum} não é um ano bissexto.`);
  }

  rl.close(); // fecha a interface após a captura do dado
});
