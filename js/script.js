"use strict";
(function() {
    const buttons = document.querySelectorAll(`.tabs__tab`);
    const formReg = document.querySelector('.form-reg');
    const formAuth = document.querySelector('.form-auth');
    function switchTab(btn){
        for(let button of buttons){
            if(!btn.classList.contains('tabs__tab--active')){
                button.classList.remove('tabs__tab--active')
            }
        }
        btn.classList.add('tabs__tab--active')
        if(btn.dataset.btn === 'reg'){
            formAuth.classList.add('visually-hidden');
            formReg.classList.remove('visually-hidden');
        } else {
            formAuth.classList.remove('visually-hidden');
            formReg.classList.add('visually-hidden');
        }
    }
    for(let button of buttons){
        button.addEventListener("click",()=>{
            switchTab(button)
        })
    }
})();
$(document).ready(function() {
    $("#tel").mask("+7 (999) 99-99-999");
    $("#snils").mask('999-999-999 99');
    $("#birthdate").mask('99.99.9999');
});

