import styles from "./SponsorShowcase.css";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import "boxicons";

export default function SponsorShowcase() {
  const [expandedList, setExpandedList] = useState([]);

  const quesAns = [
    {
      q: "AI Insight Engine",
      a: "Harnessing advanced algorithms for pinpoint market predictions and property insights.",
      key: "0",
    },
    {
      q: "Global Nexus",
      a: "Dive into a vast international network of real estate professionals and collaborators.",
      key: "1",
    },
    {
      q: "Precision Search",
      a: "Our specialized real estate search engine streamlines property discovery.",
      key: "2",
    },
    {
      q: "Dynamic Listings",
      a: "AI-enhanced property listings that stand out and captivate audiences.",
      key: "3",
    },
    {
      q: "Tailored Recommendations",
      a: "Personalized client and area suggestions crafted for your unique needs.",
      key: "4",
    },
    {
      q: "Deep Dive Demographics",
      a: "Detailed, at-a-glance area analyses for informed decision-making.",
      key: "5",
    },
    {
      q: "Future Forecasting",
      a: "Stay ahead with predictive market trends and property valuations.",
      key: "6",
    },
    {
      q: "Collaborative Platforms",
      a: "Forge, nurture, and leverage strategic partnerships with industry frontrunners.",
      key: "7",
    },
    {
      q: "Control your business",
      a: "With Proptimize's all-in-one CRM, industry professionals can effortlessly manage contacts, generate leads, streamline deals, automate marketing magic, and tap into powerful analytics. A symphony of tools tailored for the real estate maestro.",
      key: "8",
    },
    {
      q: "Cutting-Edge Interface",
      a: "A user-friendly, sleek design optimized for the ultimate real estate experience.",
      key: "9",
    }

    
  ];

  const handleKeyList = (event, e) => {
    if (expandedList.includes(e.key)) {
      setExpandedList((prev) => prev.filter((keys) => keys !== e.key));
    } else {
      setExpandedList((arr) => [...arr, `${e.key}`]);
    }
  };

  return (
    <div className="featuresContainer">
    <div id="FAQ" className="featuresHeader">Features</div>
    {quesAns.map((i) => (
      <Accordion
        className="questionContainer"
        sx={{
          backgroundColor: expandedList.includes(i.key) ? "transparent" : "transparent",
          justifyContent: "left",
          mb: "10px",
          mt: "10px",
          boxShadow: "none",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#ffffff",
          },
          "&:before": {
            display: "none",
          },
        }}
      >
          <AccordionSummary
            expandIcon={<box-icon name="chevron-down"></box-icon>}
            className="question"
            onClick={(event) => handleKeyList(event, i)}
            sx={{
              color: "#3B4779",
            }}
          >
            {i.q}
          </AccordionSummary>
          <AccordionDetails
            className="answer"
            sx={{
              color: "#5C71AD",
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
