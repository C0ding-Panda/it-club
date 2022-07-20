var klicks = true;
function pdfanzeigen(){
    if(klicks) {
        document.getElementById("pdf-iframe").style.display = "flex";
        document.getElementById("pdf-btn").innerHTML = "PDF ausblenden";
        klicks = false;
    }
    else{
        document.getElementById("pdf-iframe").style.display = "none";
        document.getElementById("pdf-btn").innerHTML = "PDF einblenden";
        klicks = true;
    }
}
function plus(){
    if(document.getElementById("pdf-iframe").style.display == "flex") {


    }
}
function minus(){
    if(document.getElementById("pdf-iframe").style.display == "flex") {

    }
}