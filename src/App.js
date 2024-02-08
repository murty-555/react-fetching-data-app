// import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import UsersDetail from "./components/UsersDetail";

function App() {
  
  return (
    <Router>
    <div className="App">
      <h1>Hello welcome to react tutorial</h1>
      <hr/>
      <Routes>
      <Route path="/" exact element={<Users/>}/>
      <Route path="/users" exact element={<Users/>}/>
      <Route path="/users/:id" element={<UsersDetail/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
