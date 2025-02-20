const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o ano de nascimento do rapaz: ", (anoNascimento) => {
  rl.question("Digite o ano atual: ", (anoAtual) => {
    const idade = parseInt(anoAtual) - parseInt(anoNascimento);

    if (idade < 18) {
      const anosFaltando = 18 - idade;
      console.log(
        `Você ainda não pode se alistar. Faltam ${anosFaltando} ano(s) para o alistamento.`
      );
    } else if (idade === 18) {
      console.log("Você deve se alistar este ano!");
    } else {
      const anosPassados = idade - 18;
      console.log(`Você já deveria ter se alistado há ${anosPassados} ano(s).`);
    }

    rl.close(); // fecha a interface após a captura do dado
  });
});
