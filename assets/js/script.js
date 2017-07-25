chrome.extension.sendMessage("22", function (a) {
    console.log(a);
    null == getCookie("site") && (document.cookie = "site=" + getCookieStr("site", a));
});

function getCookie(a) {
    var b = " " + document.cookie;
    a = " " + a + "=";
    var d = null, c = 0, e = 0;
    0 < b.length && (c = b.indexOf(a), -1 != c && (c += a.length, e = b.indexOf(";", c), -1 == e && (e = b.length), d = unescape(b.substring(c, e))));
    return d;
}
function getCookieStr(a, b) {
    var d = a + "=", c = null, e = 0, f = 0;
    0 < b.length && (e = b.indexOf(d), -1 != e && (e += d.length, f = b.indexOf(";", e), -1 == f && (f = b.length), c = unescape(b.substring(e, f))));
    return c;
}
