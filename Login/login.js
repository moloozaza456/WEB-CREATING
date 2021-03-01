
var submit=document.getElementById("submit");
submit.onclick = function(){
    document.getElementById("h2").innerHTML ="test";
    if(document.getElementById("user").value=="admin"){
        if(document.getElementById("password").value=="1234"){
            console.log("ถูกต้อง");
            window.location.href = "../index/index.html"
        }
        else{
            document.getElementById("h2").innerHTML ="Password incorrect";
        }
    }
    else{

    }
};
