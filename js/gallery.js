function readPortfolio(callback) {
	var initArray = null;
	$.ajax({
		type: 'GET',
		url: 'php/build.php',
		dataType: 'json',
		success: function (data) {
			initArray = data;
			alert("success");
			callback(initArray);
		}
	});
};

function buildGallery(initArray) {
	var numAlbums;
	var numPhotos;
	var albumName;
	var albumSplit;
	var index = 1;

	numAlbums = parseInt(initArray[0]);

	for (var i = 0 ; i < numAlbums; i++){
		//trim album name
		albumName = initArray[index+1].toString();
		
		albumSplit = albumName.split("/");
		for (var j = 0; j < albumSplit.length; j++){
			albumName = albumSplit[j].toString();
		}
		//append album to gallery
		$("#galleryFrame").append("<div id=\""+albumName+"\"><div>");
		
		//update indexes
		numPhotos = initArray[index];
		
		index = index + 2; 
		//add images to gallery
		for(var k = 0; k < numPhotos; k++){
			$("#" + albumName).append("<img src=\"" + initArray[index] + "\" />")
			index = index + 1;
		}
	}
};



$(document).ready(readPortfolio(buildGallery));
