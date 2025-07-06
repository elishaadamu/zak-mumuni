import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Styles/skills.scss";
import css from "../assets/skills/css.png";
import github from "../assets/skills/github.jpeg";
import html from "../assets/skills/html.png";
import js from "../assets/skills/js.png";
import python from "../assets/skills/python.png";
import bigquery from "../assets/skills/big-query.png";
import sqlite from "../assets/skills/sqlite.jpeg";
import react from "../assets/skills/react.png";
import R from "../assets/skills/R.png";
import AWS from "../assets/skills/aws.png";
import Airflow from "../assets/skills/airflow.png";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skills = [
    {
      skillImg: html,
      skillName: "HTML",
    },
    {
      skillImg: css,
      skillName: "CSS",
    },
    {
      skillImg: js,
      skillName: "JavaScript",
    },
    {
      skillImg: react,
      skillName: "React Js",
    },

    {
      skillImg: github,
      skillName: "Github",
    },
    {
      skillImg: python,
      skillName: "Python",
    },
    {
      skillImg: sqlite,
      skillName: "Sqlite",
    },
    {
      skillImg: bigquery,
      skillName: "Google Big query",
    },
    {
      skillImg: R,
      skillName: "R Language",
    },
    {
      skillImg: AWS,
      skillName: "AWS",
    },
    {
      skillImg: Airflow,
      skillName: "Airflow",
    },
  ];

  const refs = useRef(skills.map(() => React.createRef()));
  const desktopRefs = useRef(skills.map(() => React.createRef()));

  // FOR MOBILE VIEW
  useEffect(() => {
    refs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref.current,
        { x: 200, y: -40, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          // duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 110%",
            end: "bottom center",
            scrub: true,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  // FOR DESKTOP VIEW
  useEffect(() => {
    desktopRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref.current,
        { x: 200, y: -40, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 110%",
            end: "bottom center",
            scrub: true,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="skills" id="skills">
      <div className="container">
        <h2>My Skills</h2>
        <p>
          As a <strong>Senior Data Analyst</strong>, I translate complex
          datasets into actionable insights that drive strategic business
          decisions. With a strong foundation in statistical modeling, data
          visualization, and advanced SQL, I excel at uncovering hidden trends
          and crafting compelling data narratives. My passion lies in empowering
          organizations to leverage their data effectively, leading to
          measurable improvements in efficiency, profitability, and customer
          satisfaction.
        </p>

        <h3>Technological Proficiencies</h3>

        <div className="techs desktop">
          {skills.map((skill, i) => (
            <div key={i} className="tech" ref={desktopRefs.current[i]}>
              <img src={skill.skillImg} />
              <p>{skill.skillName}</p>
            </div>
          ))}
        </div>

        <div className="techs mobile">
          {skills.map((skill, i) => (
            <div key={i} className="tech" ref={refs.current[i]}>
              <img src={skill.skillImg} />
              <p>{skill.skillName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
