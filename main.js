function alerte(){
  alert("Hey what you do expect ?");
  return false
}

function rotateCmd() {
  var img = document.getElementById("rotate");
  var t = img.style.transform.match(/(\d+)/g) || [0];
  val = ( t[0] *1 +1) % 360 * ( Number(sens) * 2 -1 );
  img.style.transform = 'rotate(' +val +'deg)'

  if (val == 359 || val == -359) {
    clearInterval(interv);
    delete(interv);
    val = 0;
  }
}

function rotate() 
{
  if (typeof interv == "undefined") {
    sens =! sens;
    interv = setInterval(rotateCmd, 5)
  }
}

function next(){
if (n < 2500) {
  n = n * 1.25;
}
document.images[X].style.display = "none" ;
if ( X < Xm )
  X++;
else
  X=0;
document.images[X].style.display = "initial";
setTimeout(next, n) ;
}

//document.onmousedown=alerte; 
//document.oncontextmenu =alerte;
//document.onselectstart=alerte;
var sens = false;
Xm = 3 ;
X = 0 ;
var n = 25;
setTimeout(next, 460) ;