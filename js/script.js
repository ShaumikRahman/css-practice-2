const sidebar = document.querySelector('.sidebar');
const sidebarButton = document.querySelector('.sidebar-button');
const closeButton = document.querySelector('.close-button');

sidebarButton.addEventListener('click', e => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    }
})

closeButton.addEventListener('click', e => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    }
})