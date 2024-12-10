// Fetch the courses data from courses.json
async function fetchCourses() {
  const response = await fetch("assets/data/courses.json");
  const data = await response.json();
  return data.courses;
}

// Function to find prerequisites
async function findPrerequisites(courseCode) {
  const courses = await fetchCourses();
  const course = courses.find(c => c.courseCode === courseCode.toUpperCase());

  const resultsDiv = document.getElementById("prerequisite-results");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (course) {
    if (course.prerequisites.length > 0) {
      const prerequisitesList = course.prerequisites.join(", ");
      resultsDiv.innerHTML = `<p><strong>Prerequisites for ${courseCode}:</strong> ${prerequisitesList}</p>`;
    } else {
      resultsDiv.innerHTML = `<p><strong>${courseCode}</strong> has no prerequisites.</p>`;
    }
  } else {
    resultsDiv.innerHTML = `<p>Course <strong>${courseCode}</strong> not found.</p>`;
  }
}

// Add event listener to the button
document.getElementById("check-prerequisites").addEventListener("click", () => {
  const courseCode = document.getElementById("course-input").value.trim();
  if (courseCode) {
    findPrerequisites(courseCode);
  } else {
    document.getElementById("prerequisite-results").innerHTML = "<p>Please enter a course code.</p>";
  }
});

