$(document).ready(function () {

    /* page scroll ' scrollt */
    $.scrollIt({
        topOffset: -50
    });

    /* navbar collpase */
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide")
    });

    /* Carousel foto-texto */
    $('.slider-foto-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                /*nav:true */
            },
            600:{
                items:2,
                /*nav:false */
            },
            1000:{
                items:1,
                /*nav:true,
                loop:false */
            }
        }
    });

    /* carousel card-img-texto */
    $('.slider-card-img-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                /*nav:true */
            },
            600:{
                items:2,
                /*nav:false */
            },
            1000:{
                items:3,
                /*nav:true,
                loop:false */
            }
        }
    });

    /* carousel imagem */
    $('.imgs-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                /*nav:true */
            },
            600:{
                items:2,
                /*nav:false */
            },
            1000:{
                items:4,
                /*nav:true,
                loop:false */
            }
        }
    });
    /* Carousel texto*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                /*nav:true */
            },
            600:{
                items:2,
                /*nav:false */
            },
            1000:{
                items:3,
                /*nav:true,
                loop:false */
            }
        }
    });

    /* navbar */
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink")
        }else {
            $(".navbar").removeClass("navbar-shrink")
        }
    });


    /* video popup modal */  
    const videos = $("#video-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#video-1").attr("src","");
        }else {
            $(".video-popup").addClass("open");
            if($("#video-1").attr("src")==''){
                $("#video-1").attr("src",videos);
            }
        }
    });
});