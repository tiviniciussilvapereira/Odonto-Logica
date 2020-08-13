//Menu mobile
$(function(){
    $('.mobile-menu').click(function(){
        $('.mobile-menu').find('ul').slideToggle();
    })
});

//Navegação 
$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href'); 
        var offsetTop = $(href).offset().top; 

        $('html, body').animate({'scrollTop':offsetTop});

    })
});