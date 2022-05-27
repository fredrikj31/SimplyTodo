// Register Click Events
document.getElementById("todo-item").addEventListener("click", updateStatus);
document.getElementById("todo-view").addEventListener("click", viewDetails);

function updateStatus() {
	console.log("Updating Status");
}

function viewDetails() {
	console.log("Hello World");
	$("#detailsModal").modal('toggle');
}
