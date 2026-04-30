# Team Task Manager (Full Stack)

A modern full-stack web application where users can create projects, assign tasks, manage teams, and track work progress through an interactive dashboard.

Built using **React.js, Node.js, Express.js, MongoDB**, and deployed online.

---

# Live Demo

Frontend URL: Add your deployed frontend link here  
Backend URL: Add your deployed backend link here

---

# Features

## Authentication
- User Signup
- User Login
- Secure JWT Token Authentication
- Logout

## Dashboard
- Total Tasks Count
- Completed Tasks Count
- Pending Tasks Count
- Overdue Tasks Count
- Live Progress Tracking

## Project Management
- Add New Projects
- View All Projects
- Delete Projects

## Task Management
- Add Tasks
- Assign Tasks to Members
- Set Due Dates
- Mark Tasks as Completed
- Delete Tasks
- Auto Overdue Detection

## Team Management
- Add Team Members
- Assign Roles
- Delete Members

## UI / UX
- Modern Sidebar Navigation
- Responsive Layout
- Professional Dashboard Design
- Clean User Interface

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT
- bcryptjs

## Deployment
- Railway / Vercel

---

# Folder Structure

```bash
team-task-manager/
│── client/        # React Frontend
│── server/        # Node Backend
│── README.md

#Installation(Local Setup)
1. Clone Repository
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager

2. Backend Setup
cd server
npm install

->Create .env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

->Run backend:
npm run dev

3. Frontend Setup
cd client
npm install
npm start

#API Routes

Auth Routes
POST /api/auth/register
POST /api/auth/login

Project Routes
POST /api/projects/add
GET /api/projects/all
DELETE /api/projects/:id


Task Routes
POST /api/tasks/add
GET /api/tasks/all
PUT /api/tasks/:id
DELETE /api/tasks/:id
GET /api/tasks/stats/all

Future Improvements
Role Based Access (Admin / Member)
Team Permissions
Notifications
File Uploads
Drag & Drop Kanban Board
Dark Mode
Email Alerts





