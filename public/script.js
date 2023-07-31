
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
    console.log(data);

})
}
