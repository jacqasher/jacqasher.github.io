$("#ss_menu" ).load( "ss_menu.html", function() {
    $('.ss_button').on('click',function() {
        $('.ss_content').slideUp('fast');
        $(this).next('.ss_content').slideDown('fast');
    });
});

$("#footer").load("footer.html");


