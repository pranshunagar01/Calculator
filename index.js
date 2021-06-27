
for(var i = 0; i < 18; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    if(this.innerText <= '9' && this.innerText >= '0'){
      document.querySelector(".display").innerText += this.innerText;
      document.querySelector(".display").style.color = "white";
      document.querySelector(".display").style.fontSize = "4rem";

    }
    else if(this.innerText == "+" && document.querySelector(".display").innerText <= 99999999){
        var num1 = document.querySelector(".display").innerText;
        document.querySelector(".display").innerText += "+";
        var func = add;

    }
})
}
