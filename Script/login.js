

let data=JSON.parse(localStorage.getItem("users")) ||[];


document.querySelector("form").addEventListener("submit", allData);

function allData(event){
    event.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;


    if (password == "") alert("Wrong credentials");
else if(email==""){
        alert("User doesn't exist, Sign Up");
}else{
       if(mailCheck(email,password)==false){
           alert("Login successful!");
           window.location.href = "index.html";
    }else{
           alert("Alredy Have an Account");
    }
   
}
}
let mailCheck=(mail,pass)=>{
    let f=data.filter((elem)=>{
        return mail===elem.email && pass==elem.password;
    });
    if(f.length>0) return true;
    else return false;
}