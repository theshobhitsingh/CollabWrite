# CollabWrite: Real-Time Collaborative Writing Tool

**CollabWrite** is a web-based application that allows multiple users to collaborate on documents in real-time. The application uses **React** for the frontend, **Express** for the backend, **MongoDB** for data storage, and **Socket.IO** for real-time updates.

## Features

- **Real-time collaboration**: Multiple users can edit the same document simultaneously, with changes being broadcast in real-time.
- **Persistent storage**: Documents are saved to a MongoDB database, so they persist between sessions.
- **Text editor**: Uses the **Quill.js** editor with rich text formatting options, including bold, italic, lists, headings, and more.
- **Auto-save**: Documents are periodically saved to the backend every 2 seconds to ensure data is not lost.

## Technologies Used

- **Frontend**: React, React Router, Quill.js (for rich text editing)
- **Backend**: Express.js, Socket.IO (for real-time communication), MongoDB (for document storage)
- **Database**: MongoDB (stores document data)
- **Real-time Communication**: Socket.IO (handles real-time document updates)
- **CSS**: Custom styles for the UI

## Installation

### Prerequisites

- **Node.js** (v16 or above)
- **MongoDB** running locally or remotely

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/collabwrite.git
cd collabwrite
```
### 2. Set up the backend

1. Navigate to the backend directory and install dependencies:

```bash
cd server
npm install
```

2. Start the server: npm start
The backend will start on http://localhost:5000.

### 3. Set up the frontend
Navigate to the frontend directory and install dependencies:

```bash
cd client
npm install
```
3. Start the frontend: npm run dev

4. The frontend will start on http://localhost:5173.

4. MongoDB Setup
Make sure you have MongoDB running either locally or remotely. Update the MongoDB connection string in the backend (server.js):

mongoose.connect("mongodb://localhost/collabwrite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


