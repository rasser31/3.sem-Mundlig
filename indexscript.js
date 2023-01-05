//VIDEO
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
