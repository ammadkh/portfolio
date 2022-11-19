import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./Skillset.module.css";

export default function Skillset() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="start"
      style={{ position: "relative", padding: "100px 0" }}
    >
      <Grid
        xs={12}
        md={6}
        style={{ paddingRight: "100px", paddingLeft: "100px" }}
      >
        <span className={classes.title}>My skillset</span>
        <span className={classes.desc}>
          Graphic Design, Interface Design & User Experience
        </span>
      </Grid>
      <Grid xs={12} md={6}>
        <span className={classes.detail}>
          I specialize in building complex web applications, leading front-end
          teams, digital product design and developing visual design systems. I
          enjoy creating effortless user experience and designing delightful
          digital products. The entire process of going from a concept to
          release and gathering user’s feedback on either client’s or my own
          products is what makes me wake up everyday! I worked with numerous
          clients from all around the world from early startups to
          well-established companies. I always seek new opportunities for
          cooperation on projects around interesting dashboards, design systems
          or landing pages. Let’s create something awesome together!
        </span>
      </Grid>
    </Grid>
  );
}
