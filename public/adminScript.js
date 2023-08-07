function doSubmit(){
 let submitData={}

  submitData.email=document.getElementById("email").value
  submitData.password=document.getElementById("password").value
 
  fetch('/admin',{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(submitData)
}).then((response)=>response.json())
 .then((data)=>{
    window.location.href='/'

})
}