import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/details/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
