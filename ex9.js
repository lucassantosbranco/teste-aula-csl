const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite o número de dias trabalhados no mês: ",
  (diasTrabalhados) => {
    const horasPorDia = 8;
    const valorPorHora = 25;
    const salario = diasTrabalhados * horasPorDia * valorPorHora;
    console.log(`Salário do funcionário: R$${salario}`);
    rl.close();
  }
);
