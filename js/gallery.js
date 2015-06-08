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



// var initArray = (function () {
// 	var initArray = null;
// 	$.ajax({
// 		async: false,
// 		type: 'GET',
// 		url: 'php/build.php',
// 		dataType: 'json',
// 		success: function (data) {
// 			initArray = data;
// 		}
// 	});
//     return initArray;
// })();


function buildGallery(initArray) {
	for (var i =0 ; i < initArray.length; i++){
		alert(initArray[i]);
	}
};

readPortfolio(buildGallery);
