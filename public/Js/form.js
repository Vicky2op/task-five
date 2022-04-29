window.onload=function(){


//  Adding on click event to add varitaion btn
const btnForVariation = document.getElementById("addVariation")
if(btnForVariation){
  btnForVariation.addEventListener('click',AddVariation)
}

// Show Image on upload

const defaultBtn = document.querySelector("#productImg");
const img = document.getElementById("imageHere");
const imageUrl = document.getElementById('imageUrl');
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive(){
  }
  if(defaultBtn){
    //Creating a url of uploaded image
    defaultBtn.addEventListener("change", function(){
      const file = this.files[0];
      if(file){
        const reader = new FileReader();
        reader.onload = function(){
          img.style.display="block";
          const result = reader.result;
          img.src = result;                           
          imageUrl.value = result;  
        }
        reader.readAsDataURL(file);
      }
      if(this.value){
        let valueStore = this.value.match(regExp);  
      }
    });
  }
}