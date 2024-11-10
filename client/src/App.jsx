import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import TextEditor from "./TextEditor";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-title">𝐂𝐨𝐥𝐥𝐚𝐛𝚆𝚛𝚒𝚝𝚎</h1>
          <p className="app-subtitle">𝘛𝘩𝘦 𝘙𝘦𝘢𝘭-𝘵𝘪𝘮𝘦 𝘊𝘰𝘭𝘭𝘢𝘣𝘰𝘳𝘢𝘵𝘪𝘷𝘦 𝘞𝘳𝘪𝘵𝘪𝘯𝘨 𝘛𝘰𝘰𝘭</p>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
          <Route path="/documents/:id" element={<TextEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;