import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <div className="links">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && <a href={data.demoLink}>Live Demo</a>}
      </div>
    </div>
  );
};

const Github = () => {
  return (
    <MacWindow>
      <div className="cards">
        {githubData.map((project) => (
          <GitCard key={project.title} data={project} />
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;
