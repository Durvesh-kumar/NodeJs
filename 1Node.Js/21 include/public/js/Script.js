const buttons = document.querySelectorAll("button")

for(let button of buttons){
    button.addEventListener("click", ()=>{
        console.log("Thank you for ckick me");
    })
}