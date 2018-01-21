//content.js
//guided by tutorial https://robots.thoughtbot.com/how-to-make-a-chrome-extension
//getSelectedText from https://stackoverflow.com/questions/4712310/javascript-how-to-detect-if-a-word-is-highlighted


function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}
