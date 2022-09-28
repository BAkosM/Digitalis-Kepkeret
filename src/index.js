import './style.css';

function keretez() {
    //Test
    //console.log('katt');
    
    let url = document.getElementById("KUrl").value;
    let meret = parseFloat(document.getElementById("KWith").value);
    let keret = parseFloat(document.getElementById("KBorder").value);
    let szin = document.getElementById("KColor").value;
    let szel = meret+"px"
    let border = keret+"px solid "+szin;

    document.getElementById("kep").style.width =szel;
    document.getElementById("kep").style.border = border;
}
function init(){
    document.getElementById("gomb").addEventListener('click', keretez);
}
document.addEventListener("DOMContentLoaded",init);