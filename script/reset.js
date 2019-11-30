//click reset button
$('.reset-icon').click(function(){
    $('.dialogue-box-reset, .dialogue-box-reset .line, #reset-bg').show();
})

//proceed reset
$('.clicker-reset-1').click(function(event){
    event.preventDefault();
    $('.fade-box').fadeIn(2000);
    setTimeout(function() {
        window.location = $('#reset').attr('href');
    }, 4000);
})

//close
$('.clicker-reset-2').click(function(){
    $('.dialogue-box-reset, .dialogue-box-reset .line, #reset-bg').hide();
})