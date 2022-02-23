function closeBtnClick() {
    const closeBtn = $$('.close-btn');
    const modalLoginSignup = $('.modal__body');
    const modal = $('.modal');

    closeBtn.forEach((btn) => {
        btn.onclick = () => {
            if($('.modal__cart.active')) {
                $('.modal__cart.active').classList.remove('active');
            } else if($('.modal__notification-box').style.display == 'flex') {
                $('.modal__notification-box').style.display = 'none';
            } else modalLoginSignup.style.display = 'none';
            modal.style.display = 'none';
        }
    });
}

closeBtnClick();