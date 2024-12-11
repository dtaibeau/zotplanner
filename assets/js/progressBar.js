const totalCourses = 40; // Total number of courses required to complete the degree
let completedCourses = 0; // Initial number of completed courses

function updateProgressTracker() {
  const progressPercentage = Math.round((completedCourses / totalCourses) * 100);
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-percentage");

  progressBar.style.width = `${progressPercentage}%`;
  progressText.textContent = `${progressPercentage}% Completed`;
}

// Example function to simulate completing a course
function completeCourse() {
  if (completedCourses < totalCourses) {
    completedCourses++;
    updateProgressTracker();
  } else {
    alert("All courses are already completed!");
  }
}

// Example function to simulate removing a completed course
function removeCompletedCourse() {
  if (completedCourses > 0) {
    completedCourses--;
    updateProgressTracker();
  } else {
    alert("No courses to remove!");
  }
}

// Initialize progress bar on page load
document.addEventListener("DOMContentLoaded", () => {
  updateProgressTracker();
});

document.getElementById("complete-course-button").addEventListener("click", completeCourse);
document.getElementById("remove-completed-course-button").addEventListener("click", removeCompletedCourse);
