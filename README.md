# Task Management Tool
This web application is a task management system that helps users organize, manage, and track tasks along with their subtasks in a simple and interactive way. Users can monitor progress visually, manage deadlines, and stay updated on task status from a central dashboard. It is useful for individuals or teams who want clear control over their work.

## Live Link 
You can visit here : https://chandani-project-management.netlify.app/ 

## Features

- **Create Tasks:**  
  Users can create a main task and add a clear description.  
  *Example: Build a “Personal Diary” application.*

- **Add Subtasks:**  
  Each task can be broken into smaller subtasks such as signup, login, create note, and edit note.

- **Set Deadlines:**  
  Users can assign deadlines to both tasks and subtasks for better time planning.

- **Interactive Progress Tracking:**  
  Progress updates automatically as subtasks are completed. Users can clearly see how much work is done and how much is left.

- **Edit Tasks and Subtasks:**  
  Tasks and subtasks can be updated anytime, including their name, description, or deadline.

- **Dashboard Overview:**  
  The dashboard shows:
  - Completed tasks  
  - Overall progress  
  - Upcoming and missed deadlines  

- **Time Tracking:**  
  A built-in timer helps track time spent on each task and subtask.



## Technologies Used

- Frontend: ReactJs , Tailwind CSS

- Backend: Node.js (Express.js)

- Database: MongoDB 

- Authentication: JWT (JSON Web Tokens) 

- Other Libraries: Moment.js (for handling deadlines and dates)

## Installation

### Prerequisites

- Node.js: Ensure you have Node.js installed. If not, download it from Node.js official website.

- MongoDB (if using MongoDB): Make sure you have MongoDB installed or set up a MongoDB Atlas account.

- Git: To clone the repository.


## Steps

- Clone the repository to your local machine:
git clone [https://github.com/yourusername/project-management-tool.git](https://github.com/ChandaniSahu/TaskManagementSystem.git)

- Navigate to the project directory:
cd client

- Install dependencies:
npm install

- Set up your environment variables:
Create a .env file in the root directory and configure necessary environment variables such as your database URI, JWT secret, etc.

- Run the development server:
npm run dev
Open your browser and go to http://localhost:5173 to start using the application.



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
