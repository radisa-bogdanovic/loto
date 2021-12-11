`use strict`
let niz=[]; //
let glavniDiv=document.querySelector('.glavni-div');
let divScore= document.querySelector('.divScore');
let brojac= 0;

let textCounter=document.querySelector('.counter');
textCounter.textContent=`Izabrani brojevi: ${brojac}/7`;
let divText= document.querySelector('.divText');
let h1= document.createElement('h1');
let listHistory= document.getElementById('history')
let valuebr='';
let reloadBtn= document.querySelector('.reload');
let tittle=document.querySelector(`.Title`);
let selectedNumbers=[];
do{
  let number= Math.floor(Math.random() * 40 + 1);
  if(!selectedNumbers.includes(number)){
   selectedNumbers.push(number)
  }
}while(selectedNumbers.length<7)

 let button=""
 let nizbuton=[]
 for(i=1;i<41;i++)
 {
  nizbuton.push(button[i]=document.querySelector(`.button${i}`)) ;
}
 let buttton="";
 let nizbutton=[];
 let nizFunction=[];
 let nizFunction1=[]
for(i=0;i<41;i++)
{
 nizbutton.push(buttton[i]=document.createElement('button')) ;
}
  function onclick(b2, x)
  { 
    if(!(niz.includes(x))){
      niz.push(x);
      b2.classList.add('clonebuttons');
      b2.textContent = x;
      divScore.appendChild(b2);   
          brojac++;
    }
    if(niz.length==7){
       let counter = 0;
       
      for(i=0; i<selectedNumbers.length;i++)
      {
        if(niz.includes(selectedNumbers[i]))
        {
          counter++;
        }
      }
      switch (counter) {
        case 1: valuebr = `imali ste jedan pogodak`;
          break;
        case 2: valuebr = `imali ste dva pogodka`;
          break;
        case 3: valuebr = `imali ste tri pogodka`;
          break;
        case 4: valuebr = 'imali ste cetiri pogodka';
          break;
        case 5: valuebr = `imali ste pet pogodaka`;
          break;
        case 6: valuebr = `imali ste sest pogodaka`;
          break;
        case 7: valuebr = 'Bravo, BINGO!!! Osvojili ste 7 miliona eura :D ';
          break;
          default: valuebr= 'zao mi je, niste imali ni jedan pogodak '
      }
      divText.appendChild(h1);
      h1.textContent= `Izvuceni brojevi su ${selectedNumbers.join()} i ${valuebr}!`
      glavniDiv.remove();
      localStorage.setItem(localStorage.length+1, `Vasi brojevi su: ${niz} a  ${valuebr} `);
        for( let i=0;i<40;i++){
          nizbutton+=nizbutton[i].onclick=null;
          tittle.remove();
         
        }
        
      
      }}
function onclick1(b2,x)
{
  b2.remove();
  niz = niz.filter(function(item) {
    return item !== x;})
  }
for( let i=0;i<40;i++){
  nizFunction.push( nizbutton[i].addEventListener("click", function() {
   onclick1(nizbutton[i], (i+1))
   nizbuton[i].style.background='blue';
   brojac--;
   textCounter.textContent=`Izabrani brojevi: ${brojac}/7`
  }) ) }
  for( let i=0;i<40;i++){
    nizFunction1.push( nizbuton[i].addEventListener("click", function() {
     onclick(nizbutton[i], (i+1))
     nizbuton[i].style.background ='red';
     textCounter.textContent=`Izabrani brojevi: ${brojac}/7`
    }) ) }
    
 ///
 // Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
reloadBtn.onclick=function(){
  location.reload();
}
for (let j=0; j<localStorage.length; j++){
  Object.keys(localStorage).sort(function(a,b){
    return localStorage[1]-localStorage[2]
  })
    document.getElementById(`history`).innerHTML+= `Pokusaj broj ${(j+1)} : ${localStorage[(j+1)]} <br /> <br />`; 
}