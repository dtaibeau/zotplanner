document.addEventListener("DOMContentLoaded", function () {
    // Fetch the course data from courses.json
    fetch("assets/data/courses.json")
      .then((response) => response.json())
      .then((data) => {
        const courses = data.courses;
        const searchButton = document.getElementById("courseSearchButton");
        const searchInput = document.getElementById("courseSearchInput");
        const resultsContainer = document.getElementById("courseResults");
  
        // Event listener for the search button
        searchButton.addEventListener("click", function () {
          const query = searchInput.value.toUpperCase(); // Convert to uppercase for consistency
          const filteredCourses = courses.filter((course) =>
            course.courseCode.includes(query) || course.courseTitle.toUpperCase().includes(query)
          );
  
          // Clear previous results
          resultsContainer.innerHTML = "";
  
          if (filteredCourses.length > 0) {
            // Display matching courses
            filteredCourses.forEach((course) => {
              const courseElement = document.createElement("div");
              courseElement.classList.add("course-item");
  
              courseElement.innerHTML = `
                <h4>${course.courseCode}: ${course.courseTitle}</h4>
                <p>${course.description}</p>
                <p><strong>Prerequisites:</strong> ${
                  course.prerequisites.length > 0
                    ? course.prerequisites.join(", ")
                    : "None"
                }</p>
              `;
              resultsContainer.appendChild(courseElement);
            });
          } else {
            // Display no results message
            const noResults = document.createElement("p");
            noResults.textContent = "No courses found. Try a different search.";
            resultsContainer.appendChild(noResults);
          }
        });
      })
      .catch((error) => console.error("Error fetching courses.json:", error));
  });
  