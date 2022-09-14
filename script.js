var klicked = true;
function pdfanzeigen(){
    if(klicked) {
        document.getElementById("pdf-img").style.display = "flex";
        document.getElementById("pdf-btn").innerHTML = "PDF ausblenden";
        document.getElementById("download-btn").style.display = "flex";
        klicked = false;
    }
    else{
        document.getElementById("pdf-img").style.display = "none";
        document.getElementById("pdf-img").style.width = "35vw";
        document.getElementById("pdf-img").style.height = "110vw";
        document.getElementById("download-btn").style.display = "none";
        document.getElementById("pdf-btn").innerHTML = "PDF einblenden";
        anzahlKlicks = 0;
        klicked = true;
    }
}
var anzahlKlicks = 0;
function plus(){
    anzahlKlicks++;
    klicksMessen();
}
function minus(){
        anzahlKlicks--;
        klicksMessen();
}

function klicksMessen() {
    if(document.getElementById("pdf-img").style.display == "flex") {
        switch(anzahlKlicks) {
            case -1:
                document.getElementById("pdf-img").style.width = "30vw";
                document.getElementById("pdf-img").style.height = "100vw";
                break;
            case 0:
                document.getElementById("pdf-img").style.width = "35vw";
                document.getElementById("pdf-img").style.height = "110vw";
                break;
            case 1:
                document.getElementById("pdf-img").style.width = "40vw";
                document.getElementById("pdf-img").style.height = "120vw";
                break;
            case 2:
                document.getElementById("pdf-img").style.width = "45vw";
                document.getElementById("pdf-img").style.height = "130vw";
                break;
            case 3:
                document.getElementById("pdf-img").style.width = "55vw";
                document.getElementById("pdf-img").style.height = "150vw";
                break;
            case 4:
                document.getElementById("pdf-img").style.width = "65vw";
                document.getElementById("pdf-img").style.height = "170vw";
                break;
            case 5:
                document.getElementById("pdf-img").style.width = "80vw";
                document.getElementById("pdf-img").style.height = "190vw";
                break;   
        }
        if (anzahlKlicks < -1){
            window.alert("Wie groß ist bitte dein Bildschirm???");
        }
        if (anzahlKlicks > 5){
            window.alert("Wie klein ist bitte dein Bildschirm???");
        }
    }
}

