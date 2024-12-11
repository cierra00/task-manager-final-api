# Task Management System

## Overview
The Task Management System is a full-stack web application developed using the MEAN stack (MongoDB, Express.js, Angular, Node.js). This application provides users with the ability to manage tasks effectively, including features such as user authentication, CRUD operations, and a responsive front-end design.

## Features


- **Task Management**:
  - Add tasks
  - Edit tasks
  - Delete tasks
  - Mark tasks as completed or pending
- **Responsive Design**: Ensures compatibility with various devices and screen sizes.
- **Error Handling**: User-friendly error messages for invalid inputs and system failures.
- **Scalable Architecture**: Built for extensibility and scalability.

## Goals

1. Create an efficient and user-friendly task management system.
2. Showcase full-stack development skills using the MEAN stack.
3. Implement secure authentication and robust error handling.
4. Ensure responsiveness and compatibility across different devices.
5. Adhere to best practices in web application development.

## How to Use

### Prerequisites

1. Install [Node.js](https://nodejs.org/).
2. Install [MongoDB](https://www.mongodb.com/try/download/community) and ensure the database server is running.
3. Install Angular CLI globally:
   ```bash
   npm install -g @angular/cli
   ```

### Setup Instructions

#### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/cierra00/task-manager-final-api.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd task-manager-final-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

#### Frontend Setup

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/cierra00/task-manager-final-ui.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd task-manager-final-ui
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   ng serve
   ```
5. Access the application at:
   ```
   http://localhost:4200


#FYI  
You will need to create an .env file with a database connection string for Mongo DB. You can find the data model useful in the API models folder. 
   ```

### Usage

1. Register a new account or log in with existing credentials.
2. Create tasks by providing a title and description.
3. Edit or delete tasks as needed.
4. Mark tasks as completed or pending.

## Repository Links

- **Frontend Repository**: [task-manager-final-ui](https://github.com/cierra00/task-manager-final-ui.git)
- **Backend Repository**: [task-manager-final-api](https://github.com/cierra00/task-manager-final-api.git)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
