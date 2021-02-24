var s = "";
var sc = document.getElementById("scr");
function clicked(c){
    s+=c;
    sc.innerHTML=s;
    console.log(sc.innerHTML)
}
function equalto(){
    s=eval(s);
    sc.innerHTML=s;
}
function clearsc(){
    s="";
    sc.innerHTML=s;
}
