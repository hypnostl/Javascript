let FistVehicleName = prompt("Digite o nome do primeiro carro: ");
let FistVehicleVelocit = prompt(
  "Qual o velocidade do primeiro veiculo em Km? "
);
let SecondVehicleName = prompt("Digite o nome do segundo veiculo: ");
let SecondVehicleVelocit = prompt(
  "Qual o velocidade do segundo veiculo em Km? "
);
console.log(FistVehicleName);
console.log(FistVehicleVelocit);
console.log(SecondVehicleName);
console.log(SecondVehicleVelocit);

if (FistVehicleVelocit > SecondVehicleVelocit) {
  alert(
    "O carro " +
      FistVehicleName +
      " é mais rapido com a velocidade de " +
      FistVehicleVelocit +
      "Km"
  );
} else if (FistVehicleVelocit == SecondVehicleVelocit) {
  alert(
    "Os carros " +
      FistVehicleName +
      " e " +
      SecondVehicleName +
      " tem a mesma velocidade!"
  );
} else
  alert(
    "O carro " +
      SecondVehicleName +
      " é mais com a velocidade de " +
      SecondVehicleVelocit +
      "Km"
  );
