
$(document).ready(function () {
    $('#menu').multilevelpushmenu({
        containersToPush: [$('#pushobj')],
        menuWidth: '300px',
        menuHeight: '100%',
        collapsed: true,
        
    });
    $('#menu').multilevelpushmenu('option', 'menuHeight', $(document).height());
    $('#menu').multilevelpushmenu('redraw');
    $(".cursorPointer").on('click',function(){
        $("#clickimg").hide(200);
    });


});

$(window).resize(function () {
    $('#menu').multilevelpushmenu('option', 'menuHeight', $(document).height());
    $('#menu').multilevelpushmenu('redraw');
});


