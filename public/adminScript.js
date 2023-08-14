function doSubmit(){
 let submitData={}

  submitData.email=document.getElementById("email").value
  submitData.password=document.getElementById("password").value
 
  fetch('/home',{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(submitData)
}).then(response => response.json())
 .then(data=>{
     location.assign('/upload')
    console.log(data);

 })
}

// adminScript

const showImages =()=>{
    const images=document.getElementById('imageInput')
    const imagePreview=document.getElementById('imagePreview')
    document.getElementById('imagePreview').innerHTML=null
    const selectedImage=images.files
    for (let i = 0; i < selectedImage.length; i++) {
        const image=document.createElement('img')
        image.src=URL.createObjectURL(selectedImage[i])
        image.style.width="150px";
        image.style.margin="3px"
        imagePreview.appendChild(image)
    }
}