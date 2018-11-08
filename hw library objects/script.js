let library = [
	{author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/The_Road_Ahead_%28Bill_Gates_book%29.jpg/220px-The_Road_Ahead_%28Bill_Gates_book%29.jpg' },
	{author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true, cover: 'https://bookdepot-lmwv1z0x2r9fdffrc7q.netdna-ssl.com/covers/large/isbn978150/9781501127625-l.jpg'},
	{author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The hunger Games', readingStatus: false, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Mockingjay.JPG/220px-Mockingjay.JPG'},


];

for(let i = 0; i < library.length; i++){
	if(library[i].readingStatus === true){
	document.getElementById("display").innerHTML += 
		`<h1>Already read${library[i].name} by ${library[i].artist} </h1>
		<img src="${library[i].cover}" />`;
}

else{
	document.getElementById("display").innerHTML += 
	`<h1>You still need to read, ${library[i].title} by ${library[i].author} </h1>
		<img src="${library[i].cover}" />`;

	
}
}
	

 
