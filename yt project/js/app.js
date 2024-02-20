$(document).ready(function(){
//HERO SLIDER
$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:ture,
    items:1,
    dots:true,
    smartspeed:1000,
    navText:["PREV","NEXT"],
    responsive:{
        0:{
         nav:false,   
        },
        768:{
          nav:true,  
        },
        1000:{
            
        }
    }
});

//PROJECT SLIDER
$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:flase,
   
    dots:false,
    smartspeed:1000,
    margin:24,
    navText:["PREV" ,"NEXT"],
    
   
    responsive:{
        0:{
          items:1 
          nav:false,
          margin:0,
        },
        768:{
            items:2,
          
        },
        1148:{
           items:2, 
           center:ture,
           dots:true,
        }
    }
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
   smartspeed:800,
    
})

});



