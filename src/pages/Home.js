import React from "react";
import {useState} from "react";
import {Box} from "@mui/material";
import Exercises from "../component/Exercises";
import HeroBanner from "../component/HeroBanner";
import SeaechExercises from "../component/SeaechExercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SeaechExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
