const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o salário do funcionário: ", (salario) => {
  const aumento = 0.15;
  const novoSalario = salario * (1 + aumento);
  console.log(`Novo salário com 15% de aumento: R$${novoSalario.toFixed(2)}`);
  rl.close();
});
