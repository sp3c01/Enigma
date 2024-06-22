function verificarResposta(button, respostaCorreta) {
    const input = button.previousElementSibling;
    const feedback = button.nextElementSibling;

    if (input.value.toLowerCase() === respostaCorreta.toLowerCase()) {
        feedback.textContent = "Correto!";
        feedback.style.color = "#008000";
    } else {
        feedback.textContent = "Tente novamente!";
        feedback.style.color = "#ff0000";
    }
}