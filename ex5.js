const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para o usuário informar as duas notas e capturando os dados
rl.question("Informe a primeira nota: ", (nota1) => {
  rl.question("Informe a segunda nota: ", (nota2) => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    const media = (n1 + n2) / 2;

    console.log(`A média do aluno é: ${media.toFixed(2)}`);

    rl.close(); // fecha a interface após a captura do dado
  });
});
