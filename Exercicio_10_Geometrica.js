let calculation;
let CalculationArea = {};
let Resultado;

function CalculationTriangle(Base, Altura) {
  let Triangle = Base * Altura;
  return Triangle;
}
function CalculationSquare(Lado) {
  let Square = Lado ** 2;
  return Square;
}
function CalculationTrapeze(Base, BaseMaior, Altura) {
  let Trapeze =
    (parseInt(parseFloat(Base) + parseFloat(BaseMaior)) * Altura) / 2;
  return Trapeze;
}
function CalculationCircle(Raio) {
  let Circle = (3.14 * Raio) ** 2;
  return Circle;
}

CalculationArea.Base = prompt("Digite o valor da base ");
CalculationArea.Altura = prompt("Digite o valor da altura ");
CalculationArea.Lado = prompt("Digite o valor da lado ");
CalculationArea.BaseMaior = prompt("Digite o valor da base maior ");
CalculationArea.Raio = prompt("Digite o valor da raio ");

do {
  calculation = prompt(
    "Base " +
      CalculationArea.Base +
      " // Altura " +
      CalculationArea.Altura +
      " // Lado " +
      CalculationArea.Lado +
      " // Base maior " +
      CalculationArea.BaseMaior +
      " // Raio " +
      CalculationArea.Raio +
      "\n" +
      "\nEscolha uma opção" +
      "\n1 - Área do triângulo" +
      "\n2 - Área do retângulo" +
      "\n3 - Área do quadrado" +
      "\n4 - Área do trapézio" +
      "\n5 - Área do cículo" +
      "\n6 - Sair"
  );

  switch (calculation) {
    case "1": //Triangulo
      Resultado =
        CalculationTriangle(CalculationArea.Base, CalculationArea.Altura) / 2;
      alert("A area do triangulo é " + Resultado);
      break;
    case "2": // Retangulo
      Resultado = CalculationTriangle(
        CalculationArea.Base,
        CalculationArea.Altura
      );
      alert("A area do retangulo é " + Resultado);
      break;
    case "3": // Quadrado
      Resultado = CalculationSquare(CalculationArea.Lado);
      alert("A area do quadrado é " + Resultado);
      break;
    case "4": //Trapezio
      Resultado = CalculationTrapeze(
        CalculationArea.Base,
        CalculationArea.BaseMaior,
        CalculationArea.Altura
      );
      alert("A area do trapézio é " + Resultado);
      break;
    case "5": //Circulo
      Resultado = CalculationCircle(CalculationArea.Raio);
      alert("A area do círculo é " + Resultado);
      break;
    case "6":
      alert("Saindo ...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (calculation != "6");
