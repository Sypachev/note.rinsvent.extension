'use strict';
class App {
    constructor() {
        this.domain = "https://note.rinsvent.ru/api/";
        this.method = "";
        this.bgPage = chrome.extension.getBackgroundPage();
        this.notesId = "notes";
        this.requestFailureCount = 0;
        this.init();
    }

    init() {

    }

    static print() {
        console.log("print");
    }

    handleError(xhr, textStatus) {
        //util.displayError('Failed to fetch docs. Please try again.');
        ++this.requestFailureCount;
    };

    renderNote(note){
        let notesId = this.notesId;
        let nodeNotes = $("#" + notesId);
        let text = this.getNoteHtml(note);
        nodeNotes.append(text);
    }

    getNoteHtml(note){
        return '<div class="note"><div class="date">' + note["date_created"]
            + '</div><div class="name">' + note["name"]
            + '</div><div class="text">' + note["text"]
            + '</div><hr /></div>';
    }

    renderNotes(resp, xhr) {
        if (xhr.status != 200) {
            app.handleError(xhr, response);
            return;
        } else {
            app.requestFailureCount = 0;
        }

        var resp = JSON.parse(resp);

        let notesId = app.notesId;
        let nodeNotes = $("#" + notesId);
        if(nodeNotes.length == 0){
           $(".container .tab.search").append('<div id="' + notesId + '">');
            nodeNotes = $("#" + notesId);
        }
        nodeNotes.html("");

        if(resp.items.length > 0){
            nodeNotes.append('<div class="title">Найдено:</div>');
        }else{
            nodeNotes.append('<div class="title">Ничего не найдено</div>');
        }

        for(let note in resp.items){
            app.renderNote(resp.items[note]);
        }
    }

    getNotes(node) {

        let formData = false;
        if(typeof node == "object"){
            let form = this.getForm(node);
            formData = this.getFormData(form);
        }

        var that = this;
        this.method = "get-notes";
        let url = this.domain + this.method;

        let params = {
            'method': 'GET',
            'headers': {
                'GData-Version': '3.0',
                'If-Match': '*'
            },
            'parameters': {
                'alt': 'json',
                'max-results': 100,
            }
        };

        for(let key in formData){
            params.parameters[formData[key].name] = formData[key].value;
        }

        this.send(url, this.renderNotes, params);
    };

    getForm(node){
        return $(node).closest("form");
    }

    getFormData(node){
        return $(node).serializeArray()
    }

    send(url, callback, params) {
        var that = this;
        params.parameters['access-token'] = this.bgPage.oauth.getToken();
        this.bgPage.oauth.authorize(function () {
            that.bgPage.oauth.sendSignedRequest(
                url,
                callback,
                params
            );
        });
    }

    getNote() {

    }

    updateNote() {

    }


    renderAddNote(){

    }

    addNote(node){
        let formData = false;
        if(typeof node == "object"){
            let form = this.getForm(node);
            formData = this.getFormData(form);
        }

        var that = this;
        this.method = "add-note";
        let url = this.domain + this.method;

        let params = {
            'method': 'GET',
            'headers': {
                'GData-Version': '3.0',
                'If-Match': '*'
            },
            'parameters': {
                'alt': 'json',
                'max-results': 100,
            }
        };

        for(let key in formData){
            params.parameters[formData[key].name] = formData[key].value;
        }

        this.send(url, this.renderAddNote, params);
    }
}