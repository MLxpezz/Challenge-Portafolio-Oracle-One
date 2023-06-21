const $submit = document.getElementById('submit');
const $name = document.getElementById('name');
const $email = document.getElementById('email');
const $subject = document.getElementById('subject');
const $message = document.getElementById('textArea');
const $menuMobileBtn = document.querySelector('.menu__mobile-img');
const $menuMobile = document.querySelector('.menu__mobile-links');

//function
const validateForm = () => {

    const emailRegex = /^([a-zA-Z0-9_,+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const nameRegex = /^[A-Za-zÁ-ÿ\s']+$/;

    if($name.value === '') alert('Debes ingresar tu nombre');
    if($email.value === '') alert('Debes ingresar tu email');
    if($subject.value === '') alert('Debes ingresar el asunto');
    if($message.value === '') alert('Debes ingresar un mensaje');

    if(!nameRegex.test($name.value)) {
        alert('El nombre solo puede contener letras');
        $name.style.border = '1px solid red';
    }
    if(!emailRegex.test($email.value)) {
        alert('Ingrese un formato de correo valido');
        $email.style.border = '1px solid red';
    }
    if(!nameRegex.test($subject.value)) {
        alert('el asunto solo puede contener letras');
        $subject.style.border = '1px solid red';
    }
    if($message.value.length > 300) {
        alert('No pueden haber mas de 300 caracteres en el mensaje');
        $message.style.border = '1px solid red';
    }
    if($name.value.length > 50) {
        alert('No pueden haber mas de 50 caracteres en el nombre');
        $message.style.border = '1px solid red';
    }
    if($subject.value.length > 50) {
        alert('No pueden haber mas de 50 caracteres en el asunto');
        $message.style.border = '1px solid red';
    }
}

//event
document.addEventListener('click', e => {
    if(e.target === $submit) {
        e.preventDefault();
        validateForm();
        console.log('hola');
    }
})

$menuMobileBtn.addEventListener('click', e => {
    $menuMobile.classList.toggle('show');
});