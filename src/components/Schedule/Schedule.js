import React from "react";
import './Schedule.css';
import { Card, Stack, Box, useTheme, useMediaQuery, Button } from "@mui/material";

function Schedule() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div id="Pricing" className="Pricing">
      <h1 className="pricingTitle">Choose Your Plan</h1>
      <Box sx={{
        width: matchesMD ? '90%' : "80%",
        margin: 'auto',
        mt: matchesSM ? '5%' : 'auto'
      }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={5} id="tierStack">
          {/* Basic Tier */}
          <Card className="tierCard">
            <div className="tierHeader">Retail</div>
            <div className="tierPrice">$40/mo</div>
            <div className="tierDescription">Ideal for Retail users.</div>
          </Card>

          {/* Pro Tier */}
          <Card className="tierCard">
            <div className="tierHeader">Builders/Multi-Property Investors</div>
            <div className="tierPrice">$50/mo</div>
            <div className="tierDescription">Perfect for Multi-Property Investors.</div>
          </Card>

          {/* Premium Tier */}
          <Card className="tierCard">
            <div className="tierHeader">Agents</div>
            <div className="tierPrice">$60/mo</div>
            <div className="tierDescription">Best for Agents.</div>
          </Card>

          {/* Customisable Tier */}
          <Card className="tierCard">
            <div className="tierHeader">Custom</div>
            <div className="tierPrice">$???/mo</div>
            <div className="tierDescription">Best for large enterprises.</div>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}

export default Schedule;
