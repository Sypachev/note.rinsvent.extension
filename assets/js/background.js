$(function () {
    let app = new App();

    chrome.extension.onMessage.addListener(function (request, sender, callback) {
        if (request == "/App/getNotes") {
            let data = app.getBgNotes();
            callback(data);
        }
    });

});