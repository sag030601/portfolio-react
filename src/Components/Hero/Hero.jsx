import React from "react";
import profile_img from "../../assets/me.jpeg";
import resumePDF from "../../assets/Resume.pdf"; // Import your PDF file
import './Hero.css'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumePDF; // Set the href attribute to the URL of the PDF file
    link.setAttribute('download', 'resume.pdf'); // Set the download attribute and specify the file name
    // Trigger the click event on the link element to start the download
    document.body.appendChild(link);
    link.click();
    // Remove the link from the document after the download is initiated
    document.body.removeChild(link);
  };

  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span className="span">I'm Sagar,</span> full-stack developer
      </h1>
      <p>
        Web developer proficient in MERN stack technologies, holding a BSc in
        IT. Passionate about crafting dynamic and efficient web solutions to
        meet client needs.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="https://www.linkedin.com/in/sagar-singh-88208a1b0" target="_blank" rel="noopener noreferrer">
            Connect with me
          </a>
        </div>
        <div className="hero-resume" onClick={handleDownloadResume}>My resume</div>
      </div>
    </div>
  );
};

export default Hero;
