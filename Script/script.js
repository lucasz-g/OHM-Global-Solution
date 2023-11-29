const nomeInput = document.querySelector('#input-nome');
const emailInput = document.querySelector('#input-email');
const button = document.querySelector('#submit-button');

button.addEventListener("click", validarEmail);

function validarEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailInput.value)) {
      alert("Digite um e-mail válido e tente novamente"); 
    } else {

    }
    nomeInput.value = '';
    emailInput.value = ''; 
}
