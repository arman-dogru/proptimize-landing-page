import React from "react";
import './Schedule.css';
import { Card, Stack, Box, useTheme, useMediaQuery, Button } from "@mui/material";

function Schedule() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div id="Pricing" className="Pricing">
      <div id="pricingTitle" className="pricingTitle">FOUNDERS</div>
      <div className="founders-container">
        {[1, 2, 3].map(index => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="img_avatar.png" alt="Avatar" style={{ width: '300px', height: '300px' }} />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;