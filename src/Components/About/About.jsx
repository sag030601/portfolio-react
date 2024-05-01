import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/meFullNew.jpg";

export const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              suscipit, asperiores, vero ab aliquam deleniti voluptates maiores
              fugit corporis enim, ex vel molestiae quidem cumque necessitatibus
              amet nisi quod voluptatibus!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              temporibus voluptate aspernatur sapiente corrupti distinctio id
              quasi quam ea corporis! Voluptatibus illo laboriosam perferendis
              nihil consectetur repellendus, enim vel ipsam!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
                <h1>Mern Certification</h1>
                <p>Lakshay Institute</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Bachelor of Science , IT</h1>
                <p>Mumbai University</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3 Full-stack Projects</h1>
                <p>Mern stack</p>
            </div>
        </div>
    </div>
  );
};
