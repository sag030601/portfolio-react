import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import { GitHub } from "@mui/icons-material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="service-container">
        <div className="projects">
          <h1 className="no">#1</h1>
          <h1 className="title">ImageSearch (Unsplash Api)</h1>
          <p>
            Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid, similique! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Cum accusamus id sed dolore, eveniet suscipit,
            recusandae, libero soluta a beatae laborum saepe. Minus, repellendus
            quia? dolor sit, amet consectetur adipisicing elit. Dolore, aliquid.
          </p>
          <div className="github-link">
            <a href="https://github.com/sag030601/ImageSearchApi" target="_blank" >
              <GitHub  /> Github
            </a>
          </div>
          <div className="github-link">
            <a href="https://image-search-api.vercel.app/" target="_blank" >
              <PlayCircleOutlineIcon/> Live Demo
            </a>
          </div>
        </div>
        <div className="projects">
          <h1 className="no">#2</h1>
          <h1 className="title">Snappy (Real-time-chat-app)</h1>
          <p>
            Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid, similique! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Cum accusamus id sed dolore, eveniet suscipit,
            recusandae, libero soluta a beatae laborum saepe. Minus, repellendus
            quia? dolor sit, amet consectetur adipisicing elit. Dolore, aliquid.
          </p>
          <div className="github-link">
            <a href="https://github.com/sag030601/Chat-App" target="_blank" >
              <GitHub  /> Github
            </a>
          </div>
        </div>
        <div className="projects">
          <h1 className="no">#3</h1>
          <h1 className="title">BookHaven (Ecommerce)</h1>
          <p>
            Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid, similique! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Cum accusamus id sed dolore, eveniet suscipit,
            recusandae, libero soluta a beatae laborum saepe. Minus, repellendus
            quia? dolor sit, amet consectetur adipisicing elit. Dolore, aliquid.
          </p>
          <div className="github-link">
            <a href="https://github.com/sag030601/BookHaven" target="_blank" >
              <GitHub  /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
