document.cookie = "flagFirst=0; path=/;";
document.cookie = "data=; path=/;";
chrome.extension.onMessage.addListener(function(request, sender, f_callback){
	//if(request=='некий объект в фон') //проверяется, от того ли окна и скрипта отправлено
	if(request  == "office.well.ru" || request  == "agent.putevkamarket.ru"){
		document.cookie= "site="+request+"; path=/;";
	}else if(request == "11"){
		f_callback(document.cookie);
		if(getCookie("flagFirst")==1)
			document.cookie = "flagFirst=2; path=/;";
	}else{
		var data = JSON.parse(request);
		document.cookie = "data="+request + "; path=/;";
		if(getCookie("flagFirst")==0)
			document.cookie = "flagFirst=1; path=/;";
	}if(request == "22"){
		f_callback(document.cookie);
	}
});
function getCookie(name) {
    var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return (setStr);
}

chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
    console.log("dfas");
});