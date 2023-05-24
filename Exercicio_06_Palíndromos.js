let World = prompt("Digite uma plava: ");
let WorldSize = World.length;
let P = "";
let OK = 0;
for (let i = 0; i < World.length; i++) {
  WorldSize--;

  if (World[WorldSize] == World[i]) {
    OK++;
  }
  P = World[i] + P;
  console.log(P);
}
OK == World.length
  ? alert("A palavra é palíndromo!\n" + World + "\n" + P)
  : alert("A palavra não é palíndromo!\n" + World + "\n" + P);
