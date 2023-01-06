//VIDEO Frontpage
var x = 0;
function marginExpand(){
    if(x == 0){
        document.getElementById("vidOverlay").style.marginTop="464px";
        x = 1;
    } else {
        document.getElementById("vidOverlay").style.marginTop="80px"
        x = 0;
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
