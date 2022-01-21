// Business logic

// Define/Initiate variables
var courses = []; 
var totalWeightedGPA, totalCredits,semesterGPA,cumulativeGPA,gradePointsEarned,creditsEarned,requiredGPA;

// Create a 'Course' constructor function
function Course(course,credits,letterGrade){
  this.courseName = course;
  this.courseCredits = credits;
  this.courseGrade = letterGrade;
}

// Create a function to push course objects to the initialised empty array
function addCourse(){
  courses.push(new Course());
}
// Create a function to calculate the Semester GPA
function calculateCumulativeGPA(){
  var totalWeightedGPA = 0;
  var totalCredits = 0;
  
  $(courses).each(function(){

    totalWeightedGPA += (this.courseCredits * this.courseGrade) * 1 ;
    totalCredits += (this.courseCredits * 1);

  });

  var cumulativeGPA = parseFloat((totalWeightedGPA / totalCredits).toFixed(2));
  console.log(cumulativeGPA);

  var inputtedSemesterName = $("input#semester-name").val();
  var requiredGPA = parseFloat($("input#required-gpa").val());

  if(requiredGPA < cumulativeGPA)
  {
    var displayMessage = "Your Cumulative GPA is above the required GPA! "+
                         "Your chances of graduating/progressing to the next year are high."+
                         " Keep it up!!";
  }
  else if (requiredGPA === cumulativeGPA)
  {
    var displayMessage = "Your Cumulative GPA is equal to the required GPA! "+
                         "You have a chance of graduating/progressing to the next year. "+
                         "There's always room for improvement! "+
                         "Let's put in threefold the effort and surpass the required GPA!";
                         
  }
  else if(requiredGPA > cumulativeGPA)
  {
    var displayMessage = "Your Cumulative GPA is below the required GPA! "+
                         "Your chances of graduating/progressing to the next year are low."+
                         " Let's leave nothing to chance!"+
                         " Let's get up and running and increase that GPA!";
  }
  else 
  {
    return false;
  }
  
  var row = "<tr><th id='semester-name'>"+inputtedSemesterName+"</th><th id='current-cumualative-gpa'>"+cumulativeGPA+
            "</th><th id='display-message'>"+displayMessage+"</th></tr>";
    $("tbody#cumulative-gpa").append(row);

}
//Function for image upload
function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  };
};

// User Interface Logic

$(document).ready(function(){

  $("#add-course").click(function(){
    $("#course-grades").append(
      '<br>'+
      '<div class="course" class="form-group">'+
        '<div class="row">'+
          '<div class="col-md-5">'+
            '<input type="text" placeholder="Course Name" id="course-name" class="form-control" required/>'+
          '</div>'+
         ' <div class="col-md-5">'+
            '<input type="text" placeholder="Course Credits" id="course-credits" class="form-control" required/>'+
          '</div>'+
         ' <div class="col-md-2">'+
            '<select name="letter-grade" id="letter-grade" class="form-select" required/>'+
              '<option value="">Letter Grade</option>'+
              '<option value="4.0">A+</option>'+
              '<option value="4.0">A</option>'+
              '<option value="3.7">A-</option>'+
              '<option value="3.3">B+</option>'+
              '<option value="3.0">B</option>'+
              '<option value="2.7">B-</option>'+
              '<option value="2.3">C+</option>'+
              '<option value="2.0">C</option>'+
              '<option value="1.7">C-</option>'+
              '<option value="1.3">D+</option>'+
              '<option value="1.0">D</option>'+
              '<option value="0.0">F</option>'+
            '</select>'+
          '</div>'+
        '</div>'+
      '</div>'
    );
  });
  
  $("#gpaForm").submit(function(){

    event.preventDefault();

    $("#gpa-history").show();
    $(".new-semester").each(function(){
      
      $(".course").each(function(){
        var inputtedCourseName = $(this).find("input#course-name").val();
        var inputtedCourseCredit = parseFloat($(this).find("input#course-credits").val());
        var selectedGradePoint = parseFloat($(this).find("select option:selected").val());
        var inputtedCourse = new Course(inputtedCourseName,inputtedCourseCredit,selectedGradePoint);
      
        courses.push(inputtedCourse);
  
      });

      calculateCumulativeGPA();

    });
    var gpaLog = $('#gpa-history').offset().top;
    $("HTML,BODY").animate({scrollTop:gpaLog},400,function(){
   
      window.location.summaryPosition = gpaLog;
    });
  });

  // Reset entry fields
  $("#add-semester").click(function(){

    $("#gpa-history").hide();
    $("input#semester-name").val("");
    $("#gpaForm")[0].reset();

    var gpaPosition = $('#gpaForm').offset().top;
    $("HTML,BODY").animate({scrollTop:gpaPosition},400,function(){
   
      window.location.summaryPosition = gpaPosition;
    });

  });

  //Function for image upload
  // function showPreview(event) {
  //   if (event.target.files.length > 0) {
  //     var src = URL.createObjectURL(event.target.files[0]);
  //     var preview = document.getElementById("file-ip-1-preview");
  //     preview.src = src;
  //     preview.style.display = "block";
  //   };
  // };

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
 

  $("#myForm").submit(function (e) {
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

  $(".register").click(function(e) {
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var pass = $("#pass").val();
    var cpass = $("#cpass").val();
    if(name == "") {
      alert("Please enter a Username")
    }else if (email == "") {
      alert("Please enter email")
    }else if (pass == "") {
      alert("Please enter pass")
    }else if (cpass == "") {
      alert("PConfirm Password")
    }else{
      alert("Registered Successfully")
      window.location = "profile.html"; 
    }
    });

  $("#signin").click(function(e) {
    e.preventDefault();

    var name = $(".name").val();
    var pas = $("#pas").val();
    if(name == ""){
      alert("Please enter your Username")
    }else if (pas == ""){
      alert("Enter your Password")
    }else{
      alert("Login Successful")
      window.location = "profile.html"; 
    }
  });

  $(".help").click(function(e){
    e.preventDefault();

    $(".sign").show();
    $(".login").hide();
    $(".h-tag").hide();
    $(".help").hide();
  });
    
});

