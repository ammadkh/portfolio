import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./AboutMe.module.css";
import Video from "../assets/videos/genes.mp4";

export default function AboutMe() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      className={classes.wrapper}
    >
      <div className={classes.videoContainer}>
        <video id="myVideo" autoPlay muted loop className={classes.video}>
          <source src={Video} type="video/mp4" />
        </video>
        <Grid xs={12} md={6} className={classes.right}>
          <span className={classes.title}>About me</span>
          <span className={classes.desc}>
            Designing with passion for Problem Solving
          </span>
        </Grid>
        <Grid xs={12} md={6} className={classes.left}>
          <span className={classes.detail}>
            I’ve always been passionate about pixels and design projects and
            haven’t stopped working and learning about new technologies . Other
            than sitting in from of my display I enjoy myself in casual sports,
            such as bowling or playing football with friends. I'm grateful that
            my job allows me to work from anywhere. I’m active on Instagram
            where I share most of the and all info about my upcoming projects. I
            also like sharing my experiences on instagram
          </span>
        </Grid>
      </div>
    </Grid>
  );
}
