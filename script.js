const check = document.getElementById('check');
const menu = document.querySelector('.menu');

check.addEventListener('change', function () {
    menu.classList.toggle('active', check.checked)
});
document.addEventListener("DOMContentLoaded", function() {
    const formaciones = document.querySelectorAll('.formacion');

    formaciones.forEach(formacion => {
        formacion.addEventListener('mouseover', function() {
            const barra = formacion.querySelector('.barra');
            barra.style.width = '100%';
        });

        formacion.addEventListener('mouseout', function() {
            const barra = formacion.querySelector('.barra');
            barra.style.width = '10';
        });
    });
});