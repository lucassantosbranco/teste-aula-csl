const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a largura da parede (em metros): ", (largura) => {
  rl.question("Digite a altura da parede (em metros): ", (altura) => {
    const area = largura * altura;
    const tintaNecessaria = area / 2;
    console.log(`Área : ${area} m²`);
    console.log(`Quantidade: ${tintaNecessaria} litros`);
    rl.close();
  });
});
