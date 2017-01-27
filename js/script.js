console.log('hope');

$(document).ready(function(){

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top - 100
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.main-carousel').flickity({
        setGallerySize: true,
        initialIndex: 0,
        cellSelector: '.carousel-cell',
        autoPlay: 1000,
        cellAlign: 'left',
        wrapAround: true
    });

   var itemCount = 0;

    $('.add-cart').click(function (e){
        e.preventDefault();
        itemCount ++;
        $('#itemCount').html(itemCount).css('display', 'block');
    }); 

    $('#subscribe').on('click',function(e) {
        e.preventDefault();
        alert('Thanks for subscribing!');
    });
});