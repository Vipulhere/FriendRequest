// card 1
let checkStatus=document.querySelector("h4")
let addFriend=document.querySelector("#add")
let removeFriend=document.querySelector("#remove")

addFriend.addEventListener("click",function(){
    checkStatus.innerHTML="Friends";
    checkStatus.style.color="green";
})
removeFriend.addEventListener("click",function(){
    checkStatus.innerHTML="Stranger";
    checkStatus.style.color="red";
})

//card 2
let checkStatus1=document.querySelector("h5")
let btn=document.querySelector("#add1")
var check=0;

btn.addEventListener("click",function(){
    if(check===0){
        checkStatus1.innerHTML="Friends";
        checkStatus1.style.color="green";
        btn.innerHTML="No Friend"
        check=1
    }else{
        checkStatus1.innerHTML="Stranger";
        checkStatus1.style.color="red";
        btn.innerHTML="Add Friend"
        check=0
    }
})


