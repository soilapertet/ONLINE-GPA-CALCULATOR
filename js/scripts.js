// Business logic

// Define/Initiate variables
var courses = []; 
var totalWeightedGPA, totalCredits,semesterGPA,cumultativeGPA;

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
    totalWeightedGPA += this.courseCredits * this.courseGrade;
    totalCredits += (this.courseCredits * 1);

    var semesterGPA = (totalWeightedGPA / totalCredits).toFixed(2);
    console.log(semesterGPA);
  });
  return semesterGPA;
}

$(document).ready(function(){
  // Remove course after clicking close button
  $(".remove").click(function(){
    $(this).closest(".course").hide();
  })
  // Add semester section after clicking 'Add semester' button
  $("#add-semester").click(function(){
    $(".new-semester").append(
      '<br>'+
      '<div class="new-semester">'+
        '<div class="card">'+
          '<div class="card-header">'+
            '<div class="row">'+
              '<div class="col-md-12">'+
                '<h2><input class="border" type="text" placeholder="Semester e.g Fall 2021"></h2>'+
              '</div>'+
            '</div>' +
          '</div>'+
          '<div class="card-body">'+
            '<form action="calculate-gpa">'+
              '<div id="course-grades">'+
                '<div class="course" class="form-group">'+
                  '<div class="row">'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Name" id="course-name" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Credits" id="course-credits" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<select name="letter-grade" id="letter-grade" class="form-select" required>'+
                        '<option value="" hidden required>Letter Grade</option>'+
                        '<option value="4.0">A+</option>'+
                        '<option value="4.0">A</option>'+
                        '<option value="3.7">A-</option>'+
                        '<option value="3.3">B+</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">B-</option>'+
                        '<option value="2.3">C+</option>'+
                        '<option value="2.0">C</option>'+
                        '<option value="1.7">C-</option>'+
                        '<option value="1.3">D+</option>'+
                        '<option value="1.0">D</option>'+
                        '<option value="0.0">F</option>'+
                     ' </select>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<button type="button" class="remove" id="remove-course" aria-label="Remove Course">'+
                      '</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<br>'+
                '<div class="course" class="form-group">'+
                  '<div class="row">'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Name" id="course-name" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Credits" id="course-credits" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<select name="letter-grade" id="letter-grade" class="form-select" required>'+
                        '<option value="" hidden required>Letter Grade</option>'+
                        '<option value="4.0">A+</option>'+
                        '<option value="4.0">A</option>'+
                        '<option value="3.7">A-</option>'+
                        '<option value="3.3">B+</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">B-</option>'+
                        '<option value="2.3">C+</option>'+
                        '<option value="2.0">C</option>'+
                        '<option value="1.7">C-</option>'+
                        '<option value="1.3">D+</option>'+
                        '<option value="1.0">D</option>'+
                        '<option value="0.0">F</option>'+
                     ' </select>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<button type="button" class="remove" id="remove-course" aria-label="Remove Course">'+
                      '</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<br>'+
                '<div class="course" class="form-group">'+
                  '<div class="row">'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Name" id="course-name" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Credits" id="course-credits" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<select name="letter-grade" id="letter-grade" class="form-select" required>'+
                        '<option value="" hidden required>Letter Grade</option>'+
                        '<option value="4.0">A+</option>'+
                        '<option value="4.0">A</option>'+
                        '<option value="3.7">A-</option>'+
                        '<option value="3.3">B+</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">B-</option>'+
                        '<option value="2.3">C+</option>'+
                        '<option value="2.0">C</option>'+
                        '<option value="1.7">C-</option>'+
                        '<option value="1.3">D+</option>'+
                        '<option value="1.0">D</option>'+
                        '<option value="0.0">F</option>'+
                     ' </select>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<button type="button" class="remove" id="remove-course" aria-label="Remove Course">'+
                      '</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<br>'+
                '<div class="course" class="form-group">'+
                  '<div class="row">'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Name" id="course-name" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Credits" id="course-credits" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<select name="letter-grade" id="letter-grade" class="form-select" required>'+
                        '<option value="" hidden required>Letter Grade</option>'+
                        '<option value="4.0">A+</option>'+
                        '<option value="4.0">A</option>'+
                        '<option value="3.7">A-</option>'+
                        '<option value="3.3">B+</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">B-</option>'+
                        '<option value="2.3">C+</option>'+
                        '<option value="2.0">C</option>'+
                        '<option value="1.7">C-</option>'+
                        '<option value="1.3">D+</option>'+
                        '<option value="1.0">D</option>'+
                        '<option value="0.0">F</option>'+
                     ' </select>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<button type="button" class="remove" id="remove-course" aria-label="Remove Course">'+
                      '</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<br>'+
                '<div class="course" class="form-group">'+
                  '<div class="row">'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Name" id="course-name" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-4">'+
                      '<input type="text" placeholder="Course Credits" id="course-credits" class="form-control" required>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<select name="letter-grade" id="letter-grade" class="form-select" required>'+
                        '<option value="" hidden required>Letter Grade</option>'+
                        '<option value="4.0">A+</option>'+
                        '<option value="4.0">A</option>'+
                        '<option value="3.7">A-</option>'+
                        '<option value="3.3">B+</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">B-</option>'+
                        '<option value="2.3">C+</option>'+
                        '<option value="2.0">C</option>'+
                        '<option value="1.7">C-</option>'+
                        '<option value="1.3">D+</option>'+
                        '<option value="1.0">D</option>'+
                        '<option value="0.0">F</option>'+
                     ' </select>'+
                    '</div>'+
                    '<div class="col-md-2">'+
                      '<button type="button" class="remove" id="remove-course" aria-label="Remove Course">'+
                      '</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<br>'+
              '<button class="button-17" id="calculate">Calculate GPA</button>'+
            '</form>'+
         '</div>'+
        '</div>'+
      '</div>'      
    );
    $(".remove").click(function(){
      $(this).closest(".course").hide();
    });
  });
  $("#calculate").click(function(){
    event.preventDefault();
    $(".course").each(function(){
      var inputtedCourseName = $(this).find("input#course-name").val();
      var inputtedCourseCredit = parseFloat($(this).find("input#course-credits").val());
      var selectedGradePoint = parseFloat($(this).find("select option:selected").val());
      var inputtedCourse = new Course(inputtedCourseName,inputtedCourseCredit,selectedGradePoint);
    
      courses.push(inputtedCourse);
    });
    

    calculateSemesterGPA();
  })
});