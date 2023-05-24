let PrimeiroNumero = prompt("Digite o primeiro número");
let SegundoNumero = prompt("Digite o segundo número");
console.log("Primeiro número " + PrimeiroNumero);
console.log("Segundo Número " + SegundoNumero);

let soma = parseFloat(PrimeiroNumero) + parseFloat(SegundoNumero);
let subtracao = PrimeiroNumero - SegundoNumero;
let multiplicacao = PrimeiroNumero * SegundoNumero;
let divisao = PrimeiroNumero / SegundoNumero;

alert(
  "Soma é: " +
    soma +
    "\nSubtração é: " +
    subtracao +
    "\nMutiplicação: " +
    multiplicacao +
    "\nDivisão; " +
    divisao
);
