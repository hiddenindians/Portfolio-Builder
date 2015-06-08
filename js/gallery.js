function Album(name, length, photoList) {
	this.name = name;
	this.length = length;
	this.photoList = photoList;
}



var initArray = (function () {
	var initArray = null;
	$.ajax({
		async: false,
		type: 'GET',
		url: 'build.php',
		dataType: 'json',
		success: function (data) {
			initArray = data;
		}
	});
    return initArray;
})();


function buildGallery() {
	for (var i =0 ; i < initArray.length; i++){
		alert(initArray[i]);
	}
}

function main(){
	var photoList;
	var gallery = new Array();
	photoList = loadPhotos();

	gallery = buildGallery(parseInt(photoList[1]), photoList, 1, photoList[0]);
}

buildGallery();
