
function start() {
	// do something on load
}

function createNewRow(event) {
	var ul = document.getElementById("unordered-list");
	
	// var list = document.createElement("LI");
	// list.id = "new-list";
	// ul.appendChild(list);	
	
	// var li = document.getElementById("new-list");
	
	var textAreaKey = document.createElement("TEXTAREA");
	textAreaKey.id = "new-textarea-key";
	// textAreaKey.onkeypress = "getinput(event)";
	ul.appendChild(textAreaKey);
	
	var textAreaValue = document.createElement("TEXTAREA");
	textAreaValue.id = "new-textarea-value";
	// textAreaValue.onkeypress = "getinput(event)";
	ul.appendChild(textAreaValue);
	
	var button = document.createElement("BUTTON");
	var text = document.createTextNode("x");
	button.id = "new-button";
	button.appendChild(text);
	ul.appendChild(button);
	
	var br = document.createElement("BR");
	br.id = "br-markup";
	ul.appendChild(br);
	
	button.onclick = function() {
		this.previousSibling.remove();
		this.previousSibling.remove();
		this.nextSibling.remove();
		this.parentNode.removeChild(button);
	};
	
	textAreaKey.onkeyup = function(event) {
		var input = event.target.value;
		document.getElementById("tak-output").innerHTML = input;
	};
	
	textAreaValue.onkeyup = function(event) {
		var input = event.target.value;
		document.getElementById("tav-output").innerHTML = input;
	};
}
