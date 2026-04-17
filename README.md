# Notes Management REST API

A clean and professional REST API for managing notes, built with **Node.js**, **Express**, and **MongoDB**. This project was developed as part of Assignment 01 for the Backend with Node.js course.

## 🚀 Live Links

- **Deployed API**: [https://assignment-node-js-01-1.onrender.com/](https://assignment-node-js-01-1.onrender.com/)
- **Postman Documentation**: [https://documenter.getpostman.com/view/50862709/2sBXqDsNdA](https://documenter.getpostman.com/view/50862709/2sBXqDsNdA)

---

## 🛠️ Tech Stack

- **Core**: Node.js, Express
- **Database**: MongoDB (Atlas)
- **ODM**: Mongoose
- **Environment**: Dotenv
- **Dev Tools**: Nodemon

---

## 📂 Project Structure

```text
notes-app/
├── src/
│   ├── config/db.js           # Database connection logic
│   ├── models/note.model.js   # Mongoose Note schema
│   ├── controllers/           # Business logic and DB queries
│   ├── routes/                # Route definitions
│   ├── app.js                 # Express setup
│   └── index.js               # Server entry point
├── .env                       # Environment variables (not committed)
├── .env.example               # Template for environment variables
└── package.json               # Project dependencies
```

---

## 🚦 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/notes` | Create a single note |
| **POST** | `/api/notes/bulk` | Create multiple notes at once |
| **GET** | `/api/notes` | Get all notes |
| **GET** | `/api/notes/:id` | Get a single note by ID |
| **PUT** | `/api/notes/:id` | Replace a note completely (Full Update) |
| **PATCH** | `/api/notes/:id` | Update specific fields only (Partial Update) |
| **DELETE** | `/api/notes/:id` | Delete a single note |
| **DELETE** | `/api/notes/bulk` | Delete multiple notes by IDs |

---

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnshuShee/Assignment-Node-Js-01.git
   cd Assignment-Node-Js-01
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your credentials:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the server**:
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

---

## 📝 Features & Validation

- **Strict MVC Structure**: Clear separation of concerns.
- **Error Handling**: Follows a standard `{ success: false, message: "...", data: null }` format.
- **ObjectId Validation**: Automatically validates MongoDB IDs for all specific routes.
- **Bulk Operations**: Support for creating and deleting multiple notes in a single request.
- **PUT vs PATCH**: Correct implementation of full replacement vs. partial update logic.