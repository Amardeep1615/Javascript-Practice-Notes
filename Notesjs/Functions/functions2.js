// Assignment Tracker App


function addAssignment(title, dueDate) {
    return { title, dueDate, isComplete: false };
  }
  
  
  function markComplete(assignments, title) {
    const assignment = assignments.find(a => a.title === title);
    if (assignment) {
      assignment.isComplete = true;
    }
  }
  
  //
  function getPendingAssignments(assignments) {
    return assignments.filter(a => !a.isComplete);
  }
  function getOverdueAssignments(assignments, currentDate) {
    return assignments.filter(a => !a.isComplete && new Date(a.dueDate) < new Date(currentDate));
  }

  let assignments = [];
  assignments.push(addAssignment('Math Homework', '2025-05-10'));
  assignments.push(addAssignment('History Essay', '2025-05-07'));
  
  markComplete(assignments, 'Math Homework');
  console.log("Pending Assignments: ", getPendingAssignments(assignments));
  console.log("Overdue Assignments: ", getOverdueAssignments(assignments, '2025-05-08'));
  