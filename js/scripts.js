// Business logic

// Define/Initiate variables
var courses = []; 
var courseGradePoints= [];
var credits = [];
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
function calculateSemesterGPA(){
  var totalWeightedGPA = 0;
  var totalCredits = 0;
  
  $(courses).each(function(){
    totalWeightedGPA += (this.courseCredits * this.courseGrade) * 1 ;
    totalCredits += (this.courseCredits * 1);

    var semesterGPA = parseFloat((totalWeightedGPA / totalCredits).toFixed(2));
    console.log(semesterGPA);

  });

  courseGradePoints.push(totalWeightedGPA);
  console.log(courseGradePoints);
  credits.push(totalCredits);
  console.log(credits);
  // return semesterGPA;

}

// Create a function to calculate Cumulative GPA
function calculateCumulativeGPA(){

  var gradePointsEarned = 0;

  for(i=0;i < courseGradePoints.length;i++) {
    gradePointsEarned += courseGradePoints[i];
    console.log(gradePointsEarned);
  }

  var creditsEarned = 0;

  for(i=0;i < credits.length;i++) {
    creditsEarned += credits[i];
    console.log(creditsEarned);
  }

  var cumulativeGPA = parseFloat((gradePointsEarned / creditsEarned).toFixed(2));
  console.log(cumulativeGPA);

  var inputtedSemesterName = $("input#semester-name").val();
  var requiredGPA = parseFloat($("input#required-gpa").val());

  if(requiredGPA < cumulativeGPA)
  {
    var displayMessage = "Your Cumulative GPA is above the required GPA!"+
                         "Your chances of graduating/progressing to the next year are HIGH!!!!"+
                         " Keep it up!!";
  }
  else if (requiredGPA === cumulativeGPA)
  {
    var displayMessage = "Your Cumulative GPA is equal to the required GPA! "+
                         "You HAVE A CHANCE of graduating/progressing to the next year!!!"+
                         "There's always room for improvement!"+
                         "Let's put in threefold the effort and surpass the required GPA!!!!!";
                         
  }
  else if(requiredGPA > cumulativeGPA)
  {
    var displayMessage = "Your Cumulative GPA is below required GPA! "+
                         "Your chances of graduating/progressing to the next year are LOW!!!!"+
                         "Let's leave nothing to chance!!!"+
                         "Let's get up and running and increase that GPA!!!!!";
  }
  else 
  {
    return false;
  }
  
  var row = "<tr><th id='semester-name'>"+inputtedSemesterName+"</th><th id='current-cumualative-gpa'>"+cumulativeGPA+
            "</th><th id='display-message'>"+displayMessage+"</th></tr>";
    $("tbody#cumulative-gpa").append(row);
  // return cumulativeGPA;
}

$(document).ready(function(){
  // Remove course after clicking close button
  $(".remove").click(function(){
    $(this).closest(".course").hide();
  })
  // Add semester section after clicking 'Add semester' button
  $("#add-semester").click(function(){
  
    $(".remove").click(function(){
      $(this).closest(".course").hide();
    });

    calculateSemesterGPA();

  });

  // Reset entry fields
  $("#add-semester").click(function(){

    $("input#semester-name").val("");
    $("#gpaForm")[0].reset();

  });
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

  $("#calculate-gpa").click(function(){

    const inpObj = document.getElementById("gpaForm");
    if (!inpObj.checkValidity()) 
    {
      document.getElementById("course-name").innerHTML = inpObj.validationMessage;
    }

    event.preventDefault();
    
    $(".new-semester").each(function(){
      
      $(".course").each(function(){
        var inputtedCourseName = $(this).find("input#course-name").val();
        var inputtedCourseCredit = parseFloat($(this).find("input#course-credits").val());
        var selectedGradePoint = parseFloat($(this).find("select option:selected").val());
        var inputtedCourse = new Course(inputtedCourseName,inputtedCourseCredit,selectedGradePoint);
      
        courses.push(inputtedCourse);
  
      });
  
      calculateSemesterGPA();

    });

    calculateCumulativeGPA();

  });
});