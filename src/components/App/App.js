import "./App.css";
import NavBar from "../NavBar/NavBar.js";
import Sidebar from "../NavBar/Sidebar.js";
import Hero from "../Hero/Hero.js";
import About from "../About/About.js";
import Schedule from "../Schedule/Schedule.js";
import SponsorEvent from "../SponsorEvent/SponsorEvent.js";
import SponsorShowcase from "../SponsorShowcase/SponsorShowcase.js";
import Collaborators from "../Collaborators/Collaborators.js";
import FAQ from "../FAQ/FAQ.js";
import Footer from "../Footer/Footer.js";

function App() {
  return (
    <div>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="page-wrap">
        <div class="Gradient">
          <NavBar />
          <Hero />
          <About />
          <SponsorShowcase />
          <Schedule />
          <FAQ />
          <Collaborators />
          
        </div>
        <hr></hr>
        <Footer />
      </div>
    </div>
  );
}

export default App;
