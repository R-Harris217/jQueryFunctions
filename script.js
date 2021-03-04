$(document).ready(function() {
    $('#click').click(function(){
        $('#hide').hide();
    });
    $('#show').click(function(){
        $('#hide').show();
    });
    $('#toggle').click(function(){
        $('#ttime').toggle();
    });
    $('#down').click(function(){
        $('#slide').slideDown('slow');
    });
    $('#up').click(function(){
        $('#slide').slideUp('fast');
    });
    $('#stoggle').click(function(){
        $('#slide').slideToggle('fast');
    });
    $('#fadein').click(function(){
        $('#fade').fadeIn('fast');
    });
    $('#fadeout').click(function(){
        $('#fade').fadeOut('slow');
    });
    $('#b4').click(function(){
        $('#before').before('<h1>First</h1>');
    });
    $('#after').click(function(){
        $('#before').after('<h1>Last</h1>');
    });
    $('#before').append('<strong> .APPEND</strong>');
    $('#html').html('HTML');
    $('#box').attr({
        title: "The Box",
        alt: "Box"
    });
    $('#boxtxt').text($('#box').attr('title'));
    $('#vb').click(function(){
        var text = $(this).text();
        $('#val').val(text);
    });
});