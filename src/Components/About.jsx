import React from "react";
// import Me from "../assets/me.jpg";
import "./Styles/about.scss";

function About() {
  const myDetails = [
    {
      heading: "My Journey",
      detail: `With a <strong>keen eye for detail</strong> and a dedication to uncovering meaningful patterns, I specialize in transforming complex data into clear, actionable insights. My journey in data analysis began with a curiosity for understanding how information drives outcomes, which quickly turned into a full-fledged passion for building interactive and engaging <strong>data-driven solutions.</strong>`,
    },
    {
      heading: "My Approach",
      detail: `Over the years, I've honed my skills in various aspects of <strong>data analysis</strong>, from designing intuitive dashboards to optimizing data models and ensuring data accuracy. I believe in the power of <strong>clean, efficient data processing and innovative analytical approaches</strong> to solve complex business problems and bring insights to life.`,
    },
    {
      heading: "Why Hire Me",
      detail: `<strong>Results-driven Senior Data Analyst</strong> skilled at transforming complex data into actionable insights to inform strategic decisions. Expertise in ETL, statistical analysis, and dynamic dashboard development (Python, R, Tableau, React). Proven ability to lead data initiatives, ensure data governance, and collaborate cross-functionally to define KPIs and deliver impactful reports. Passionate about uncovering insights from large datasets to drive innovation and growth.`,
    },
    {
      heading: "Let's Connect",
      detail: `I invite you to review my portfolio showcasing my professional work. Please don't hesitate to contact me to explore potential collaborations or discuss any inquiries. I look forward to the opportunity to create impactful solutions together.`,
    },
  ];

  return (
    <div className="about" id="about">
      <div className="container">
        <h2>About Me</h2>

        <div className="my-info">
          <div className="my-img">
            <img
              src={
                "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1718024953~exp=1718028553~hmac=0bd93a854c2277aa7c72008733a452d6fa829c4db8ca15f88464da93dc4c6e05&w=740"
              }
              alt="me"
            />
          </div>

          <div className="details">
            {myDetails.map((detail, i) => (
              <div key={i} className="detail">
                <h3>{detail.heading}</h3>
                <p dangerouslySetInnerHTML={{ __html: detail.detail }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
