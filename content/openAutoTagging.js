// helloworld.js
// 
// Copyright (C) 2007 serikashiki
////////////////////////////////////////////////////////////////////////////////

function openAutoTaggingDialog() {
	window.openDialog("chrome://autotaggingextension/content/autotagging.xul", "About","chrome",document.commandDispatcher.focusedWindow);
	//window.open( URL, ウィンドウ名 [,オプション] )
	//window.open("chrome://helloworld/content/about.html", "About", "dialog,centerscreen");
}

function openWizard() {
	window.open("chrome://autotaggingextension/content/wizard.xul","About","chrome");
}
