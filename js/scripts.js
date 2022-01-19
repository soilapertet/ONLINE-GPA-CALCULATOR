$(document).ready(function(){
  // Remove course after clicking close button
  $(".remove").click(function(){
    $(this).closest(".course-grade").hide();
  })
  // Add semester section after clicking 'Add semester' button
  $("#add-semester").click(function(){
    $("#semesters").append(
      '<br>'+
      '<div id="new-semester">'+
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
                '<div class="course-grade" class="form-group">'+
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
                        '<option value="3.7">B+</option>'+
                        '<option value="3.3">B</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">C+</option>'+
                        '<option value="2.3">C</option>'+
                        '<option value="2.0">C-</option>'+
                        '<option value="1.7">D+</option>'+
                        '<option value="1.3">D</option>'+
                        '<option value="1.0">D-</option>'+
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
                '<div class="course-grade" class="form-group">'+
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
                        '<option value="3.7">B+</option>'+
                        '<option value="3.3">B</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">C+</option>'+
                        '<option value="2.3">C</option>'+
                        '<option value="2.0">C-</option>'+
                        '<option value="1.7">D+</option>'+
                        '<option value="1.3">D</option>'+
                        '<option value="1.0">D-</option>'+
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
                '<div class="course-grade" class="form-group">'+
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
                        '<option value="3.7">B+</option>'+
                        '<option value="3.3">B</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">C+</option>'+
                        '<option value="2.3">C</option>'+
                        '<option value="2.0">C-</option>'+
                        '<option value="1.7">D+</option>'+
                        '<option value="1.3">D</option>'+
                        '<option value="1.0">D-</option>'+
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
                '<div class="course-grade" class="form-group">'+
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
                        '<option value="3.7">B+</option>'+
                        '<option value="3.3">B</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">C+</option>'+
                        '<option value="2.3">C</option>'+
                        '<option value="2.0">C-</option>'+
                        '<option value="1.7">D+</option>'+
                        '<option value="1.3">D</option>'+
                        '<option value="1.0">D-</option>'+
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
                '<div class="course-grade" class="form-group">'+
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
                        '<option value="3.7">B+</option>'+
                        '<option value="3.3">B</option>'+
                        '<option value="3.0">B-</option>'+
                        '<option value="2.7">C+</option>'+
                        '<option value="2.3">C</option>'+
                        '<option value="2.0">C-</option>'+
                        '<option value="1.7">D+</option>'+
                        '<option value="1.3">D</option>'+
                        '<option value="1.0">D-</option>'+
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
      $(this).closest(".course-grade").hide();
    })
  });
});