import ModalDispatcher from "./modalDispatcher";

function modalMenuLinks() {
    const links = document.querySelectorAll('[data-menu-link=""]');

    links.forEach(link => {
        link.addEventListener('click', _ => {
            ModalDispatcher.closeAll();
        })
    })
}

export default modalMenuLinks;