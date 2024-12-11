# ZotPlanner

ZotPlanner is a web-based application that helps students plan their academic journey, track degree progress, and make informed course and professor choices. It integrates data dynamically from the PeterPortal API to provide up-to-date information about courses.

## Features

1. Course Search: Search for courses by code or title.
2. Prerequisite Tracker: Check prerequisites for any course.
3. Rate My Professor: View ratings and reviews for professors.
4. Yearly Course Plan: Assign courses to terms and save/load your course plan.
5. Degree Progress Tracker: Dynamically track completed and remaining courses with a visual progress bar.

## Requirements

1. Python 3.x (for built-in server)
2. Modern web browser (Chrome, Firefox, Edge, or Safari)
3. Visual Studio Code (optional, for Live Server extension)

## Setup Instructions

### Option 1: Using Python’s Built-In HTTP Server

1. Clone the repository to your local machine:
``git clone https://github.com/yourusername/zotplanner.git``
2. Navigate to the project directory:
``cd zotplanner``
3. Start the built-in server:
``python3 -m http.server``
4. Open your browser and navigate to:
``http://localhost:8000``

### Option 2: Using VS Code’s Live Server Extension

1. Install the "Live Server" extension in Visual Studio Code.
2. Open the project folder in VS Code.
3. Right-click on the index.html file and select "Open with Live Server".
4. Your default browser will open the application automatically.

## Project Architecture

- HTML: Defines the structure of the web app
- CSS: Provides styling for a clean and responsive layout
- JavaScript: Dynamically fetches data, handles course search, prerequisites, and professor ratings.
- LocalStorage: Saves and loads the yearly course plan locally.

## Future Implementations

1. PeterPortal API:
- URL: https://api.peterportal.org/rest/v0/courses/all
- Provides real-time course data, including course descriptions, titles, and prerequisites.
- Fully replaces courses.json for dynamic data fetching.

2. Add collaborative course planning features.
- Integrate backend for user accounts and persistent storage.
- Enhance the degree tracker with a pie chart visualization.
- Implement drag-and-drop functionality for course assignment.

Zot Zot Zot!
