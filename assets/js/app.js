'use strict';
class App{
     constructor(){
         this.domain = "https://note.rinsvent.ru/api/";
         this.method = "";
         this.init();
     }
    init(){

    }
    static print(){
        console.log("print");
    }

    getNotes(){
        this.method = "get-notes";
        $.ajax({
            type   : "POST",
            url    : this.domain + this.method,
            data   : {},
            dataType: "json",
            success: function (data) {
                console.log("/App/getNotes", data);
            }
        });
    }

    getNote(){

    }
    updateNote(){

    }
}