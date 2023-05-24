let Properties = {};
let PropretisRegistration = [];
let Menu = "";

do {
  Menu = prompt(
    "Temos " +
      PropretisRegistration.length +
      " imóveis cadastrados" +
      "\n" +
      "\nEscolha uma opção:" +
      "\n1 - Cadastrar imóvel!" +
      "\n2 - Mostra imóveis cadastrados" +
      "\n3 - Sair"
  );

  switch (Menu) {
    case "1":
      Properties.nome = prompt("Nome do proprietário ");
      Properties.room = prompt("Quantidades de quartos ");
      Properties.WC = prompt("Quantidades de banheiros ");
      Properties.Garage = prompt("Possum garagem ");

      const Confirmation = confirm(
        "Deseja salvar esse imovel: " +
          Properties.nome +
          Properties.room +
          Properties.WC +
          Properties.Garage
      );
      if (Confirmation) {
        console.log(Properties);
        PropretisRegistration.push(Properties);
      }
      break;
    case "2":
      for (let i = 0; i < PropretisRegistration.length; i++) {
        alert(
          "Imovel " +
            (i + 1) +
            "\nProprietário " +
            PropretisRegistration[i].nome +
            "\nQuantidade de quartos " +
            PropretisRegistration[i].room +
            "\nQuantidade de banheiros " +
            PropretisRegistration[i].WC +
            "\nPossui garagem " +
            PropretisRegistration[i].Garage
        );
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (Menu != "3");
