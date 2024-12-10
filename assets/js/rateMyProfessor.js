// Fetch professor data from JSON
async function fetchProfessorData() {
    const response = await fetch("assets/data/professors.json");
    return await response.json();
}

// Function to search professor data
async function searchProfessor(name) {
    const resultsDiv = document.getElementById("professor-results");
    resultsDiv.innerHTML = ""; // Clear previous results

    const professorData = await fetchProfessorData();

    const professor = professorData.find(
        prof => prof.name.toLowerCase() === name.toLowerCase()
    );

    if (professor) {
        resultsDiv.innerHTML = `
            <p><strong>${professor.name}</strong></p>
            <p>Rating: ${professor.rating} / 5</p>
            <p>Reviews: ${professor.reviews} reviews</p>
            <a href="${professor.link}" target="_blank">View on Rate My Professor</a>
        `;
    } else {
        resultsDiv.innerHTML = `<p>No ratings found for Professor <strong>${name}</strong>.</p>`;
    }
}

// Add event listener to the search button
document.getElementById("search-professor").addEventListener("click", () => {
    const professorName = document.getElementById("professor-input").value.trim();
    if (professorName) {
        searchProfessor(professorName);
    } else {
        document.getElementById("professor-results").innerHTML =
            "<p>Please enter a professor's name.</p>";
    }
    document.getElementById("professor-results").addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            alert("If the Rate My Professors link does not work, the service might be temporarily unavailable.");
        }
    });
});
