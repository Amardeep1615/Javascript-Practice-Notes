// 1. Study Planner App


let studyPlans = [];

function addStudyPlan(subject, hours) {
    studyPlans.push({subject, hours});
    console.log(`Added: ${subject} - ${hours} hour(s)`);
}

function calculateTotalHours(plans) {
    const total = plans.reduce((sum, plan) => sum + plan.hours, 0);
    console.log(`Total Study Hours Planned: ${total}`);
    return total;
}
function suggestFocusSubjects(plans) {
    if (plans.length === 0) {
    console.log("No subjects planned yet!");
    return;
  }
  
  plans.sort((a, b) => b.hours - a.hours);
  const topSubjects = plans.slice(0, 2); // top 2 subjects
  
  console.log("Focus more on:");
  topSubjects.forEach(plan => {
    console.log(`- ${plan.subject} (${plan.hours} hours)`);
  });
}
function resetStudyPlan() {
    studyPlans = [];
    console.log("Study plan has been reset.");
  }