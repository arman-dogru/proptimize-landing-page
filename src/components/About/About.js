import React, { Component } from "react";
import { Grid, Stack, Box } from "@mui/material";
import "./About.css";
import Mascot from '../../assets/Images/cityscrape1.jpg';
import City1 from '../../assets/Images/city1.jpg';
import City2 from '../../assets/Images/city2.jpg';
import City3 from '../../assets/Images/city3.jpg';
import City4 from '../../assets/Images/city4.jpg';

class About extends Component {
  render() {
    return (
      <div className="About" id="About">
        <h1>About Us</h1>
        <Stack direction = {{xs: "column", md: "row"}} spacing={10}>
          <div class="about-body">
            <p>
              At Proptimize, we provide a comprehensive gateway to the future of real estate and your AI-powered companion.
              <br></br>
              <br></br>
              In the vast and diverse world of property transactions and investments, every decision counts. At Proptimize, we've married the transformative power of cutting-edge AI technology with an expansive global network to bring something fresh to the table. This isn't just a platform; it's a revolution, meticulously crafted to elevate every facet of the real estate industry.
              <br></br>
              <br></br>
              At Proptimize, delve into a world of properties with unmatched precision. Armed with real-time data, future valuations, and forward-thinking insights, you're set to invest with utmost confidence. Discover hidden gems in off-market and pre-construction deals, grasp area demographics effortlessly, and join forces with a global network of visionaries.
              Extend your influence beyond borders. Connect and collaborate with industry forerunners, tap into a vast reservoir of market reports, and secure your spot at the vanguard of your field.
              Navigate your property journey with clarity. Whether you're buying, selling, or renting, Proptimize provides a seamless experience, enriched with AI-powered insights, property ratings, and a real-time search engine to ensure you find the perfect match.
              <br></br>
              <br></br>
              We believe that real estate is more than bricks and mortar; it's about transformation, growth, and dreams realized. In a market brimming with opportunities, Proptimize pledges to equip every stakeholder, from the seasoned investor to the first-time renter, with tools and insights designed for success.
              Embark on a journey where tradition meets innovation, where every user is empowered, and where you're not just part of the industry's tapestry; you're weaving its future. With Proptimize, lead the evolution of real estate and change the way you look at Real Estate.
              </p>
          </div>
          <div class="mascot1">
            <img class="mascot1" src={City3}></img>
            <img class="mascot1" src={City4}></img>
          </div>
      </Stack>
    </div>
    );
  }
}

export default About;
