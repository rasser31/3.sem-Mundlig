//VIDEO Frontpage
var x = 0;
function marginExpand(){
    if(x == 0){
        document.getElementById("vidOverlay").style.marginTop="464px";
        x = 1;
    } else {
        document.getElementById("vidOverlay", "infoBox").style.marginTop="80px"
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


//When message is sent on kontakt os page

// Finder popup i html
let popUpBesked = document.getElementById("PopUp");

// Knappen
let button = document.getElementById("submitButton");

// krydset der lukker besked
let span = document.getElementsByClassName("close")[0];

// viser block når man klikker på btn
button.onclick = function() {
  popUpBesked.style.display = "block";
}

// hvis klikker på kryds - viser none
span.onclick = function() {
  popUpBesked.style.display = "none";
}

// hvis brugeren klikker på alt andet - viser none
window.onclick = function(event) {
  if (event.target == popUpBesked) {
    popUpBesked.style.display = "none";
  }
}
