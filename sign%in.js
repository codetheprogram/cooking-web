function passReveal() {
 document.getElementById("showpass").addEventListener("mousedown",(togglePassword=>{document.getElementById("password").setAttribute("type","text");}),false);
	document.getElementById("showpass").addEventListener("mouseup", (togglePassword=>{
		document.getElementById("password").setAttribute("type","password");}),false);
}

function togglePassword(){
//    var passReveal= document.getElementById("showpass");
//    var prstatus=passReveal.checked;
    if(prstatus===false){
        document.getElementById("password").setAttribute("type","password");
    }else{
        document.getElementById("password").setAttribute("type","text");
    }
//    console.log(prstatus);
}
passReveal();

function validPassword (){
	 document.getElementById("login").addEventListener("click", (btnk)=>{
    var regd = document.getElementById("password").value;
if(regd.trim() === ""){
        document.getElementById("pass-inputs").setAttribute("class", "wrong");
        document.getElementById("IP").style="display: block;color: red;font-size: 20px;position: relative;top: 25px;left: 20px;";
}else{
            document.getElementById("pass-inputs").setAttribute("class", "correct");
            document.getElementById("IP").style="diplay: none;";
}
    },false);
};
validPassword();

function validateEmail(){
    document.getElementById("login").addEventListener("click",(btn)=>{
        
        var emailEntered=document.getElementById("username").value;
var reg=RegExp(/^[a-zA-Z]+([0-9]+)?@(gmail|yahoo|email})\.com$/);
         var valid=emailEntered.match(reg);
        var rst=valid instanceof Array;
         if(emailEntered.trim() === ""){
            document.getElementById("username").style="border:2px solid red";
            document.getElementById("IU").style="display: block;color: red;font-size: 20px;position: relative;";
         }else if(false===rst){
             document.getElementById("username").style="border:2px solid red";
             document.getElementById("IU").style="display: block;color: red;font-size: 20px;position: relative;";
//            document.getElementById("IU").textContent="Invalid Email !";
         }else{
             document.getElementById("username").style="border:2px solid green";
document.getElementById("IU").style="display: none;color: red;font-size: 20px;position: relative";
         }
        } , false);
};
validateEmail();