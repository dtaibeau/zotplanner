// PSEUDOCODE

// Handles fetching and filtering courses based on user profile
function generateSuggestedSchedule(userProfile) {
    const requirements = fetchMockData("sampleDegreeWorks.json");
    const offerings = fetchMockData("sampleCourseOfferings.json");
    const filtered = filterCourses(offerings, requirements);
    return buildSchedule(filtered, userProfile);
}

function fetchMockData(file) {
    // Simulates fetching data from a mock file
    return fetch(`../data/${file}`).then((response) => response.json());
}
