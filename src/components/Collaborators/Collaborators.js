import './Collaborators.css';
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import mountain from '../../assets/Logos/mountain_flags.svg'

function Collaborators() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div id="Collaborators" className="Collaborators">
       <h1> </h1>
    </div>

  );
}

export default Collaborators;