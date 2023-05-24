let TuristName = prompt("Digite seu nome: ");
let Confirmation = confirm("Já visitou alguma cidade: ");
let CityNames = "";
let ContCity = 0;

while (Confirmation == true) {
  let CityName = prompt("Qual cidade? ");
  CityNames += " - " + CityName + "\n";
  ContCity++;
  Confirmation = confirm("Já visitou outras cidades? ");
  console.log(CityName);
}
alert(
  "O turista " +
    TuristName +
    " visitou:" +
    "\n" +
    ContCity +
    " cidades diferentes" +
    "\n São elas: " +
    "\n" +
    CityNames
);
