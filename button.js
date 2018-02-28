function addClickHandler(){
  let button =document.getElementById("btn");
  button.addEventListener("click", ()=>{
    button.style.visibility = "hidden";
    setTimeout(() => {button.style.visibility="visible"}, 1000);
  })

}
