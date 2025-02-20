const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva seu nome: ", (nome) => {
  rl.question(
    "Qual seu sexo? (M para masculino ou F para feminino): ",
    (sexo) => {
      rl.question("Qual o valor das suas compras? R$ ", (valor) => {
        valor = parseFloat(valor);

        let desconto = 0;

        if (sexo === "M" || sexo === "m") {
          desconto = 5;
        } else if (sexo === "F" || sexo === "f") {
          desconto = 13;
        }

        const valorComDesconto = valor - valor * (desconto / 100);

        console.log(`Olá, ${nome}!`);
        console.log(`Você recebeu ${desconto}% de desconto.`);
        console.log(
          `O valor final a pagar é R$ ${valorComDesconto.toFixed(2)}.`
        );

        rl.close();
      });
    }
  );
});
