let menuOpenButton = document.querySelector("#menu-open-button")
let menuCloseButton = document.querySelector("#menu-close-button")
menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
})
menuCloseButton.addEventListener('click',()=>menuOpenButton.click()
);
