const $submit = document.getElementById("submit");
const $email = document.getElementById("email");
const $menuMobileBtn = document.querySelector(".menu__mobile-img");
const $menuMobile = document.querySelector(".menu__mobile-links");
const $modal = document.querySelector(".contact__modal");

//function
const validarEmail = (email) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
};

const validaOk = (input) => {
  const formControl = input.parentElement;
  const aviso = formControl.querySelector(".input-message-error");
  aviso.innerText = "";
  formControl.classList.remove("falla");
};

const validaFalla = (input, msg) => {
  const formControl = input.parentElement;
  const aviso = formControl.querySelector(".input-message-error");
  aviso.innerText = msg;

  formControl.classList.add("falla");
};

const validarCampos = () => {
  const inputs = document.querySelectorAll('[data-text]');
  const emailValue = $email.value;
  let camposValidos = true;

  if (!emailValue) {
    validaFalla($email, "El campo no puede estar vacio");
    camposValidos = false;
  } else if (!validarEmail(emailValue)) {
    validaFalla($email, "Formato de email invalido");
    camposValidos = false;
  } else {
    validaOk($email);
  }

  inputs.forEach(input => {
    const inputValue = input.value;
    if(!inputValue) {
      validaFalla(input, "El campo no puede estar vacio");
      camposValidos = false;
    } else{
      validaOk(input);
    }
  })

  return camposValidos;
};

//event
document.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector(".contact__form");

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validarCampos()) {
      return;
    }

    // Obtén los datos del formulario
    const formData = new FormData($form);

    // Envía los datos a la API utilizando Fetch u otra técnica
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/3f7e35919b7497e004f83989d9499588",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // El envío fue exitoso, realiza acciones adicionales si es necesario
        $modal.style.display = "flex";

        setTimeout(() => {
          $modal.style.display = "none";
        }, 2500);

        $form.reset();
      } else {
        // Ocurrió un error en el envío, maneja el error apropiadamente
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      // Ocurrió un error en la solicitud, maneja el error apropiadamente
      console.error("Error en la solicitud de envío del formulario:", error);
    }
  });
});

$menuMobileBtn.addEventListener("click", (e) => {
  $menuMobile.classList.toggle("show");
});
