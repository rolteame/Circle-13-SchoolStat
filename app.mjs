import {instructors, students} from "./data.mjs";
function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
  let numberOfInstructors = document.getElementById('instructorsNumber');
  let instructorNumbers = instructors.length;
  numberOfInstructors.innerText = instructorNumbers;
  
  let numberOfStudents = document.getElementById('studentsNumber');
  let studentNumbers = students.length;
  numberOfStudents.innerText = studentNumbers;
  
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //