//VIDEO Frontpage
var x = 0;
function marginExpand(){
    if(x == 0){
        document.getElementById("vidOverlay", "infoBox").style.marginTop="80px";
        x = 0;
    } else {
        document.getElementById("vidOverlay").style.marginTop="464px";
        x = 1;
    }
}

var vidX = window.matchMedia("(max-width: 375px)")
var vidX = 0;
function marginExpandMedia() {
    if(vidX == 0){
        document.getElementById("vidOverlay").style.marginTop="464px";
        vidX = 1;
    } else {
        document.getElementById("vidOverlay", "infoBox").style.marginTop="80px";
        vidX = 0;
    }
}



// MAPS Kontakt os
//google maps api
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(55.6423956,12.6088935),
        zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.6423956,12.6088935),
        map: map,
        });
}


