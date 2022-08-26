import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
