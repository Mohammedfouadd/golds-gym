import React, {useContext} from "react";
import {Box, Stack, Typography} from "@mui/material";
import BodyPart from "./BodyPart";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import "react-horizontal-scrolling-menu/dist/styles.css";

const LeftArrow = () => {
  const {scrollPrev} = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="lift-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const {scrollNext} = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({data, bodyParts, bodyPart, setBodyPart}) => {
  return (
    <Stack sx={{width: {lg: '1400px'}}} className="oooo">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map(item =>
          <Box
            key={item.id || item}
            id={item.id || item}
            title={item.id || item}
            m="0 40px">
            {bodyParts
              ? <BodyPart
                  item={item}
                  setBodyPart={setBodyPart}
                  bodyPart={bodyPart}
                />
              : <ExerciseCard exercise={item} />}
            {/* <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/> */}
          </Box>
        )}
      </ScrollMenu>
    </Stack>
  );
};

export default HorizontalScrollbar;
