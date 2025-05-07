// Goal Tracker App


function addGoal(title, type, targetValue) {
    return { title, type, targetValue, currentValue: 0 };
  }

  function updateProgress(goal, value) {
    goal.currentValue += value;
  }
  
  
  function getProgress(goal) {
    return (goal.currentValue / goal.targetValue) * 100;
  }
  

  function checkStatusAndMotivate(goal) {
    const progress = getProgress(goal);
    if (progress < 50) {
      return "You're doing great, keep going!";
    } else if (progress < 100) {
      return "You're almost there!";
    } else {
      return "Goal achieved! Congratulations!";
    }
  }
  
  let goal = addGoal('Complete Project', 'Academic', 100);
  updateProgress(goal, 30);
  console.log("Progress: ", getProgress(goal), "%");
  console.log(checkStatusAndMotivate(goal));
  