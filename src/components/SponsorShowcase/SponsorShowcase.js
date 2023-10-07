import React from "react";
import "./SponsorShowcase.css";
import { Button, useMediaQuery, useTheme, darken, Grid } from '@mui/material';

function SponsorShowcase() {

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

    return (
      <div className="Sponsors">
        <h1>Features</h1>
        <div className="out">
          <div class="sponsors-body">
            <p class="text">
            Hack the Hill is made possible by our generous sponsors.
            Interested in supporting the capital’s hackathon?
            <ul>
              <li>
                item 1
              </li>
              <li>
                item 2
              </li>
            </ul>
            </p>            
          </div>
        </div>
      </div>
    );
  }

export default SponsorShowcase;
