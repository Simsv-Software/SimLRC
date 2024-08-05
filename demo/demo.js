
let lrcInstance;

function render() {
	let options = {callback: text => {document.title = text + " - 风吹故里";}};
	try { options = JSON.parse(document.getElementById("confInput").value); }
	catch (_ignore) {}
	lrcInstance = new SimLRC(document.getElementById("lrcInput").value);
	lrcInstance.render(document.getElementById("container"), document.getElementById("audio"), options);
}