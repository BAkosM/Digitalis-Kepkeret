(()=>{"use strict";function e(){let e=document.getElementById("KUrl").value,t=parseFloat(document.getElementById("KWith").value)+"px",d=parseFloat(document.getElementById("KBorder").value)+"px solid "+document.getElementById("KColor").value;document.getElementById("kep").src=e,document.getElementById("kep").style.width=t,document.getElementById("kep").style.border=d}var t=0;function d(){0==t?(t=1,document.getElementById("test").classList.add("dark-mode")):(t=0,document.getElementById("test").classList.remove("dark-mode"))}document.addEventListener("DOMContentLoaded",(function(){document.getElementById("gomb").addEventListener("click",e),document.getElementById("dark").addEventListener("click",d)}))})();