let on=0;
function men(){
    if(on==0){
        document.getElementById("nav").style.display = "flex";
        on=1;
    }
    else{
        document.getElementById("nav").style.display = "none";
        on=0;
    }
}