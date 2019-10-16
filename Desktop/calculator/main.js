const text=document.getElementById("text");
const but1=document.getElementById("but1");
const but2=document.getElementById("but2");
const but3=document.getElementById("but3");
const but4=document.getElementById("but4");
const but5=document.getElementById("but5");
const but6=document.getElementById("but6");
const but7=document.getElementById("but7");
const but8=document.getElementById("but8");
const but9=document.getElementById("but9");
const but0=document.getElementById("but0");
const butCE=document.getElementById("butCE");
const butp=document.getElementById("butp");
const butm=document.getElementById("butm");
const butx=document.getElementById("butx");
const butdi=document.getElementById("butdi");
const butback=document.getElementById("butback");
let a="";
let b="";
let c;
let s=0;
function input(x){
    if(s==0){a+=x;
        text.innerHTML=a;}
        else{
            b+=x;
        text.innerHTML=b;
        }
}
butCE.onclick=()=>{
    a="";
    b="";
    s=0;
    text.innerHTML=a;
}
butm.onclick=()=>{
    s=1;
    c="-";
    text.innerHTML=c;
}
butp.onclick=()=>{
    s=1;
    c="+";
    text.innerHTML=c;
}
butx.onclick=()=>{
    s=1;
    c="*";
    text.innerHTML="x";
}
butdi.onclick=()=>{
    s=1;
    c="/";
    text.innerHTML="/";
}
butback.onclick=function(){

    if(s==1){b=b.slice(0, b.length - 1); 
    text.innerHTML=b;}
    else{
        a=a.slice(0, a.length - 1); 
        text.innerHTML=a;  
    }

}
function solve(a,b,c){
    a=parseInt(a);
    c=parseInt(c);
if(b.charCodeAt(0)==45){
    return a-c;
}
if(b.charCodeAt(0)==43){
    return a+c;
}
if(b.charCodeAt(0)==42){
    return a*c;
}
if(b.charCodeAt(0)==47){
    return a/c;
}
}
bute.onclick=()=>{
    let f=solve(a,c,b);
    text.innerHTML=f;
      }

      but1.addEventListener("click", ()=>{
          input(1);
      });
      but2.addEventListener("click", ()=>{
          input(2);
      });
      but3.addEventListener("click", ()=>{
          input(3);
      });
      but5.addEventListener("click", ()=>{
          input(5);
      });
      but4.addEventListener("click", ()=>{
          input(4);
      });
      but6.addEventListener("click", ()=>{
          input(6);
      });
      but7.addEventListener("click", ()=>{
          input(7);
      });
      but8.addEventListener("click", ()=>{
          input(8);
      });
      but9.addEventListener("click", ()=>{
          input(9);
      });
      but0.addEventListener("click", ()=>{
          input(0);
      });