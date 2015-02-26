setInterval(function() {
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
}, 1000);


