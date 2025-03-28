# Jobs API Project

This repository contains a Jobs API built using Node.js and Express, implementing authentication, job management, and database interactions with MongoDB.

## Features

- **User Authentication**: Register and login functionality with JWT-based authentication.
- **Job Management**: Users can create, read, update, and delete jobs.
- **Role-Based Access**: Certain routes are protected and accessible only to authorized users.
- **Error Handling**: Custom middleware to handle errors and provide proper responses.
- **Database Integration**: Uses MongoDB with Mongoose for schema modeling.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcrypt for password hashing
- **Middleware**: Custom error handling, authentication middleware

## Installation & Running the Project

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Steps to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/AliSinaSaifi/jobs-api.git
   cd jobs-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add the necessary variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_LIFETIME=1d
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. Access the API at:
   ```
   http://localhost:3000
   ```

## Project Structure

```
jobs-api/
│── app.js               # Main entry point
│── controllers/         # Request handlers for jobs and authentication
│── db/                  # Database connection setup
│── errors/              # Custom error handling classes
│── middleware/          # Middleware functions (auth, error handling)
│── models/              # Mongoose models for users and jobs
│── routes/              # API routes
│── .env                 # Environment variables (not included in repo)
│── package.json         # Dependencies and scripts
│── .gitignore           # Ignored files
```

## API Endpoints

| Method | Endpoint              | Description                  |
| ------ | --------------------- | ---------------------------- |
| POST   | /api/v1/auth/register | Register a new user          |
| POST   | /api/v1/auth/login    | Login and get JWT token      |
| GET    | /api/v1/jobs          | Get all jobs (protected)     |
| POST   | /api/v1/jobs          | Create a new job (protected) |
| PATCH  | /api/v1/jobs/\:id     | Update a job (protected)     |
| DELETE | /api/v1/jobs/\:id     | Delete a job (protected)     |

## Contribution

Feel free to fork this repository and contribute. Submit a pull request for any improvements or new features.

## License

This project is open-source and available under the MIT License.

