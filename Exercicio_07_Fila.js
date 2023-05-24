let PatientList = [];
let Opition = "";

do {
  let Paciente = "";
  for (let i = 0; i < PatientList.length; i++) {
    Paciente += i + 1 + "º - " + PatientList[i] + "\n";
  }
  Opition = prompt(
    "Pacientes:\n" +
      Paciente +
      "\nEscolha uma opção" +
      "\n1 - Novo paciente" +
      "\n2 - Consultar paciente" +
      "\n3 - Sair"
  );

  switch (Opition) {
    case "1":
      let NovoPaciente = prompt("Digite o novo nome do paciente: ");
      PatientList.push(NovoPaciente);
      break;
    case "2":
      let PacienteAtendido = PatientList.shift();
      PatientList.length > 0
        ? alert(PacienteAtendido + " foi para o atendimento!")
        : alert("Não há passientes para ser atendido");

      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Comando invaliddo");
  }
  console.log(PatientList);
} while (Opition !== "3");
