const sidebar = document.querySelector('.sidebar');
const sidebarButton = document.querySelector('.sidebar-button');
const closeButton = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('#body');

sidebarButton.addEventListener('click', e => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        body.classList.remove('scroll-control');
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        body.classList.add('scroll-control');
    }
})

closeButton.addEventListener('click', e => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        body.classList.remove('scroll-control');
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        body.classList.add('scroll-control');
    }
})