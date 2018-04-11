
function addContent () {

	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";


	// using javascript
	// 1. find the content div
	var content = document.getElementById('content');

	// 2. modify its html attribute by adding items_html

	// Inner HTML method
	content.innerHTML = items_html;

	// Append child method (BAD)
	//text = document.createTextNode(items_html);
	//content.appendChild(text);

	// Write code
	//document.write(items_html);
}

function deleteContent(){

	var content = document.getElementById('content');

	content.innerHTML = "";
}

function writePhrase(){

	phraseToWrite = document.getElementById("phraseToWrite");
	console.log( phraseToWrite.toString() );

	phrase = phraseToWrite.value;
	console.log( phrase );

	var textElement = document.createElement("p");
	var text = document.createTextNode( phrase );
	content.appendChild(text);

}
