'use strict';

var app = new App();
//auth
if(!app.bgPage.oauth.hasToken()){
    app.bgPage.oauth.authorize(function(){});
};

$(function(){
    $(".search form button").on("click", function(){
        app.getNotes(this);
    });
    $(".add form button").on("click", function(){
        app.addNote(this);
    });
    $(".search form input.query").on('keydown', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            let button = $(".tab.active form button");
            app.getNotes(button);
            return false;
        }
    });

    $(".header_item").on("click", function(){
        $(".header_item, .tab").removeClass("active");
        $(this).addClass("active");
        $('.tab.' + $(this).data("tab")).addClass("active");

    });
});


