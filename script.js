var klicked = true;
function pdfanzeigen(){
    if(klicked) {
        document.getElementById("pdf-iframe").style.display = "flex";
        document.getElementById("pdf-btn").innerHTML = "PDF ausblenden";
        document.getElementById("download-btn").style.display = "flex";
        klicked = false;
    }
    else{
        document.getElementById("pdf-iframe").style.display = "none";
        document.getElementById("pdf-iframe").style.width = "35vw";
        document.getElementById("pdf-iframe").style.height = "50vw";
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
    if(document.getElementById("pdf-iframe").style.display == "flex") {
        switch(anzahlKlicks) {
            case -1:
                document.getElementById("pdf-iframe").style.width = "30vw";
                document.getElementById("pdf-iframe").style.height = "45vw";
                break;
            case 0:
                document.getElementById("pdf-iframe").style.width = "35vw";
                document.getElementById("pdf-iframe").style.height = "50vw";
                break;
            case 1:
                document.getElementById("pdf-iframe").style.width = "40vw";
                document.getElementById("pdf-iframe").style.height = "55vw";
                break;
            case 2:
                document.getElementById("pdf-iframe").style.width = "45vw";
                document.getElementById("pdf-iframe").style.height = "60vw";
                break;
            case 3:
                document.getElementById("pdf-iframe").style.width = "50vw";
                document.getElementById("pdf-iframe").style.height = "65vw";
                break;
            case 4:
                document.getElementById("pdf-iframe").style.width = "60vw";
                document.getElementById("pdf-iframe").style.height = "75vw";
                break;
            case 5:
                document.getElementById("pdf-iframe").style.width = "80vw";
                document.getElementById("pdf-iframe").style.height = "95vw";
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

