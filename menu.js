
document.addEventListener('DOMContentLoaded', function () {
    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('abrir-menu');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });

    // Adiciona um listener para cada link no menu
    document.querySelectorAll('.menu-mobile nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            // Impede o comportamento padrão do link
            event.preventDefault();

            // Fecha o menu
            menu.classList.remove('abrir-menu');

            // Navega para a página associada ao link
            const targetPage = link.getAttribute('href');
            window.location.href = targetPage;
        });
    });
});
