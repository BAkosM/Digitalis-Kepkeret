import './style.css';
function kurl() {
    let Kurl = document.getElementById("KUrl").value;
    document.getElementById("kep").src = Kurl;
}
function szel() {
    let meret = parseFloat(document.getElementById("KWith").value);
    let szel = meret+"px";
    document.getElementById("kep").style.width =szel;
}
function keret() {
    let keret = parseFloat(document.getElementById("KBorder").value);
    let szin = document.getElementById("KColor").value;
    let border = keret+"px solid "+szin;    
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
    document.getElementById("KUrl").addEventListener('input', kurl);
    document.getElementById("KWith").addEventListener('change', szel);
    document.getElementById("KBorder").addEventListener('change', keret);
    document.getElementById("KColor").addEventListener('change', keret);
    document.getElementById("dark").addEventListener('click', darkmode);
}
document.addEventListener("DOMContentLoaded",init);