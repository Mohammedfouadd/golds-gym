import React from "react";
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import ExerciseDetali from "./pages/ExerciseDetali";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from './component/Footer'
import './App.css';
const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetali />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
