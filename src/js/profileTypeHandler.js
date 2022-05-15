function profileTypeHandler() {
  const getSelectProfileType = document.getElementById("selectProfileType");
  const getPlayerForm = document.getElementById("playerForm");
  const getManagerForm = document.getElementById("managerForm");

  const options = {
    jogador: "player",
    gerente: "manager",
  };

  if (getSelectProfileType.value === options.jogador) {
    getPlayerForm.hidden = false;
    getManagerForm.hidden = true;
  }

  if (getSelectProfileType.value === options.gerente) {
    getPlayerForm.hidden = true;
    getManagerForm.hidden = false;
  }
}
