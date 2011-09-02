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
		for(var ii=0, allLength = value.length; ii < allLength; ii++){
			var newPara = document.createElement("p");
			var itemTxt = document.createTextNode(value[ii]);
			newPara.appendChild(itemTxt);
			newDiv.appendChild(newPara);
			getListdiv.appendChild(newDiv);
		}
		var genreImage = "other.jpg"; 
			if(genre == "comedy"){ genreImage = "comedy.jpg"; }
			if(genre == "drama"){ genreImage = "drama.jpg"; }
			if(genre == "action"){ genreImage = "action.jpg"; }
			if(genre == "horror"){ genreImage = "horror.jpg"; }
			if(genre == "documentary"){ genreImage = "documentary.jpg"; }
		//add image
		var newP = document.createElement("p");
		var newImg = document.createElement("IMG");
		newImg.setAttribute("src", "images/" + genreImage);
		newP.appendChild(newImg);
		
		//delete single item link
		var deleteLink = document.createElement("a");
		var setHref = deleteLink.setAttribute("href", "#");
		var setOnclick = deleteLink.setAttribute("onclick", "deleteItem(" + key + ");");
		var deleteText = document.createTextNode("delete item");
		deleteLink.appendChild(deleteText);
		newP.appendChild(deleteLink);
		
		//edit single item link
		var editLink = document.createElement("a");
		var setHref = editLink.setAttribute("href", "#");
		var setOnclick = editLink.setAttribute("onclick", "editItem(" + key + ");");
		var editText = document.createTextNode("edit item");
		editLink.appendChild(editText);
		newP.appendChild(editLink);
		getListdiv.appendChild(newP);
		}
		
		if(localStorage.getItem('apptitle')){
		var clearLink = document.getElementById('clear');
		clearLink.style.display = "block";
	}else{
		var title = "Enter Movie Title";
		var actor = "Enter Actor/Actress Name";
		var director = "Enter Director Name";
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
		if(actor == "Enter Actor/Actress Name"){ 
			actor = "";
		}
		// if you left the value with the default text than this will make the value blank
	var director = document.getElementById('director').value;
		if(director == "Enter Director Name"){
			director = "";
		}
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
	var editItem = document.getElementById('editItem');
	editItem.style.display = "block";
	var submit = document.getElementById('submit');
	submit.style.display = "none";
	
	// when clicking editItem button
	document.getElementById('editItem').onclick = function(){
		var genre = document.getElementById('genre').value;
		var title = document.getElementById('title').value;
		var actor = document.getElementById('actor').value;
			if(actor == "Enter Actor/Actress Name"){ 
				actor = "";
			}
		// if you left the value with the default text than this will make the value blank
		var director = document.getElementById('director').value;
			if(director == "Enter Director Name"){
				director = "";
			}
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
		if(genre != "choose" && title != "" && title != "Enter Movie Title" && release != ""){
			localStorage.setItem(itemId, allItems);
			alert("Item Updated!");
		}else{
			alert("All fields are required.");
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
	
	if(getGenre == "choose"){ // if you didn't choose a genre than you get an alert and it returns to the form
		alert("You must choose a genre.");
		document.getElementById("genre").style.border = "1px solid red";
		return false;
	}
	
	if(getTitle == "" || getTitle == "Enter Movie Title"){ // must enter a title
		alert("You must enter a movie title.");
		document.getElementById("title").style.border = "1px solid red";
		return false;
	}
	
	if(getDate == ""){
		alert("You must enter a release date."); // must enter a release date
		document.getElementById("release").style.border = "1px solid red";
		return false;
	}else{
		document.getElementById("title").style.border = "1px solid #ccc";
		document.getElementById("genre").style.border = "1px solid #ccc";
		alert("Form Submitted!");
		saveItems(); // if all is good than run the saveItems function
	}
}
