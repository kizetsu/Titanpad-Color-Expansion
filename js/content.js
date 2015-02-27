setButtons();
tHelpButtonModal();
setInterval(colors(), 1000);

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

function setButtons() {
	var tSaveButton = document.getElementById("syncstatusdone");

	/* Define Buttons */
	var tHelpButton = document.createElement('a');
	tHelpButton.href = 'javascript:void(tHelpButtonTrigger())';
	tHelpButton.className = 'editbarbutton tHelp';
	tHelpButton.title = 'Titanpad Color Expansion Help';
	tHelpButton.unselectable = 'on';
	tHelpButton.style.display = 'block';
	tHelpButton.style.position = 'absolute';
	tHelpButton.style.height = '26px';
	tHelpButton.style.width

	/* Insert Buttons */
	insertAfter(tHelpButton,tSaveButton);
};

function tHelpButtonModal() {

	var tMainmodals = document.getElementById('mainmodals');

	var tHelpModal = document.createElement('div');
	tHelpModal.id = 'tHelpModal';
	tHelpModal.style.display = 'none';
	tHelpModal.style.position = 'absolute';
	tHelpModal.style.width = '100%';
	tHelpModal.style.height = '100%';
	tHelpModal.style.zIndex = '800';
	tHelpModal.style.top = '0';
	tHelpModal.style.left = '0';
	tHelpModal.style.padding = '30% 10%';

	tHelpModal.innerHTML = '<div id="tHelpModalInner" style="background-color:grey;">'+
			'<a type="button" href="javascript:void(tHelpButtonTrigger());">Close</a>'+
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
				'Aktuelle Verion: 1.0.4<br/>Author: Ralph Dittrich <a href="mailto:kizetu.rd@googlemail.com">kizetu.rd@googlemail.com</a><br/>Lizenz: GNU GPL 02/2015'+
			'</p>'+
		'</div>';

	insertAfter(tHelpModal,tMainmodals);
}

function tHelpButtonTrigger() {
	var tHelpModal = document.getElementById("tHelpModal");
	if(tHelpModal.className === 'tHiddenModal') {
		tHelpModal.className = 'tShownModal';
		tHelpModal.style.display = 'block';
	} else if (tHelpModal.className === 'tShownModal') {
		tHelpModal.className = 'tHiddenModal';
		tHelpModal.style.display = 'none';
	}
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