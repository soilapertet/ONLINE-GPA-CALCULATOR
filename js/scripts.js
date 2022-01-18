
function validateForm() {
  var name= document.getElementById("name").value;
  var phone= document.getElementById("phone").value;
  if( name== ""){
      alert("Name required");
  }else if( phone ==""){
    alert("Phone required");
    
  }
  else{
    return true;
  }
}
//function for image upload
function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }
