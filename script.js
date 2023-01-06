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


//When message is sent on kontakt os page

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}