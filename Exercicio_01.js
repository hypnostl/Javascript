let primeiro_nome = window.prompt("Digite seu primeiro nome:");
let sorbre_nome = window.prompt("Digite o seu segundo nome:");
let campo_estudo = window.prompt("Digite seu campo de estudo:");
let data_nascimento = window.prompt("Digite seu ano de nascimento");

alert(
  "Recruta cadastrado com sucesso!\n" +
    primeiro_nome +
    " " +
    sorbre_nome +
    "\nCampo de Estudo: " +
    campo_estudo +
    "\nAno de nascimento; " +
    data_nascimento +
    "\nIdade " +
    (2023 - data_nascimento)
);
