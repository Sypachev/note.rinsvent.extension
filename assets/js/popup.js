// chrome.browserAction.setPopup({popup:"login.html"});
// document.location.reload();
// chrome.tabs.update(null,{},function(){});

$.ajax({
    method: "POST",
    url: "http://note.rinsvent.ru/login",
    data: { 'LoginForm[username]': "rinsvent", 'LoginForm[password]': "2Wdtnjr",'LoginForm[rememberMe]':1 },
}).done(function( data,textStatus, jqXHR ) {
    if ( console && console.log ) {
        console.log( "data:", data );
        console.log( "textStatus:", textStatus );
        console.log( "jqXHR:", jqXHR );
        console.log( "jqXHR.getAllResponseHeaders:", jqXHR.getAllResponseHeaders() );
    }
});