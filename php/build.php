<?php
//Global Variables
$dir = "../images/gallery/";
$imgArray = array();
$reversed = array();
$numPhotos = 0;
$numAlbums = 0;
$index = 3;
$size = 2;
$folder_name = 1;


function main(){
	scan_folder_for_albums();
}

function scan_folder_for_albums(){
    global $imgArray, $size, $numAlbums, $numPhotos, $index, $reversed, $folder_name;
    
    foreach (glob('../images/gallery/*', GLOB_ONLYDIR) as $folder) {      
        foreach (glob($folder."/*") as $image) {
        $imgArray[$index] = $image;
        $index += 1;
        $numPhotos += 1;
        }
    $imgArray[$folder_name] = $folder;
    $imgArray[$size] = $numPhotos;
    $index += 3;
    $size = $index - 1;
    $folder_name = $size -1;
    $numPhotos = 0; 
    $numAlbums += 1;                                           
	}
    $imgArray[0] = $numAlbums;
    $reversed = array_reverse($imgArray);
}
main();
echo json_encode($reversed);
?> 