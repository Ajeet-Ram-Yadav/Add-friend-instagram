 var isstatus = document.querySelector("h5")
 
 var addfriend = document.querySelector("#add")
 var check = 0

 addfriend.addEventListener("click",function(){
    if(check == 0){
        isstatus.innerHTML="Friends"
        isstatus.style.color="green"
        addfriend.innerHTML="Remove Friend"
        check = 1
    } 
    else{
        isstatus.innerHTML="Stranger"
        isstatus.style.color="red"
        addfriend.innerHTML="Add Friend"
        check = 0
    }
 })