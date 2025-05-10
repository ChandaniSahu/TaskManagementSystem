# Project Management Tool
This web application is a project management tool designed for developers to organize and track their tasks and projects effectively. It allows users to create projects, manage tasks and subtasks, set deadlines, and track progress through a dashboard. The application is ideal for developers who need to keep track of various stages of project development.

## Live Link 
You can visit here : https://chandani-project-management.netlify.app/ 

## Features

- Create a Project: Developers can create a new project and describe the main task. Example: Building a "Personal Diary" application.

- Add Subtasks: Within each project, users can define specific subtasks (e.g., signup, login, create note, edit note).

- Set Deadlines: Each task and subtask can have a deadline to ensure proper time management.

- Track Progress: Users can track the completion status of tasks and subtasks. The progress is updated in real-time based on task completion.

- Edit Tasks and Subtasks: Users can modify or update their tasks and subtasks, including deadlines or descriptions.

- Dashboard View: The main dashboard displays a summary of all projects, showing key information such as:

- - Tasks completed

- - Progress towards completion

- - Upcoming deadlines

- Timer: A timer feature is included for each task and project to track time taken and time remaining until the deadline.

- Deadline Notifications: Users are notified when a deadline is approaching or missed.


## Technologies Used

- Frontend: HTML, CSS, JavaScript (React.js or similar framework)

- Backend: Node.js (Express.js) or similar

- Database: MongoDB or MySQL

- Authentication: JWT (JSON Web Tokens) or OAuth

- Other Libraries: Moment.js (for handling deadlines and dates)

## Installation

### Prerequisites

- Node.js: Ensure you have Node.js installed. If not, download it from Node.js official website.

- MongoDB (if using MongoDB): Make sure you have MongoDB installed or set up a MongoDB Atlas account.

- Git: To clone the repository.


## Steps

- Clone the repository to your local machine:
git clone https://github.com/yourusername/project-management-tool.git

- Navigate to the project directory:
cd project-management-tool

- Install dependencies:
npm install

- Set up your environment variables:
Create a .env file in the root directory and configure necessary environment variables such as your database URI, JWT secret, etc.

- Run the development server:
npm run dev
Open your browser and go to http://localhost:3000 to start using the application.



## Usage

### Create a New Project:

- From the dashboard, click on the "Create Project" button.

- Fill in the project name, description, and other details.

- You can add multiple tasks and set deadlines for each one.


### Manage Tasks:

- Add, edit, or delete tasks and subtasks.

- For each task, you can mark it as complete when finished.

- Subtasks will automatically update the main task’s progress.


### Track Progress:

- The dashboard will show a progress bar for each project, indicating the     percentage of tasks completed.

- The application also shows a timer for each task to track how much time has passed since the task was started.


### Deadline Management:

Each task and project will show its deadline. If the deadline is approaching, you will be notified.


### Dashboard Overview:

The dashboard shows all your active projects, their current status, completed tasks, and upcoming deadlines.



## License
This project is licensed under the MIT License – see the LICENSE file for details.