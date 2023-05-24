const MeterValuer = prompt("Digite um valor em metros: ");
const UnitOfMeasurement = prompt(
  "Digite uma unidade de medida conforme a baixo:" +
    "\nMM (Mílimetros)" +
    "\nCM (Centímetros)" +
    "\nDM (Decímetros)" +
    "\nDAM (Decâmetro)" +
    "\nHM (Hectômetro)" +
    "\nKM (Quilômetro)"
);

console.log(MeterValuer);
console.log(UnitOfMeasurement);

switch (UnitOfMeasurement) {
  case "MM":
    alert("O valor em Mílimetros é " + MeterValuer * 1000 + "mm");
    break;
  case "CM":
    alert("O valor em Centímetros é " + MeterValuer * 100 + "cm");
    break;
  case "DM":
    alert("O valor em Decímetros é " + MeterValuer * 10) + "dm";
    break;
  case "DAM":
    alert("O valor em Decâmetros é " + MeterValuer / 10 + "dam");
    break;
  case "HM":
    alert("O valor em Hectômetros é " + MeterValuer / 100 + "hm");
    break;
  case "KM":
    alert("O valor em Quilômetros é " + MeterValuer / 1000 + "km");
    break;
  default:
    alert("Valor invalido!");
}
