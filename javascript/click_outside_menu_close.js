const menuHeader = document.querySelector('.menu-header')

document.addEventListener('click', e => {
    if(!menuHeader.contains(e.target) && e.target !== toggleBtn){
        console.log('click_outside')
        dropDownMenu.classList.remove('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }
})