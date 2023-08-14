
function doSignup(){
  let signData={}
  
signData.Name=document.getElementById("Name").value
signData.Email=document.getElementById("Email").value
signData.Password=document.getElementById("Password").value
signData.confirmPassword=document.getElementById("confirmPassword").value

fetch('/register',{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(signData)
}).then((response)=>response.json())
 .then((data)=>{
    window.location.href='/'
    console.log(data.signup);
})

}
function doLogin(){
    let loginData={}
    loginData.email=document.getElementById('email').value
    loginData.password=document.getElementById('password').value
    
console.log(loginData);

fetch('/login',{

    method:"post",
    headers:{ 
         "Content-Type":"application/json"
    },
      body:JSON.stringify(loginData)
}).then((response)=>response.json())

 .then(data=>{
    location.assign('/home')
   
    if(data.login){

    }else{
        document.getElementById('warning').innerHTML="invalid input"
    setTimeout(()=>{
        document.getElementById('warning').innerHTML=""
    },2000)    
    }

})
}

function validateName(){
    let text =document.getElementById("Name").value
    regex=/^[a-zA-Z]+$/
if(regex.test(text)){
    document.getElementById('warning').innerHTML="success"
    document.getElementById('warning').style.color="green"
}else{
    document.getElementById('warning').innerHTML="success"
    document.getElementById('warning').style.color="red"
}
}
function validateEmail(){
    let text =document.getElementById("Email").value
    regex=/^([a-zA-Z0-9_)]+)@([a-zA-Z0-9_-]{2,9})([a-z]{2,6})$/
if(regex.test(text)){
    document.getElementById('warningEmail').innerHTML=""
    document.getElementById('warningEmail').style.color="green"
}else{
    document.getElementById('warningEmail').innerHTML="success"
    document.getElementById('warningEmail').style.color="red"
}
}
