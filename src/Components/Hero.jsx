import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Styles/hero.scss";
import Me from "../assets/elisha.jpg";
import { Link } from "react-scroll";
import Resume from "../assets/resume.pdf"; // Adjust the path as necessary
import Text from "./Text";

function Hero() {
  const div1 = useRef(null);
  const div2 = useRef(null);

  const resumeLink = Resume;

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
              <a href={resumeLink} target="_blank" download>
                Resume
              </a>
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
    </div>
  );
}

export default Hero;
