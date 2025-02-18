const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe o primeiro número
rl.question("Informe o primeiro número: ", (num1) => {
  rl.question("Informe o segundo número: ", (num2) => {
    const soma = parseInt(num1) + parseInt(num2);

    console.log(`A soma entre os números é: ${soma}`);

    rl.close(); // fecha a interface após a captura dos dados
  });
});
