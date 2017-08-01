'use strict';
class App{
     constructor(){
         this.domain = "https://note.rinsvent.ru/api/";
         this.method = "";
         this.get = "?access-token=2Wdtnjr";
         this.init();
     }
    init(){

    }
    static print(){
        console.log("print");
    }

    handler(text, xhr){
        console.log('text', text);
        return "sd23421f";
    }

    getBgNotes(){
        this.method = "get-notes";
        // $.ajax({
        //     type   : "POST",
        //     url    : this.domain + this.method + this.get,
        //     data   : {
        //         'id' : 1
        //     },
        //     dataType: "json",
        //     success: function (data) {
        //         console.log("/App/getNotes", data);
        //     }
        // });



        // oauth.authorize(function() {
        //     console.log("on authorize");
        //     var url = this.domain + this.method;
        //     oauth.sendSignedRequest(url, this.handler, {
        //         'parameters' : {
        //             'alt' : 'json',
        //             'max-results' : 100
        //         }
        //     });
        // });

        return "sd23421f";

    }

    getNotes(){
        chrome.extension.sendMessage("/App/getNotes", function (data) {
            console.log(data);
        });
    }

    getNote(){

    }
    updateNote(){

    }
}