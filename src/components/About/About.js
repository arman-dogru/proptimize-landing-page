import React, { Component } from "react";
import { Grid, Stack, Box } from "@mui/material";
import "./About.css";
import Mascot from '../../assets/Images/cityscrape1.jpg';
import Mascot2 from '../../assets/Images/cityscrape2.jpg';

class About extends Component {
  render() {
    return (
      <div className="About" id="About">
        <h1>About Us</h1>
        <Stack direction = {{xs: "column", md: "row"}} spacing={10}>
          <div class="about-body">
            <p>
            At Proptimize, we're redefining the way you experience real estate. Our innovative proptech solutions empower investors, developers, and industry professionals to make smarter, more informed decisions. Proptimize helps you elevate your business to globally by providing AI-powered services, such as your own personal advisor/assistant a real-time search engine, name of AI, market reports, listing AI, area demographics, client recommendation,  property ratings, future and current price predictions and a platform to market your business globally with other professionals of the industry to unlock your maximum potential.
            <br></br>
            <br></br>
            What We Offer:
            <br></br>
            Global Connections: Real estate agents, developers, and multi-property investors can seamlessly interact and forge beneficial relationships.
            <br></br>
            Insightful Services: Gain access to comprehensive market reports, future property valuations, AI-driven listing assistance, client recommendations, detailed area demographics, and intel on potential governmental developments.
            <br></br>
            Empowering Business Growth: Agents and builders can expand their global reach, leverage our platform to access essential reports, and collaborate with industry professionals worldwide.
            <br></br>
            Investment Opportunities: Investors can explore global listings, discover off-market and pre-construction deals, and make informed decisions based on their budget and investment strategy.
            <br></br>
            <br></br>
            Our Vision:
            <br></br>
            Aspiring to lead the global stage, Proptimize is committed to evolving as the most dominant private networking system in the real estate sector. Our focus? Gathering and harnessing real estate data from every corner of the world.
            </p>
          </div>
          <div class="mascot1">
            <img class="mascot1" src={Mascot}></img>
          </div>
      </Stack>
    </div>
    );
  }
}

export default About;
