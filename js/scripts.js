// Business logic

// Define/Initiate variables
var courses = []; 
var courseGradePoints= [];
var credits = [];
var totalWeightedGPA, totalCredits,semesterGPA,cumultativeGPA,gradePointsEarned,creditsEarned;

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

// Create a function to calculate Cumultative GPA
function calculateCumultativeGPA(){

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

  var cumultativeGPA = parseFloat((gradePointsEarned / creditsEarned).toFixed(2));
  console.log(cumultativeGPA);

  var inputtedSemesterName = $("input#semester-name").val();

  var row = "<tr><th id='semester-name'>"+inputtedSemesterName+"</th><th id='current-cumualative-gpa'>"+cumultativeGPA+"</th></tr>";
    $("tbody#cumultative-gpa").append(row);
  // return cumultativeGPA;
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

    calculateCumultativeGPA();

  });
});