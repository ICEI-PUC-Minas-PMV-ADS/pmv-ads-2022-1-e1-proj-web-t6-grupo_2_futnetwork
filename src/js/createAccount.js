function createAccount() {
  const form = document.forms.accountForm;
  const response = {};

  form.addEventListener("submit", (event) => {
    response.accountInfos = {
      profileType: form.elements["selectProfileType"].value,
      fullName: form.elements["inputFullName"].value,
      email: form.elements["inputEmail"].value,
      phone: form.elements["inputPhone"].value,
      password: form.elements["inputPassword"].value,
    };

    if (response.accountInfos.profileType === "player") {
      response.profileInfo = {
        positions: {
          pivo: form.elements["pivo"].checked,
          alaEsquerda: form.elements["ala-esquerda"].checked,
          alaDireita: form.elements["ala-direita"].checked,
          fixo: form.elements["fixo"].checked,
          goleiro: form.elements["goleiro"].checked,
        },
        weekDays: {
          segunda: form.elements["segunda"].checked,
          terca: form.elements["terca"].checked,
          quarta: form.elements["quarta"].checked,
          quinta: form.elements["quinta"].checked,
          sexta: form.elements["sexta"].checked,
          sabado: form.elements["sabado"].checked,
          domingo: form.elements["domingo"].checked,
        },
        hours: form.elements["inputHours"].value,
      };
    }

    localStorage.setItem(
      `user-${response.accountInfos.email}`,
      JSON.stringify(response)
    );

    form.submit();
  });
}
