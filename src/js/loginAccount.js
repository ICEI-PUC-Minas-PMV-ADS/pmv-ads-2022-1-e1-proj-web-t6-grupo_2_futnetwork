function loginAccount() {
  const form = document.forms.loginForm;

  form.addEventListener("submit", (event) => {
    const user = JSON.parse(
      localStorage.getItem(`user-${form.elements["inputEmail"].value}`)
    );

    if (!user) {
      window.alert("E-mail ou senha incorretos.");

      event.preventDefault();
    }

    if (user.accountInfos.password === form.elements["inputPassword"].value) {
      form.submit();
    } else {
      window.alert("E-mail ou senha incorretos.");

      event.preventDefault();
    }
  });
}
