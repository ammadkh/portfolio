import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./Recommendations.module.css";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import MobileStepper from "@mui/material/MobileStepper";

const experiences = [
  { id: 1, title: "S4 Digital", description: "test" },
  { id: 2, title: "Edward Milton", description: "test" },
  { id: 3, title: "Boltech", description: "test" },
  { id: 4, title: "freelaning", description: "test" },
];

export default function Recommendations() {
  const [currentExperience, setCurrentExperience] = useState(1);
  const [circularPosition, setCircularPosition] = useState(-90);
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const { dir } = eventData;
      if (dir === "Left") {
        setCurrentExperience((prev) => {
          if (prev === 4) {
            return 1;
          }
          return prev + 1;
        });
        setCircularPosition((prev) => prev + 90);
      } else {
        setCurrentExperience((prev) => {
          if (prev === 1) {
            return 4;
          }
          return prev - 1;
        });
        setCircularPosition((prev) => prev + 90);
      }
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  console.log(classes, "cl");
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      className={classes.containar}
    >
      <Grid md={6} className={classes.right}>
        <motion.div
          className={classes.circleMain}
          key={currentExperience}
          initial={{ rotate: circularPosition }}
          // whileHover={{ rotate: 360 }}
          whileInView={{ rotate: circularPosition + 90 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className={classes.circleOne}
            key={currentExperience}
            initial={{ rotate: 0 }}
            // whileHover={{ rotate: 360 }}
            whileInView={{ rotate: 40 }}
            transition={{ duration: 6 }}
          >
            <span className={classes.circleTxt}>Linkedin</span>
          </motion.div>
          <div className={classes.circleTwo}>
            <span className={classes.circleTxt}>Linkedin</span>
          </div>
          <div className={classes.circleThree}>
            <span className={classes.circleTxt}>Linkedin</span>
          </div>
          <div className={classes.circleFour}>
            <span className={classes.circleTxt}>Linkedin</span>
          </div>
          <div className={classes.circleMiddle}>
            <span className={classes.circleTxt}>Linkedin</span>
          </div>
        </motion.div>
      </Grid>
      <Grid md={6} className={classes.right}>
        <div {...handlers} className={classes.handler}>
          {experiences.map(
            (item) =>
              item.id === currentExperience && (
                <div className={classes.card}>{item?.title}</div>
              )
          )}
        </div>
        <MobileStepper
          variant="dots"
          steps={4}
          position="static"
          activeStep={currentExperience - 1}
          className={classes.steper}
        ></MobileStepper>
      </Grid>
    </Grid>
  );
}
