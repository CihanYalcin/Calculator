function bolme(x,y){return x/y};
function carpma(x,y){return x*y};
function toplama(x,y){return x+y};
function cıkarma(x,y){return x-y};

const numberOfIslem=document.querySelectorAll(".islem").length;
const numberOfButtons=document.querySelectorAll(".number").length;
const sayilar=[];
const rakamlar=[];
let islem="";
let sonsayi=""
const islemEkranı=document.getElementById("sonuc");
let ilkislem=true;

document.querySelector(".delete").addEventListener("click",function(){sayilar.length=0;rakamlar.length=0;
  islemEkranı.innerHTML="0";ilkislem=true});

  
document.querySelector(".delast").addEventListener("click",function(){
  if((sayilar.length)>1){
  sayilar.length=(sayilar.length-1);
  islemEkranı.innerHTML=sayilar[sayilar.length-1];
  rakamlar.length=0
 ;
}  else{islemEkranı.innerHTML=sayilar[sayilar.length-1];rakamlar.length=0;
 };});



for (var i=0; i<numberOfButtons; i++){
    let text=document.querySelectorAll(".number")[i].innerHTML;
    document.querySelectorAll(".number")[i].addEventListener("click", function(){
    rakamlar.push(Number(text));
    document.getElementById("sonuc").innerHTML=rakamlar.join("");
    });}


document.querySelector(".virgül").addEventListener("click",function(){

  rakamlar.push(".");
});


    document.querySelector(".esit").addEventListener("click", function() {
      sayilar.push(Number(rakamlar.join("")));
      esittir(sayilar[0],sayilar[1],islem);
      rakamlar.length=0;
      sayilar.length=0;
      sayilar.push(sonsayi);
      ilkislem=false;

    });



    for (var i=0; i<numberOfIslem; i++){
      let text2=document.querySelectorAll(".islem")[i].innerHTML;
      
        document.querySelectorAll(".islem")[i].addEventListener("click", function(){ 
         
       if (ilkislem) {let sonrakam=Number(rakamlar.join(""));
          sayilar.push(sonrakam);
          }else{
            sayilar.push(Number(rakamlar.join("")));
            esittir(sayilar[0],sayilar[1],islem);
            rakamlar.length=0;
            sayilar.length=0;
            sayilar.push(sonsayi);
            ilkislem=false;

          } ;
          rakamlar.length=0;
             islem=text2
         ilkislem=false;
        });}


    
    function esittir(x,y,z)  {
        if (z==="X"){islemEkranı.innerHTML=carpma(sayilar[0], sayilar[1]); sonsayi=carpma(sayilar[0], sayilar[1]);
        } else if (z==="/"){islemEkranı.innerHTML=bolme(sayilar[0],sayilar[1]);sonsayi=bolme(sayilar[0],sayilar[1]);
        }else if(z==="+"){islemEkranı.innerHTML=toplama(sayilar[0],sayilar[1]);sonsayi=toplama(sayilar[0],sayilar[1]);
        }else if(z==="-"){islemEkranı.innerHTML=cıkarma(sayilar[0],sayilar[1]); sonsayi=cıkarma(sayilar[0],sayilar[1]);
      }};

