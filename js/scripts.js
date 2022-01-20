//function for image upload
function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  };
};

$(document).ready(function () {

  $("#myBt").click(function () {
    $("p").show();
    $("#more").show();
    $("#dot").hide();
    $("#myBtn").show();
    $("#myBt").hide();
    $(".list").show();

  });
  $("#myBtn").click(function () {
    $("#more").hide();
    $("#dot").show();
    $("#myBt").show();
    $("#myBtn").hide();
    $(".list").hide();
  });
 

  $("#save").click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var level = $('#level').val();
    var institute = $('#institute').val();
    var experience = $('#experience').val();
    var residence = $('#residence').val();
    if (name == "") {
      alert("please Enter your name");
    } else if (phone == "") {
      alert("Please input your phone number");

    } else if (level == "") {
      alert("Please select your Level");
    } else if (institute == "") {
      alert("Please enter your institute"); 
    }else if (residence == "") {
      console.log("Please enter your residence"); 
    }
     else {
      return true;
    };
    $("#upName").html("Your Name:   " + name);
    $("#upPhone").html("Your Phone: " + phone);
    $("#uplevel").html("Study Level: " + level);
    $("#inst").html(" Institutution:" + institute);
    // $("#red").html("reside");
    $("#exp").html(" Experience:" + experience);
    document.getElementById("myForm").reset();
    $(".pic").hide();
    $("#tit").show();
  });

  


});