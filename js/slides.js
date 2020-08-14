//Implementando o plugin  Slick para fazer o carousel de imagens via js. 
$(function(){
    $('.section-mosaico .container .wraper-mosaico').slick({
        centerMode: false, 
        slidesToShow: 6,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 1000,
        responsive:[
            {
                breakpoint:900,
                settings:{
                    arrows:false,
                    centerMode: true,
                    slidesToShow:3,
                }
            },
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:3,
                }
            },
            {
                breakpoint:550,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:2,
                }
            },
        ]
    });
    
    $('.tratamentos .container').slick({
        slidesToShow: 3, 
        centerMode:false,
        arrows:false, 
        infinite:false, 
        dots: true,
        responsive:[
            {
                breakpoint:948, 
                settings:{
                    arrows:false, 
                    dots:true,
                    infinite:false,
                    centerMode: false, 
                    slidesToShow: 1
                }
            }

        ]
    });
  

    $('.depoimentos .container').slick({
        arrows:false,
        dots:true

    });

    $('.container-mosaico-social .mosaico-social').slick({
        slidesToShow:6,
        slideToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 1000,
        centerMode: false,
        infinite: true,
    
        

    });
})


