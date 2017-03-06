$(function() {

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top - 80
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.main-carousel').flickity({
        setGallerySize: true,
        initialIndex: 0,
        cellSelector: '.carousel-cell',
        autoPlay: 1500,
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
        var email = $('#signup').val();
        if(email == ''){
            alert('Please enter a valid email address to subscribe.');
        }else if(!validateEmail(email)){
            alert(' :\( That is not a valid email, please enter a valid email.')
        }else{
            alert('Thanks for subscribing!');
        }
    });

    $("a[href^='#']").not("a[href='#']").click(function() {
        $("#"+$(this).attr("href").slice(1)+"").focus();
    });

    $('.aloha-email').click(function(){
    $(this).addClass('visited');
});

});

function validateEmail(email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
        return true;
    }else{
        return false;
    }
}