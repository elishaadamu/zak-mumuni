import React, { useState } from "react";
import TS from "../assets/portfolio/ts.jpg";
import clustering from "../assets/portfolio/clustering.jpg";
import PCA from "../assets/portfolio/pca.jpg";
import Classification from "../assets/portfolio/class.jpg";
import Impact from "../assets/portfolio/impact.jpg";
import Markov from "../assets/portfolio/markov.jpg";
import DataPipeline from "../assets/portfolio/traffic-pipeline.png";
import TrafficAnalysis from "../assets/portfolio/traffic-analysis.png";
import KPIMonitoring from "../assets/portfolio/kpi.png";
import TimeSeries from "../assets/portfolio/time-series-forecasting.png";
import ClusterAnalysis from "../assets/portfolio/clustering.png";
import CountyData from "../assets/portfolio/county-data.png";
import "./Styles/portfolio.scss";
import Project from "./Project";
import { Link } from "react-scroll";

function Portfolio() {
  const [clickedWork, setClickedWork] = useState(null);
  const [showWorkDetails, setShowWorkDetails] = useState(false);

  const works = [
    {
      workImg: DataPipeline,
      name: "Data Pipeline Orchestration",
      index: "01",
      link: "https://github.com/zmtcampo/traffic_pipeline_dbt_airflow",
      description:
        "Built data pipelines using Python, DBT, and Airflow for real-time traffic analysis",
    },
    {
      workImg: TrafficAnalysis,
      name: "Traffic Analytics Project",
      index: "02",
      link: "https://github.com/zmtcampo/Traffic-Analysis-Project",
      description:
        "This data analysis project aims to provide insights into the traffic performance of EWG metropolitan region, located between Missouri and Illinois.",
    },
    {
      workImg: KPIMonitoring,
      name: "KPI Monitoring",
      index: "03",
      link: "https://github.com/zmtcampo/react_dashboard",
      description:
        "Built a custom analytics dashboard using Python and React.js to monitor KPIs, adopted company-wide by 5 teams for data-driven decision",
    },
    {
      workImg: TimeSeries,
      name: "Time Series Prediction",
      index: "04",
      link: "https://github.com/zmtcampo/time-series-forecasting/blob/main/DS_forecasting.ipynb",
      description:
        "Developed LSTM and SARIMA models to predict future traffic congestion in the St. Louis, MI metropolitan area",
    },
    {
      workImg: ClusterAnalysis,
      name: "Cluster Analysis",
      index: "05",
      link: "https://github.com/zmtcampo/cluster_analysis/blob/main/DS_clustering_Analysis.ipynb",
      description:
        "Implemented binary logistic regression, KNN, SVM, and Decision Trees in Python to predict roadway congestion in the St. Louis, Missouri metropolitan area",
    },
    {
      workImg: CountyData,
      name: "County Data Analytics.",
      index: "06",
      link: "https://github.com/zmtcampo/fc-data-project",
      description:
        "Reduced ad-hoc data requests by building self-service analytics apps with Shiny",
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
