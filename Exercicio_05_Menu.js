let Option = 0;

do {
  Option = prompt(
    "Selecione uma opção:" +
      "\n1 - Primeira" +
      "\n2 - Segunda" +
      "\n3 - Terceira" +
      "\n4 - Quarta" +
      "\n5 - Encerrar"
  );
  console.log(Option);

  switch (Option) {
    case "1":
      alert("A opção escolhida foi Primeira");
      break;
    case "2":
      alert("A opção escolhida foi Seguanda");
      break;
    case "3":
      alert("A opção escolhida foi Terceira");
      break;
    case "4":
      alert("A opção escolhida foi Quarta");
    case "5":
      break;
    default:
      alert("Opção invalida!");
  }
} while (Option != 5);

alert("Obrigado por contribuir!!!");
