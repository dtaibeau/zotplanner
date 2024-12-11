// Object to hold courses assigned to terms
const coursePlan = {
  Fall: [],
  Winter: [],
  Spring: [],
  Summer: [],
};

// Function to assign a course to a term
function assignCourseToTerm(term, courseCode) {
  if (!coursePlan[term].includes(courseCode)) {
    coursePlan[term].push(courseCode);
    updateCoursePlanUI();
  } else {
    alert(`${courseCode} is already assigned to ${term}.`);
  }
}

// Function to update the course plan UI
function updateCoursePlanUI() {
  Object.keys(coursePlan).forEach(term => {
    const termElement = document.getElementById(`${term.toLowerCase()}-courses`);
    termElement.innerHTML = coursePlan[term].join(", ");
  });
}

// Save the course plan to localStorage
function saveCoursePlan() {
  localStorage.setItem("coursePlan", JSON.stringify(coursePlan));
  alert("Course plan saved!");
}

// Load the course plan from localStorage
function loadCoursePlan() {
  const savedPlan = localStorage.getItem("coursePlan");
  if (savedPlan) {
    Object.assign(coursePlan, JSON.parse(savedPlan)); // Merge saved plan into coursePlan
    updateCoursePlanUI();
    alert("Course plan loaded!");
  } else {
    alert("No saved course plan found.");
  }
}

// Event listener for the "Assign" button
document.getElementById("assign-course-button").addEventListener("click", () => {
  const term = document.getElementById("term-select").value;
  const courseCode = document.getElementById("assign-course-input").value.trim();

  if (courseCode) {
    assignCourseToTerm(term, courseCode.toUpperCase());
    document.getElementById("assign-course-input").value = ""; // Clear input
  } else {
    alert("Please enter a course code.");
  }
});

// Event listeners for Save and Load buttons
document.getElementById("save-plan-button").addEventListener("click", saveCoursePlan);
document.getElementById("load-plan-button").addEventListener("click", loadCoursePlan);
