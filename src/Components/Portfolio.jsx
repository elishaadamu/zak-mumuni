import React, { useState } from "react";
import TS from "../assets/portfolio/ts.jpg";
import clustering from "../assets/portfolio/clustering.jpg";
import PCA from "../assets/portfolio/pca.jpg";
import Classification from "../assets/portfolio/class.jpg";
import Impact from "../assets/portfolio/impact.jpg";
import Markov from "../assets/portfolio/markov.jpg";
import "./Styles/portfolio.scss";
import Project from "./Project";
import { Link } from "react-scroll";

function Portfolio() {
  const [clickedWork, setClickedWork] = useState(null);
  const [showWorkDetails, setShowWorkDetails] = useState(false);

  const works = [
    {
      workImg: TS,
      name: "Time Series Forecasting",
      index: "01",

      link: "https://github.com/zakariDS/portfolio/blob/main/DS_forecasting.ipynb",
      description:
        "Predicted future freeway traffic congestion using LSTM and SARIMA models for St. Louis, Missouri Metropolitan Area. ",
    },
    {
      workImg: clustering,
      name: "Clustering",
      index: "02",

      link: "https://github.com/zakariDS/portfolio/blob/main/DS_clustering_Analysis.ipynb",
      description:
        "I used k-means clustering to analyze the concentration  of socio-economically disadvantaged groups in Honolulu, Hawaii Metropolitan Area.",
    },
    {
      workImg: PCA,
      name: "Principal Components Analysis",
      index: "03",
      link: "https://github.com/zakariDS/portfolio/blob/main/DS_pca.ipynb",
      description:
        "I used PCA to combine various factors that were used to measure transportation disadvantage into a one-dimensional factor that explained most of the variance in the data for, Honolulu, Hawaii Metropolitan Area.",
    },
    {
      workImg: Classification,
      name: "Classification",
      index: "04",
      link: "https://github.com/zakariDS/portfolio/blob/main/DS_classification.ipynb",
      description:
        "I used binary logistic regression, KNN, SVM, and Decision Trees to predict the likelihood of roadways being congested in St. Louis, Missouri Metropolitan Area.",
    },
    {
      workImg: Impact,
      name: "Impact Analysis",
      index: "05",
      link: "https://github.com/zakariDS/portfolio/blob/main/IA_impact.ipynb",
      description:
        "I employed Bayesian Structural Time-Series (BSTS) model to assess the impact of work zones on urban freeway traffic congestion.",
    },
    {
      workImg: Markov,
      name: "Conjestion Transition ",
      index: "06",
      link: "https://github.com/zakariDS/portfolio/blob/main/TA_congestion_transition.ipynb",
      description:
        "I used Markov chain model to analyze the transition from one state of urban traffic congestion to another. ",
    },
  ];

  return (
    <>
      <div className="portfolio" id="portfolio">
        <div className="container">
          <h2>Portfolio Showcase</h2>

          <div className="works">
            {works.map((work, i) => (
              <div
                className="work"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="work-img">
                  <a>
                    <img src={work.workImg} alt={work.name} />
                  </a>

                  <div className="work-num">
                    <span>{work.index}</span>
                  </div>
                </div>

                <div className="work-details">
                  <p className="my-10 text-center text-2xl font-bold ">
                    {work.name}
                  </p>
                  <div className="text-center text-gray-400 description">
                    <p> {work.description}</p>
                  </div>
                  <div className="desc">
                    <a href={work.link} target="_blank">
                      <button>View Project</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showWorkDetails && (
        <Project
          project={clickedWork}
          setShowWorkDetails={setShowWorkDetails}
        />
      )}
    </>
  );
}

export default Portfolio;
