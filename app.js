const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const links = document.querySelector(".links")
    const linksOne = document.querySelector(".links1")
    const linksTwo = document.querySelector(".links2")
    const linksTree = document.querySelector(".links3")
    const linksFour = document.querySelector(".links4")
    const linksFive = document.querySelector(".links5")
    


    burger.addEventListener("click", () => {
       nav.classList.toggle("nav-active");
    });
    
    links.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    }); 
    linksOne.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    }); 
    linksTwo.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    }); 
    linksTree.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    }); 
    linksFour.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    }); 
    linksFive.addEventListener("click", () => {
        nav.classList.remove("nav-active");
    }); 
}

navSlide(); 

const navFixe = document.querySelector('nav');


    window.addEventListener('scroll', () => {
        if(window.scrollY > 500) {
            navFixe.classList.add('nav-vue');
        }
        else{
            navFixe.classList.remove('nav-vue');
    }
}) 