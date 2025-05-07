// Study Planner App

function addStudyPlan(subject, hours) {
    return { subject, hours };
  }
  

  function calculateTotalHours(plans) {
    let totalHours = 0;
    plans.forEach(plan => {
      totalHours += plan.hours;
    });
    return totalHours;
  }
  
  function suggestFocusSubjects(plans) {
    let focusSubjects = [];
    plans.forEach(plan => {
      if (plan.hours >= 3) { 
        focusSubjects.push(plan.subject);
      }
    });
    return focusSubjects;
  }
  

  function resetStudyPlan() {
    return [];
  }
  

  let studyPlans = [];
  studyPlans.push(addStudyPlan('Math', 4));
  studyPlans.push(addStudyPlan('History', 2));
  studyPlans.push(addStudyPlan('Physics', 3));
  
  console.log("Total study hours: ", calculateTotalHours(studyPlans));
  console.log("Subjects to focus on: ", suggestFocusSubjects(studyPlans));
  studyPlans = resetStudyPlan();
  console.log("Study plan after reset: ", studyPlans);
  