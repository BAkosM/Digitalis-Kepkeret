import './style.css';

function keretez() {
    //Test
    //console.log('katt');
    
    let Kurl = document.getElementById("KUrl").value;
    let meret = parseFloat(document.getElementById("KWith").value);
    let keret = parseFloat(document.getElementById("KBorder").value);
    let szin = document.getElementById("KColor").value;
    let szel = meret+"px"
    let border = keret+"px solid "+szin;

    document.getElementById("kep").src = Kurl;
    document.getElementById("kep").style.width =szel;
    document.getElementById("kep").style.border = border;
}
var onoff = 0;
function darkmode() {
    //Test
    //console.log('katt');
    if (onoff == 0) {
        onoff = 1;
        document.getElementById("test").classList.add("dark-mode");
    }else {
        onoff = 0;
        document.getElementById("test").classList.remove("dark-mode");
    }
}
function init(){
    document.getElementById("gomb").addEventListener('click', keretez);
    document.getElementById("dark").addEventListener('click', darkmode);
}
document.addEventListener("DOMContentLoaded",init);