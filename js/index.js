let infoHoverTimer;
let currentInfoHover = 1;
let maxInfoHover;

function changeInfo(){
    if(currentInfoHover>=maxInfoHover){
        currentInfoHover=1;
    }else{
        currentInfoHover++;
    }
    infoHovered(currentInfoHover);
}

function infoHovered(id){
    if(!$(".info-"+id).hasClass("active")) {
        $('.info').css('opacity','0');
        $('.info').removeClass('active');
        $('.info-btn').removeClass('active');
        $(".info-"+id).css('opacity','1');
        $(".info-"+id).addClass('active')
        $('.info-btn[data-id="'+id+'"]').addClass('active');
    }
}

$(document).ready(function () {
    wow = new WOW().init();
/* remove pre loading section */
    $('#preloader').delay(350).fadeOut('slow');
/* remove pre loading section */

// start menu & sub-menu
    $('.navbar-toggler-icon').click(function(){
        $(this).children().toggleClass('d-none');
    })
// end menu & sub-menu

// start elementor animation
    maxInfoHover = parseInt($(".info-btn").length);
    infoHoverTimer = setInterval(changeInfo,5000);

    $('.elementor').waypoint(function() {
            for (let i = 1; i <= maxInfoHover; i++) {
                $('.info-btn[data-id="'+i+'"]').addClass('info-btn-'+i);
                let myName = '.info-btn[data-id="'+i+'"]';
                let myName1 = 'info-btn-'+i;
                setTimeout( function (){
                    $(myName).removeClass(myName1);
                    if (myName1==='info-btn-1') {
                        $('.info-btn[data-id="1"]').addClass('active');
                    }
                },1000)
            }
            this.destroy();
        }
        , {
            offset: '100%'
        });
    $('.info-btn').mouseleave(function(){
        currentInfoHover = parseInt($(this).data('id'));
        infoHoverTimer = setInterval(changeInfo,5000);
    })

    $('.info-btn').mouseenter(function(){
        clearInterval(infoHoverTimer);
        infoHovered($(this).data("id"));
    })
// end elementor animation

// start header & button-up show
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('.navbar-expand-lg').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('.navbar-expand-lg').removeClass('sticky');
        }
    });

    $(".btn-up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    })
// end header & button-up show


// end menu

// start counter
    $('.counter').waypoint(function() {
            $(".number-counter").each(function () {
                const options = {
                    useEasing: true,
                    useGrouping: false,
                    separator: ',',
                    decimal: '.',
                };
                const counter = new CountUp(this, 0, $(this).html(), 0, 9.5, options);
                if (!counter.error) {
                    counter.start();
                } else {
                    console.error(counter.error);
                }
            });
            this.destroy();
        }
        , {
            offset: '100%'
        });
// end counter

// start animation-top
    $('.animate-top').addClass('.animate')
// end animation-top

// start slider
    $('.slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
// end slider
})
