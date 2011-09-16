// GET ITEMS FUNCTION		----------------------------
function getItems(){
	var getListdiv = document.getElementById("list");
	
	for(var i=0, len = localStorage.length; i < len; i++){
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		value = value.split(',');
		var genre = value[0];
		var title = value[1];
		var actor = value[2];
		var director = value[3];
		var rating = value[4];
		var favorites = value[5];
		var family = value[6];
		var release = value[7];
		var description = value[8];
		var newDiv = document.createElement("div");
		/*for(var ii=0, allLength = value.length; ii < allLength; ii++){
			var newPara = document.createElement("p");
			var itemTxt = document.createTextNode(value[ii]);
			newPara.appendChild(itemTxt);
			newDiv.appendChild(newPara);
			getListdiv.appendChild(newDiv);
		}*/
		var newh3 = document.createElement("h3");
		var titleTxt = document.createTextNode(value[1]);
		newh3.appendChild(titleTxt);
		newDiv.appendChild(newh3);
		getListdiv.appendChild(newDiv);
		var setdiv = newDiv.setAttribute("data-role", "fieldcontain");
		
		var newP = document.createElement("p");
		var genreTxt = document.createTextNode("Genre: " + value[0]);
		newP.appendChild(genreTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var actorTxt = document.createTextNode("Actors/Actresses: " + value[2]);
		newP.appendChild(actorTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var directorTxt = document.createTextNode("Director: " + value[3]);
		newP.appendChild(directorTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var ratingTxt = document.createTextNode("Rating: " + value[4]);
		newP.appendChild(ratingTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var favTxt = document.createTextNode("Favorites: " + value[5]);
		newP.appendChild(favTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var famTxt = document.createTextNode(value[6]);
		newP.appendChild(famTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var releaseTxt = document.createTextNode("Release Date: " + value[7]);
		newP.appendChild(releaseTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var newP = document.createElement("p");
		var descTxt = document.createTextNode("Decription: " + value[8]);
		newP.appendChild(descTxt);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		var genreImage = "other.jpg"; 
			if(genre == "Comedy"){ genreImage = "comedy.jpg"; }
			if(genre == "Drama"){ genreImage = "drama.jpg"; }
			if(genre == "Action"){ genreImage = "action.jpg"; }
			if(genre == "Horror"){ genreImage = "horror.jpg"; }
			if(genre == "Documentary"){ genreImage = "documentary.jpg"; }
		
		//add image
		var newP = document.createElement("p");
		var newImg = document.createElement("IMG");
		newImg.setAttribute("src", "images/" + genreImage);
		newP.appendChild(newImg);
		newDiv.appendChild(newP);
		
		//delete single item link
		var newP = document.createElement("p");
		var deleteLink = document.createElement("a");
		var setHref = deleteLink.setAttribute("href", "#");
		var setOnclick = deleteLink.setAttribute("onclick", "deleteItem(" + key + ");");
		var deleteText = document.createTextNode("Delete item");
		deleteLink.appendChild(deleteText);
		newP.appendChild(deleteLink);
		newDiv.appendChild(newP);
		getListdiv.appendChild(newDiv);
		
		//edit single item link
		var newP = document.createElement("p");
		var editLink = document.createElement("a");
		var setHref = editLink.setAttribute("href", "#");
		var setOnclick = editLink.setAttribute("onclick", "editItem(" + key + ");");
		var editText = document.createTextNode("Edit item");
		editLink.appendChild(editText);
		newP.appendChild(editLink);
		newDiv.appendChild(newP);
		//getListdiv.appendChild(newP);
		}
		
		if(localStorage.getItem('apptitle')){
		var clearLink = document.getElementById('clear');
		clearLink.style.display = "block";
	}else{
		var title = "";
		var actor = "";
		var director = "";
		var title = document.getElementById('title').value = title;
		var actor = document.getElementById('actor').value = actor;
		var director = document.getElementById('director').value = director;
	}
}

// SAVE ITEMS FUNCTION		----------------------------
function saveItems(id){
	var d = new Date();
    var key= (d.getTime());
	var genre = document.getElementById('genre').value;
	var title = document.getElementById('title').value;
	var actor = document.getElementById('actor').value;
	var director = document.getElementById('director').value;
	var rating = document.getElementById('rating').value;
	var favorites = document.getElementById('favorites').value;
	if(favorites == "on"){ 
		var favorites = "Yes" // if favorite is checked say yes
	}else{
		var favorites = "No" // if not, say no
		}
	if(document.getElementById('yes').checked){
		var family = "This is a family movie"
	}else{
		var family = "This is not a family movie"
	}
	var release = document.getElementById('release').value;
	var description = document.getElementById('description').value;
	var allItems = [
		genre,
		title,
		actor,
		director,
		rating,
		favorites,
		family,
		release,
		description
	];
	localStorage.setItem(key, allItems);
	location.reload();
}

// EDIT ITEMS FUNCTION		----------------------------
function editItem(id){
	//alert(id);
	var itemId = id;
	var value = localStorage.getItem(itemId);
	value = value.split(',');
	var genre = value[0];
	var title = value[1];
	var actor = value[2];
	var director = value[3];
	var rating = value[4];
	var favorites = value[5];
	var family = value[6];
	var release = value[7];
	var description = value[8];
	
	document.getElementById('genre').value = genre;
	document.getElementById('title').value = title;
	document.getElementById('actor').value = actor;
	document.getElementById('director').value = director;
	document.getElementById('rating').value = rating;
	document.getElementById('favorites').value = favorites;
	if(favorites == "Yes"){
		document.getElementById('favorites').setAttribute("checked", "checked");
	}
	if(family == "This is a family movie"){
		document.getElementById('yes').setAttribute("checked", "checked");
	}else{
		document.getElementById('no').setAttribute("checked", "checked");
	}
	document.getElementById('release').value = release;
	document.getElementById('description').value = description;
	
	// show edit item button, hide submit button
	var editButton = document.getElementById('edit-item-button');
	editButton.style.display = "block";
	var subresButtons = document.getElementById('submit-reset-buttons');
	subresButtons.style.display = "none";
	var itemList = document.getElementById('list');
	itemList.style.display = "none";
	
	// when clicking editItem button
	document.getElementById('edit-item').onclick = function(){
		var genre = document.getElementById('genre').value;
		var title = document.getElementById('title').value;
		var actor = document.getElementById('actor').value;
		var director = document.getElementById('director').value;
		var rating = document.getElementById('rating').value;
		var favorites = document.getElementById('favorites').value;
		if(favorites == "on"){ 
			var favorites = "Yes" // if favorite is checked say yes
		}else{
			var favorites = "No" // if not, say no
		}
		if(document.getElementById('yes').checked){
			var family = "This is a family movie"
		}else{
			var family = "This is not a family movie"
		}
		var release = document.getElementById('release').value;
		var description = document.getElementById('description').value;	
		var allItems = [
			genre,
			title,
			actor,
			director,
			rating,
			favorites,
			family,
			release,
			description
		];
		if(title != "" && title != "Enter Movie Title" && release != ""){
			localStorage.setItem(itemId, allItems);
			//alert("Item Updated!");
			location.reload();
		}else{
			alert("The Title and Release Date fields are required.");
		}
	};
}

// DELETE ITEM FUNCTION		----------------------------
function deleteItem(id){
	var ask = confirm("Are you sure?");
	if(ask){
		localStorage.removeItem(id);
		window.location.reload();
	}else{
		alert("Item not removed.");
	}
}

// CLEAR ITEMS FUNCTION		----------------------------
function clearItems(){
	localStorage.clear();
	return false;
}

// VALIDATE FORM FUNCTION	----------------------------
function validateForm(){
	var getGenre = document.getElementById('genre').value;
	var getTitle = document.getElementById('title').value;
	var getActor = document.getElementById('actor').value;
	var getDirector = document.getElementById('director').value;
	var getDate = document.getElementById('release').value;
	
/*
	if(getGenre == "choose"){ // if you didn't choose a genre than you get an alert and it returns to the form
		alert("You must choose a genre.");
		document.getElementById("genre").style.border = "1px solid red";
		return false;
	}
	*/
	
	if(getTitle == ""){ // must enter a title
		document.getElementById("title").style.border = "1px solid red";
		return false;
	}
	
	if(getDate == ""){
		document.getElementById("release").style.border = "1px solid red";
		return false;
	}else{
		document.getElementById("title").style.border = "1px solid #ccc";
		document.getElementById("genre").style.border = "1px solid #ccc";
		saveItems(); // if all is good than run the saveItems function
	}
}


function clickclear(thisfield, defaulttext) {
	if (thisfield.value == defaulttext) {
		thisfield.value = "";
	}
}

function clickrecall(thisfield, defaulttext) {
	if (thisfield.value == "") {
		thisfield.value = defaulttext;
	}
}

//$(document).ready(function(){
	var movieform = $('#addmovieform');
	movieform.validate();
//});