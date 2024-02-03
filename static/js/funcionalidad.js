let legend= document.querySelectorAll(".legenddd");
//------------------------------------------------------------------
let ubicar1= document.querySelector(".ubicar");
let ubicar2= document.querySelector(".ubicar2");
let ubicar3= document.querySelector(".ubicar3");
let ubicar4= document.querySelector(".ubicar4");
let ubicar5= document.querySelector(".ubicar5");
let ubicar6= document.querySelector(".ubicar6");
/////////////////////////////////////////////////////////
legend.forEach((elemento,index)=>{
elemento.addEventListener("click",(e)=>{
  elemento.classList.toggle("color");

  if(e.target.id=="legend"){
    ubicar1.classList.toggle("reducir_aumentar");
  }else if(e.target.id=="legend2"){
    ubicar2.classList.toggle("reducir_aumentar");
  }else if(e.target.id=="legend3"){
    ubicar3.classList.toggle("reducir_aumentar");
  }else if(e.target.id=="legend4"){
    ubicar4.classList.toggle("reducir_aumentar");
  }else if(e.target.id=="legend5"){
    ubicar5.classList.toggle("reducir_aumentar");
  }else{
    ubicar6.classList.toggle("reducir_aumentar");
  }  
})
})
  //toggle
    //----------------------------------------------------
  //***********************************************************