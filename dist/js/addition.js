
document.querySelector(".okno_chata").addEventListener("click", function(){
    document.querySelector(".chatopen").style.visibility = "hidden";
    document.querySelector(".chat_open_active").style.visibility = "visible";
})

document.querySelector(".download").addEventListener("click", function(){
    if(document.querySelector(".download_two_button").style.visibility == "visible"){
        document.querySelector(".download_two_button").style.visibility = "hidden";
    }  
    else{
        document.querySelector(".download_two_button").style.visibility = "visible";
    }
})








