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
    window.location.href='/upload'

})
}

// adminScript

const showImages =()=>{
    const images=document.getElementById('imageInput')
    const imagePreview=document.getElementById('imagePreview')
    const selectedImage=images.files
    alert("jkshksajs")
    for (let i = 0; i < selectedImage.length; i++) {
        const image=document.createElement('image')
        image.src=URL.createObjectURL(selectedImage[i])
        image.style.width="150px";
        image.style.margin="3px";
        imagePreview.appendChild(image)
    }
}