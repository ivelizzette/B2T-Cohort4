
function getFormValue(){
	let firstName = document.getElementById('fname').value;
	let lastName = document.getElementById('lname').value;
	console.log(firstName+"  "+lastName);
	document.getElementById('display').innerHTML="Hello"+firstName+"  "+lastName;
}