import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import "./Styles/hero.scss";
import Me from "../assets/zak-mumuni.jpg";
import { Link } from "react-scroll";
import Resume from "../assets/ZAK MUMUNI RESUME.pdf"; // Adjust the path as necessary
import Text from "./Text";
import ResumeModal from "./ResumeModal";

function Hero() {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const resumeLink = Resume;

  const handleViewResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Zak-Mumuni-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        div1.current,
        {
          opacity: 0,
          visibility: "hidden",
          y: -100,
        },
        {
          opacity: 1,
          visibility: "visible",
          y: 0,
          duration: 0.5,
        }
      )
      .fromTo(
        div2.current,
        {
          opacity: 0,
          visibility: "hidden",
          y: -100,
        },
        {
          opacity: 1,
          visibility: "visible",
          y: 0,
          duration: 0.5,
        },
        "+=0.2"
      );
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="left-col" ref={div1}>
          <h1>Hi, I'm Zak Mumuni</h1>
          <Text />
          <p>
            As a <strong>Senior Data Analyst</strong>, I translate complex
            datasets into actionable insights that drive strategic business
            decisions. With a strong foundation in statistical modeling, data
            visualization, and advanced SQL, I excel at uncovering hidden trends
            and crafting compelling data narratives. My passion lies in
            empowering organizations to leverage their data effectively, leading
            to measurable improvements in efficiency, profitability, and
            customer satisfaction.
          </p>

          <div className="flex gap-5 justify-start ">
            <div className="btns">
              <button onClick={handleViewResume}>View Resume</button>
            </div>

            <div className="btns">
              <a href="mailto:zmumuni.da@gmail.com" target="_blank">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="right-col" ref={div2}>
          <div className="container">
            <img src={Me} alt="me" />
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
        resumeUrl={resumeLink}
      />
    </div>
  );
}

export default Hero;
