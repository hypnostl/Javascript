let Cheap = [];
let Card;

let Option = "";

do {
  let Cards = "";
  for (let i = 0; i < Cheap.length; i++) {
    Cards += Cheap[i] + "\n";
    console.log(Cards);
  }
  Opition = prompt(
    "Catas que estão no baralho: " +
      Cheap.length +
      "\n" +
      Cards +
      "\n Faça uma escolha:" +
      "\n1 - Adicinar uma carta" +
      "\n2 - Puxar uma carta" +
      "\n3 - Sair"
  );

  switch (Opition) {
    case "1":
      Card = prompt("Qual carta você deseja incluir? ");
      Cheap.unshift(Card);
      break;
    case "2":
      if (Cheap.length <= 0) {
        alert("Baralho vazio!");
        break;
      } else {
        Cheap.shift(Card);
        alert("A carta puxada do seu baralho é: " + Card);
        break;
      }
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Digite uma opção valida");
      break;
  }
  console.log(Cheap);
  console.log(Opition);
} while (Opition != "3");
