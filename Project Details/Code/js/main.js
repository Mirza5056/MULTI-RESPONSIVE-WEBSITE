$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.bar-menu').toggleClass('nav-toggle');
    });
});