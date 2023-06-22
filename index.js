const $submit = document.getElementById("submit");
const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $subject = document.getElementById("subject");
const $message = document.getElementById("textArea");
const $menuMobileBtn = document.querySelector(".menu__mobile-img");
const $menuMobile = document.querySelector(".menu__mobile-links");
const $modal = document.querySelector(".contact__modal");

//function
const validateForm = () => {
  const emailRegex =
    /^([a-zA-Z0-9_,+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const nameRegex = /^[A-Za-zÁ-ÿ\s']+$/;

  if ($name.value === "") {
    alert("Debes ingresar tu nombre");
    return false;
  }
  if ($email.value === "") {
    alert("Debes ingresar tu email");
    return false;
  }
  if ($subject.value === "") {
    alert("Debes ingresar un asunto");
    return false;
  }
  if ($message.value === "") {
    alert("Debes ingresar un mensaje");
    return false;
  }

  if (!nameRegex.test($name.value)) {
    alert("El nombre solo puede contener letras");
    $name.style.border = "1px solid red";
    return false;
  }
  if (!emailRegex.test($email.value)) {
    alert("Ingrese un formato de correo valido");
    $email.style.border = "1px solid red";
    return false;
  }
  if (!nameRegex.test($subject.value)) {
    alert("el asunto solo puede contener letras");
    $subject.style.border = "1px solid red";
    return false;
  }
  if ($message.value.length > 300) {
    alert("No pueden haber mas de 300 caracteres en el mensaje");
    $message.style.border = "1px solid red";
    return false;
  }
  if ($name.value.length > 50) {
    alert("No pueden haber mas de 50 caracteres en el nombre");
    $message.style.border = "1px solid red";
    return false;
  }
  if ($subject.value.length > 50) {
    alert("No pueden haber mas de 50 caracteres en el asunto");
    $message.style.border = "1px solid red";
    return false;
  }

  return true;
};

//event
document.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector(".contact__form");
  const submitButton = document.getElementById("submit");

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
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
