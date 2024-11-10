
# CollabWrite: Real-Time Collaborative Writing Tool

**CollabWrite** is a web-based application that allows multiple users to collaborate on documents in real time. The application uses **React** for the front end, **Express** for the backend, **MongoDB** for data storage, and **Socket.IO** for real-time updates.

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

5. MongoDB Setup
   Make sure you have MongoDB running either locally or remotely. Update the MongoDB connection string in the backend (server.js):

javascript

```
mongoose.connect("mongodb://localhost/collabwrite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
```

***You can change this URL to point to your MongoDB instance if it's hosted elsewhere.***

## How It Works?

### Frontend

The front-end is built with React and uses React Router to manage routes. The App.js component is the main entry point, which handles routing and rendering the text editor.

=) When a user first navigates to the app, they are redirected to a unique document, generated with UUID (via uuidV4()). <br>
=) The TextEditor component is responsible for loading the document and enabling the collaborative editing experience. <br>
=) The Quill.js editor is used for text input, with a toolbar offering basic text formatting options. <br>
=) The document content is automatically saved to the server every 2 seconds to prevent data loss. <br>

### Backend

The backend uses Express.js and Socket.IO to provide real-time communication and persist documents in MongoDB.

=) MongoDB stores documents using their unique ID. <br>
=) Socket.IO allows real-time collaboration by emitting and receiving text changes (send-changes and receive-changes events). <br>
=) When a user loads a document, the backend sends the document data through the load-document event. <br>
=) Real-time changes are broadcast to other users via the receive-changes event. <br>
=) The document is periodically saved to the database via the save-document event. <br>

### Real-time Collaboration

**Socket.IO** is used to handle real-time communication. When one user changes the document, that change is sent to the server, which broadcasts the change to other users currently editing the same document. <br>
The document is constantly updated in real-time, with changes being reflected instantly across all connected clients.

## File Structure

/collabwrite <br>
&nbsp;/client <br>
&nbsp; ├── public/ <br>
&nbsp;&nbsp;└── src/ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── App.js # Main React component <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── TextEditor.js # Component for the text editor <br>
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── index.js # React entry point <br>
&nbsp;/server <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Document.js # Mongoose model for documents <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── server.js # Express server and Socket.IO setup <br>
/package.json # Project dependencies <br>

## API Routes

GET /documents/ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Fetches the document data by ID.<br>
POST /documents/ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/save: Saves the document data to the database. <br>

## Socket.IO Events

**get-document:** Requests the current document data. <br>
**load-document:** Sends the document data to the client. <br>
**send-changes:** Sends document changes to the server. <br>
**receive-changes:** Broadcasts document changes to other users. <br>
**save-document:** Saves the document data to the database. <br>

## Contributing


I welcome contributions! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature

   ```
5. Create a pull request.

## Acknowledgements

**Quill.js** - A powerful rich text editor. <br>
**Socket.IO** - To enable real-time web communication. <br>
**MongoDB**- NoSQL database for storing document data <br>

## Programmer

This project is developed by me _Shobhit Singh_
