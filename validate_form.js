const onSubmit = (event) => {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const inputs = [name, email, subject, message];

  inputs.forEach((input) => {
    const removeError = () => input.classList.remove("error");
    if (input.value.length == 0) {
      input.classList.add("error");
      input.addEventListener("focus", removeError);
      return;
    }
    input.removeEventListener("focus", removeError);
  });

  const isValid = inputs.every((input) => input.value.length > 0);

  if (!isValid) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Mensagem enviada com sucesso!");

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";

  form.removeEventListener("submit", onSubmit);
};

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);
