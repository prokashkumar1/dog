let menuIcon=documemt.querySelector("#menu-icon");
let navbar=document.querySelector("navbar");

menuIcon.onclick=>{
menuIcon.classList.toggle("bx-x");
navbar.classList.toggle("active");
}


let Sections=document.querySelectorAll("section");
let navlink=document.querySelectorAll("header nav a");


window.onscroll=()=>{
sections.forEach(sec => {
let top=window.scrolly;
let offset=sec.offsetTop-150;
let id=sec.getAttribute("id");





if(top>=offset && top<offset+heigt){
    navlinks.forEach(link=>{
        links.classList.remove("active");
        document.querySelector('header nav a[href='+id+']')
        .classList .add("active");

    })
}
    
})
let header=document.querySelector(".header");
header.classList.toggle("sticky",window.scrolly>100);
menuIcon.classList.remove("bx-x");
navbar.classList.remove(active);
}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  let darkModeIcon=document.querySelector("#darkMode-icon");
  darkModeIcon.onlick=()=>{
    darkModeIcon.classList.toggle(bx-sun);
    document.body.classListl.toggle('dark-mode');

  }
  scrollRevea1({
    distance:'80px',
    duration:2000,
    delay:200
  })

  ScrollReveal().reveal(".home-content,.heading,{origin:'top'}");
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .testimonial-wrapper .contract-from',{orgin:'bottom'})
  ScrollReveal().reveal('.home-content h1,.about-img img',{origin:'left'});
  ScrollReveal().reveal('.home-content h3,.home-content p,.about-content',{origin:'right'});
  

  )