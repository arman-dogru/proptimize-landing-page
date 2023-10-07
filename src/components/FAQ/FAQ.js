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
      a: "Proptimize is a first-of-its-kind AI-powered marketplace and global networking platform. We have created our platform around realtors, developers and other industry professionals. Our platforms provides our search engine designed for the real-estate industry *name*,  market insights, future predictions, listing AI, client recommendations, area recommendations and demographics and many more.",
      key: "0",
    },
    {
      q: "Why Choose Proptimize?",
      a: "Data-Driven Insights: We leverage real-time data around your listings/projects and provide market insights, future of the market, potential development projects in that area along with pre-construction, potential growth areas and ongoing construction deals. \n Personalized Recommendations: Own your platform. We believe in giving power to our clients using data and our cutting edge-AI. Our users can receive tailored recommendations based on your unique preferences so you can perfectly match your clients needs. \n Marketplace: Our global marketplace. Proptimize provides agents and developers with a global market place to listing their projects as well as see projects/listings globally. According to your preferences, you can personalize the listing demographic to attract the users you want. \n Networking: We know the real estate industry can be extremely challenging and finding verified referrals is always difficult. Don't worry! We are here to help. Using our platform you can network with agents, builders and investors globally! As you sit at your office, you can connect with any of our users you’re interested to know or even better work together to grow your business. Proptimize believes in saving our users money and time. Proptimize gives you the opportunity to interact worldwide and market yourself in the industry. AI and data when mixed save time, effort and capital that could be used for a better project and focus on our clients.",
      key: "1",
    },
    {
      q: "Where are operating?",
      a: "We are training our AI to operate in North America, however, good news! We are also increasing our reach to Asia, Europe and South America.",
      key: "2",
    },
    {
      q: "Who are we serving?",
      a: "Real Estate Agents: Offering them a platform to network globally, access comprehensive market insights, and utilize AI-powered tools for listings and client recommendations. \n Real-Estate Developers: Facilitating global networking opportunities, enabling them to showcase their projects, and connect with potential investors and agents from around the world. \n Multi-property Investors: Providing them with a platform to discover global property listings, including exclusive access to off-market and pre-construction deals. Our tools and reports help investors make informed decisions based on their budget, investment strategy, and portfolio needs. \n No matter your experience or role in the real estate world, Proptimize is designed for you. Our platform empowers all, from industry experts to newcomers, ensuring everyone can navigate the global property landscape with ease and confidence. ",
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
