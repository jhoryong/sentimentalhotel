// save user name to sessionStorage and bring it out
let getName = function(){
    let inputVal = $('#playerName').val();
    sessionStorage.setItem("playerName", inputVal);
    $('.player-name').text(sessionStorage.getItem("playerName"));
}

$('.player-name').text(sessionStorage.getItem("playerName"));