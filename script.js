var user=document.getElementById("username");
var pass=document.getElementById("password");
function login(){
    if(user.value.length >4){
        if( pass.value.length >8 && pass.value.length <12 ){
        document.getElementById("case").innerText="Hello "+ user.value + "SUCCESSFULLY LOGGEDIN"
        console.log("working")
        }
    }
    else if(user.value.includes("") || pass.value.includes("")){
        user.style.borderColor="red"
        pass.style.borderColor="red"
        document.getElementById("case").innerHTML="incorrecr username or password.Please try again"
        document.getElementById("case").style.marginBottom="0px";

        console.log("working3")


    }
    else{
        user.style.borderColor="red"
        pass.style.borderColor="red"
        document.getElementById("case").innerHTML="incorrecr username or password.Please try again"
        document.getElementById("case").style.marginBottom="0px";
        console.log("working2")
    } 
    console.log("not")

}
   
