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
      q: "Property Listings & Insights",
      a: "• User-friendly interface for property listings. \n • AI-powered price predictions and property grading. \n • Comprehensive property pages with essential details.",
      key: "0",
    },
    {
      q: "Advanced Search & Market Insights",
      a: "• Robust search functionality.\n • AI-driven market reports and trends. \n• Insights from historical and current property listings.",
      key: "1",
    },
    {
      q: "Client Relationship Management (CRM)",
      a: "• Contact, lead, and deal management tools. \n • Task & calendar integrations.\n• Communication tools and client portals.",
      key: "2",
    },
    {
      q: "Marketing & Automation",
      a: "• Analytics & reporting dashboards.\n • Notifications, automated responses, and event calendars.\n• Marketing automation with email campaigns and templates.",
      key: "3",
    },
    {
      q: "Collaboration & Networking",
      a: "• Networking portal with forums, blogs, and group discussions.\n • Resource library and market insights dashboard.\n• Collaborative tools for agents and prop-tech entities.",
      key: "4",
    },
    {
      q: "AI-Powered Assistance",
      a: "• AI-assisted listing tool for realtors.\n • Marketing analytics and property value improvement tools.",
      key: "5",
    },
    {
      q: "Investor-specific Tools",
      a: "• Property access tools and demographic data.\n • Local agent connections and financial information.\n• Market reports and special deals for multi-property investors.",
      key: "6",
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
