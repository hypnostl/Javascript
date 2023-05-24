let FirstCharacter = prompt("Nome do primeiro personagem: ");
let Attack = prompt("Valor do ataque: ");
let SecondCharacter = prompt("Nome do segundo personagem: ");
let PV = prompt("Pontos de vida: ");
let Defense = prompt("Defesa: ");
let Shild = confirm("Possui escudo?");

console.log(FirstCharacter);
console.log(Attack);
console.log(SecondCharacter);
console.log(PV);
console.log(Defense);
console.log(Shild);
let Damage;

if (Attack <= Defense) {
  Damage = 0;
}
if (Attack > Defense && Shild == true) {
  Damage = (Attack - Defense) / 2;
}
if (Attack > Defense && Shild == false) {
  Damage = Attack - Defense;
}

console.log(Damage);
let Result = PV - Damage;

Shild = Shild == true ? "Sim" : "Não";
alert(
  FirstCharacter +
    "\nAtaque: " +
    Attack +
    "\nDano: " +
    Damage +
    "\n" +
    SecondCharacter +
    "\nPontos de vida: " +
    PV +
    "\nDesfesa: " +
    Defense +
    "\nPossui escusdo: " +
    Shild +
    "\nPontos de vida restante: " +
    Result
);
