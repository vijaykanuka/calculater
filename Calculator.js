
let buttons=document.querySelectorAll(".button");
let input=document.querySelector("#input");
let trim=document.querySelector(".trim");


let output="";

for (const button  of buttons ) {
 

     if(button.classList.value=="ans button"){
      button.addEventListener("click",()=>{
           //geting input from buttons
           try{
               let  temp= input.innerHTML;
              input.value=`${eval(temp)}`

              output=input.value;
           }
           catch{
            output="ERROR";
           }
        })
     }

     if (button.id=="clear") {
      button.addEventListener("click",()=>{


        output="";
      input.innerHTML="0 ";
    
    })
     } 
     
     else {
      //button to give input
      button.addEventListener("click",()=>{
        let r=button.id;
           output=output+r;
     input.innerHTML=`${output}`
 
     })
     }

 
}
trim.addEventListener("click",()=>{
let d=output.slice(0,-1)
console.log(ouput)
 output.innerHTML=d

})







