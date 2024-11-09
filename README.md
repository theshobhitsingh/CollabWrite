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

You can change this URL to point to your MongoDB instance if it's hosted elsewhere.

## How It Works ?

### Frontend

The frontend is built with React and uses React Router to manage routes. The App.js component is the main entry point, which handles routing and rendering the text editor.

=) When a user first navigates to the app, they are redirected to a unique document, generated with UUID (via uuidV4()).
=) The TextEditor component is responsible for loading the document and enabling the collaborative editing experience.
=) The Quill.js editor is used for text input, with a toolbar offering basic text formatting options.
=) The document content is automatically saved to the server every 2 seconds to prevent data loss.

### Backend

The backend uses Express.js and Socket.IO to provide real-time communication and persist documents in MongoDB.

=) MongoDB stores documents by their unique ID.
=) Socket.IO allows real-time collaboration by emitting and receiving text changes (send-changes and receive-changes events).
=) When a user loads a document, the backend sends the document data through the load-document event.
=) Real-time changes are broadcast to other users via the receive-changes event.
=) The document is periodically saved to the database via the save-document event.

### Real-time Collaboration
Socket.IO is used to handle real-time communication. When one user makes a change to the document, that change is sent to the server, which broadcasts the change to other users currently editing the same document.
The document is constantly updated in real-time, with changes being reflected instantly across all connected clients.

## File Structure
/collabwrite
  /client
    ├── public/
    └── src/
        ├── App.js           # Main React component
        ├── TextEditor.js     # Component for the text editor
        └── index.js          # React entry point
  /server
    ├── Document.js          # Mongoose model for documents
    ├── server.js            # Express server and Socket.IO setup
  /package.json               # Project dependencies


## API Routes
GET /documents/
: Fetches the document data by ID.
POST /documents/
/save: Saves the document data to the database.
Socket.IO Events
get-document: Requests the current document data.
load-document: Sends the document data to the client.
send-changes: Sends document changes to the server.
receive-changes: Broadcasts document changes to other users.
save-document: Saves the document data to the database.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Quill.js - A powerful rich text editor.
Socket.IO - For enabling real-time web communication.
MongoDB - NoSQL database for storing document data
