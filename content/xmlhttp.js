/*******************************
function名：createXMLHttpRequest
 HTTP通信用、共通関数 
 ブラウザごとに生成するオブジェクトを変更する
 
********************************/
function createXMLHttpRequest()
{
	var httpObj = false;
	if(window.XMLHttpRequest) { // Mozzila, Safari,...
		httpObj = new XMLHttpRequest();
		if (httpObj.overrideMimeType) {
			httpObj.overrideMimeType('text/xml');
		}
	} else if (window.ActiveXObject) { // IE
		try {
			httpObj = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				httpObj = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	if (!httpObj) {
		alert('Giving up :( Cannot create an XMLHTTP instance)');
		return false;
	}
	return httpObj;
}