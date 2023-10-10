import React from "react";
import './Schedule.css';
import ArmanImg from '../../assets/Images/Arman-Dogru.jpeg';
import CanImg from '../../assets/Images/Can-Say.jpeg';
import KanwarImg from '../../assets/Images/Kanwar.jpeg';
import { Card, Stack, Box, useTheme, useMediaQuery, Button } from "@mui/material";

function Schedule() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div id="Pricing" className="Pricing">
      <div id="pricingTitle" className="pricingTitle">FOUNDERS</div>
      <div className="founders-container">
          <div key="1" className="flip-card">
          <a href="https://www.linkedin.com/in/arman-dogru/">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={ArmanImg} alt="Avatar" style={{ width: '200px', height: '200px' }} />
              </div>
              <div className="flip-card-back">
                <h1>Arman Doğru</h1>
                <p>Founding Engineer, CTO</p>
              </div>
            </div>
            </a>
          </div>
          <div key="2" className="flip-card">
          <a href="https://www.linkedin.com/in/kanwar-pal-singh-sidhu-4380b31b4/">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={KanwarImg} alt="Avatar" style={{ width: '200px', height: '200px' }} />
              </div>
              <div className="flip-card-back">
                <h1>Kanwar Pal Singh</h1>
                <p>Founder, CEO</p>
              </div>
            </div>
            </a>
          </div>
          <div key="3" className="flip-card">
            <a href="https://www.linkedin.com/in/can-say-58869b168/">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={CanImg} alt="Avatar" style={{ width: '200px', height: '200px' }} />
              </div>
              <div className="flip-card-back">
                <h1>Can Say</h1>
                <p>Founding Engineer, COO</p>
              </div>
            </div>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Schedule;