import styles from "./FAQ.module.css";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import "boxicons";

export default function FAQ() {
  const [expandedList, setExpandedList] = useState([]);

  const quesAns = [
    {
      q: "What is Proptimize?",
      a: "Proptimize stands at the forefront of real estate innovation as an AI-driven marketplace and expansive global network. Crafted with industry professionals and retail users in mind, our platform boasts a specialized real estate search engine, aptly named name. Beyond that, we provide invaluable market insights, forward-thinking property predictions, AI-enhanced listings, personalized client suggestions, and comprehensive area analyses—including demographics. Dive into a world where technology meets real estate, and experience a suite of features designed to elevate your property journey.",
      key: "0",
    },
    {
      q: "Why Choose Proptimize?",
      a: "AI-Powered Precision: At Proptimize, we harness the prowess of artificial intelligence to provide accurate market insights, future property predictions, and enhanced listings, ensuring every move you make is informed and strategic. \n \n Specialized Search Engine: Our platform features a tailored real estate search engine, designed to streamline and optimize your property exploration, making finding the right opportunity quicker and more intuitive. \n \n Globally Connected: Proptimize isn't just a tool; it's a community. Engage with a vast network of realtors, developers, and industry professionals from around the globe, opening doors to collaboration and growth. \n \n Personalized Recommendations: Whether you're seeking potential clients or exploring new areas, our platform uses data-driven algorithms to offer suggestions tailored to your specific needs and preferences. \n \n Comprehensive Insights: Dive deep into area demographics, market trends, and more. Proptimize offers a holistic view of the real estate landscape, ensuring you're always a step ahead. \n \n Dedicated to Professionals: We've built Proptimize around the unique needs of realtors, developers, and industry insiders, ensuring every feature and function is relevant, useful, and impactful. \n \n Join the Proptimize community by filling the form below and elevate your real estate journey with cutting-edge technology, insights, and a global community. Your next big opportunity awaits.",
      key: "1",
    },
    {
      q: "Where are operating?",
      a: "We are training our AI to operate in North America, however, good news! We are also increasing our reach to Asia, Europe and South America.",
      key: "2",
    },
    {
      q: "Who are we serving?",
      a: "Interested in Real Estate? We have got you covered. We serve everyone interested in the industry, however, to optimize the property experince we are currently focusing on: \n \n Realtors: For agents seeking to broaden their listings, connect with potential clients, or tap into global market trends, Proptimize offers the tools and network to amplify their reach and results. \n \n Developers: Whether it's finding the next prime location or showcasing a new development to a global audience, our platform equips developers with insights and connections crucial for success. \n \n Investors & Industry Insiders: For those looking to diversify their portfolio with real estate assets from around the globe, Proptimize offers a curated selection of prime properties, complete with AI-driven insights and predictions. From market analysts to property managers, Proptimize provides a suite of features tailored to the nuanced needs of real estate professionals, ensuring they remain at the forefront of industry developments. \n \n Retail Users (Buyers, Sellers, Renters): Navigating the property market is made seamless with Proptimize. With AI-powered recommendations, detailed area demographics, and a real-time search engine, individuals can effortlessly find, list, or rent their perfect property. \n \n At Proptimize, we're dedicated to serving a diverse spectrum of the real estate world, ensuring our stakeholders finds value, insight, and opportunity on our platform and community.",
      key: "3",
    },

    
  ];

  const handleKeyList = (event, e) => {
    if (expandedList.includes(e.key)) {
      setExpandedList((prev) => prev.filter((keys) => keys !== e.key));
    } else {
      setExpandedList((arr) => [...arr, `${e.key}`]);
    }
  };

  return (
    <div className={styles.faqContainer}>
      <div id= "FAQ" className={styles.faqHeader}>Frequently Asked Questions</div>
      {quesAns.map((i) => (
        <Accordion
          className={styles.questionContainer}
          sx={{
            backgroundColor: expandedList.includes(i.key)
              ? "#eaeaea"
              : "#f7f7f7",
            justifyContent: "left",
            mb: "10px",
            mt: "10px",
            boxShadow: "none",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#eaeaea",
            },
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<box-icon name="chevron-down"></box-icon>}
            className={styles.question}
            onClick={(event) => handleKeyList(event, i)}
            sx={{
              color: "#3B4779",
            }}
          >
            {i.q}
          </AccordionSummary>
          <AccordionDetails
            className={styles.answer}
            sx={{
              color: "#5C71AD",
              backgroundColor: "#eaeaea",
              pt: 0,
            }}
          >
            <Typography align={"left"}>
            {i.a.split('\n').map((str, index, array) => 
              index === array.length - 1 ? str : <>
                {str}
                <br />
              </>
            )}
          </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
