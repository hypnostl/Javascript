let Operation;
let Money = prompt("Dinheiro inicial disponivel: ");
parseFloat(Money);

do {
  Opitions = prompt(
    "Esse é seu saldo R$" +
      Money +
      "\n" +
      "\nQual operação vai realizar agora?" +
      "\n1 - Adição" +
      "\n2 - Subtração" +
      "\n3 - Sair"
  );
  switch (Opitions) {
    case "1":
      Operation = prompt("Quanto deseja adicionar?");
      Money = parseFloat(Money) + parseFloat(Operation);
      break;
    case "2":
      Operation = prompt("Quanto deseja subtrair?");
      Money = parseFloat(Money) - parseFloat(Operation);
      break;
    case "3":
      break;
    default:
      alert("Valor invalido!");
  }
} while (Opitions != "3");

alert("Fim obrigado");
