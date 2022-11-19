import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import Web from "../assets/lottie/web.json";
import Lottie from "lottie-react";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          className={classes.wrapper}
        >
          <Grid xs={12} md={6} className={classes.left}>
            <div className={classes.introContainer}>Software Developer</div>
            <h1 style={{}}>Hello, it's me</h1>
            <span className={classes.name}>Ammad Hassan</span>
            <div className={classes.descWrapper}></div>
            <span className={classes.desc}>
              An enthusiastic product designer currently shaping the future of
              software development by designing smooth user-interfaces that
              promote user interaction with information and data. While
              traveling around the world.
            </span>
          </Grid>
          <Grid xs={12} md={6}>
            <Lottie animationData={Web} loop={true} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
