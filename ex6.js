const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro: ", (numero) => {
  const num = parseInt(numero);
  const antecessor = num - 1;
  const sucessor = num + 1;

  console.log(`O antecessor de ${num} é ${antecessor}`);
  console.log(`O sucessor de ${num} é ${sucessor}`);

  rl.close(); // fecha a interface após a captura do dado
});
