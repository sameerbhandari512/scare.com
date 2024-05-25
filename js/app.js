$(document).ready(function() {
    document.body.setAttribute("oncontextmenu", "return false;");

    const pop_over_load = $('.pop-over-load');
    const pop_over_msg_loaded = $('.pop-over-msg-loaded');
    const container = $('.container');
    const content = $('.content');
    const yes_btn = $('#yes-btn');
    const no_btn = $('#no-btn');

    container.eq(0).show();
    content.eq(0).css("display", "flex");
    pop_over_load.eq(0).fadeIn();

    let i = 1;
    myInterval = setInterval(() => {
        if (pop_over_load[i] != undefined) {
            pop_over_load.eq(i - 1).hide();
            pop_over_load.eq(i).fadeIn();
            i++;
        } else {
            pop_over_msg_loaded.css("visibility", "visible");
            pop_over_msg_loaded.css("opacity", "1");
            clearInterval(myInterval);
        }
    }, 4000);

    $('a[data-toggle="Next"]').click(function() {
        $(this).parent().parent().hide();
        $(this).parent().parent().next().fadeIn(1000);
    });

    $('a[data-toggle="Previous"]').click(function() {
        $(this).parent().parent().hide();
        $(this).parent().parent().prev().fadeIn(1000);
    });

    $('.heart').click(function() {
        if (!$(this).parent().hasClass('flap')) {
            setTimeout(() => {
                $(this).prev().find(".letter").removeClass("mail-out");
            }, 4000);
    
            setTimeout(() => {
                $(this).prev().find(".letter").css("z-index", "100");
                $(this).prev().find(".letter").css("bottom", "100px");
            }, 3000);
    
            setTimeout(() => {
                $(this).parent().nextAll().css("visibility", "visible");
                $(this).parent().nextAll().css("opacity", "1");
            }, 2500);
    
            $(this).css("cursor", "default");
            $(this).parent().addClass('flap');
        }
    });

    yes_btn.click(function() {
        $(this).parent().parent().parent().fadeOut(500);

        setTimeout(() => {
            $('.yes-content').fadeIn();
            $('.yes-content').css("display", "flex");
        }, 500)
    })

    no_btn.click(function() {
        $(this).parent().parent().parent().fadeOut(500);

        setTimeout(() => {
            $('.no-content').fadeIn();
            $('.no-content').css("display", "flex");
        }, 500)
    })
})
