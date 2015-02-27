setButtons();
tHelpButtonModal();
setInterval(colors(), 1000);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

function setButtons() {
	var tSaveButton = document.getElementById("syncstatusdone");

	/* Define Buttons */
	var tHelpButton = document.createElement('input');
	tHelpButton.type = 'button';
	tHelpButton.className = 'tHelp';
	tHelpButton.title = 'Titanpad Color Expansion Help';
	tHelpButton.unselectable = 'on';
	tHelpButton.onclick = function() {document.getElementById('tHelpModal').style.display = 'block';};

	/* Insert Buttons */
	insertAfter(tHelpButton,tSaveButton);
};

function tHelpButtonModal() {

	var tMainmodals = document.getElementById('mainmodals');

	var tHelpModal = document.createElement('div');
	tHelpModal.id = 'tHelpModal';

	tHelpModal.innerHTML = '<div id="tHelpModalInner">'+
			'<div style="position:relative;display:block;top:0;right:0;"><input class="tClose" type="button" onclick="document.getElementById(\'tHelpModal\').style.display = \'none\';"></div>'+
			'<p><h1>Hilfe zu Titanpad Color Expansion Plugin</h1></p>'+
			'<p>'+
				'Aktuell gibt es <span style="color:red">4</span> Farbcodes<br/>'+
				'<br/>'+
				'Die aktuellen Farben lassen sich durch eine Anfangs- und Endmarkierung an ein Textstück setzen. Die Marker hierfür sind:<br/>'+
				'<ul>'+
					'<li>Einfache eckige Klammern für<span style="color:red">[roten Text]</span></li>'+
					'<li>Einfache Rauten für <span style="color:magenta">#magenta Text#</span></li>'+
					'<li>Doppelte Sterne für <span style="color:blue">**blauen Text**</span></li>'+
					'<li>Doppelte "einfache" Apostrophe (Shift + #) für <span style="color:green">\'\'grünen Text\'\'</span></li>'+
				'</ul>'+
			'</p>'+
			'<p>'+
				'Aktuelle Verion: 1.0.1.25<br/>Author: Ralph Dittrich <a href="mailto:kizetu.rd@googlemail.com">kizetu.rd@googlemail.com</a><br/>Lizenz: GNU GPL 02/2015'+
			'</p>'+
		'</div>';

	insertAfter(tHelpModal,tMainmodals);
}

function colors() {
	var outerdocbody = document.getElementsByTagName("iframe")[1].contentWindow.document.getElementById('outerdocbody');
	var innerdocbody = outerdocbody.getElementsByTagName("iframe")[0].contentWindow.document.getElementById("innerdocbody");

	/* Markerset - add new marker here */
	var markerRed = /\[.*\]/gi;
	var markerMagenta = /\#.*\#/gi;
	var markerBlue = /\*\*.*\*\*/gi;
	var markerGreen = /\'\'.*\'\'/gi;
	var etherArray = innerdocbody.getElementsByTagName("span");

	for (index = 0; index < etherArray.length; ++index) {
		var textItem = null;
		textItem = etherArray[index].innerText;
		
		/* Markertest and color setting */
		/* add new markertests here */
		if(textItem.match(markerRed)) {
			etherArray[index].style.color = "red";
		}
		if(textItem.match(markerMagenta)) {
			etherArray[index].style.color = "magenta";
		}
		if(textItem.match(markerBlue)) {
			etherArray[index].style.color = "blue";
		}
		if(textItem.match(markerGreen)) {
			etherArray[index].style.color = "green";
		}
	}
};