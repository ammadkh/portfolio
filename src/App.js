import AnimatedCursor from "react-animated-cursor";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import Home from "./screens/Home";
import Skillset from "./screens/Skillset";
import AboutMe from "./screens/AboutMe";
import Recommendations from "./screens/Recommendations";
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <AppBar position="sticky" style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}>
        <Toolbar>
          <ToggleButton />

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Pacifico",
              fontSize: "30px",
              ml: "60px",
            }}
          >
            ammad
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ backgroundColor: "black" }}>
        <Home />
        <Skillset />
        <AboutMe />
        <Recommendations />
      </Container>
    </div>
  );
}

export default App;
