import React from "react";
import './Schedule.css';
import { Card, Stack, Box, useTheme, useMediaQuery, Button } from "@mui/material";

function Schedule() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div id="Pricing" className="Pricing">
      <h1 className="pricingTitle">Founders</h1>
      <Box sx={{
        width: matchesMD ? '90%' : "80%",
        margin: 'auto',
        mt: matchesSM ? '5%' : 'auto'
      }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={5} id="tierStack">
          <Card className="tierCard">
            <div className="tierHeader">Arman Doğru</div>
            <div className="tierPrice">Co-Founder, CTO</div>
            <div className="tierDescription">Ideal for Retail users.</div>
          </Card>

          <Card className="tierCard">
            <div className="tierHeader">Kanwar Pal Singh</div>
            <div className="tierPrice">Co-Founder, CEO</div>
            <div className="tierDescription">Perfect for Hot Latino Moms.</div>
          </Card>

          <Card className="tierCard">
            <div className="tierHeader">Can Say</div>
            <div className="tierPrice">Co-Founder, COO</div>
            <div className="tierDescription">Best for Agents.</div>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}

export default Schedule;
