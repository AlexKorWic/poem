
    $('.nav a').click(function(e) {
        e.preventDefault();
        let $a = $(this);
        $('body, html').animate({
            scrollTop: $(`${$a.attr('href')}`).offset().top
        }, 2000);
    })