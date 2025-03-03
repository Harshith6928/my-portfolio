import React from "react";
import Bio from "../Data/data.js";
import { ReactTyped } from "react-typed";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../CSS/home.css'

const Home = () => {

  const openSocial = (value) => {
    const a = value;
    if(a === "resume"){
      window.open("/Resume 2025.pdf", "_blank");
    } else if(a === "linkedin"){
      window.open("https://www.linkedin.com/in/harshithpinnamshetti/", "_blank");
    } else if(a === "github"){
      window.open("https://github.com/Harshith6928/", "_blank");
    }
    
  }

  return (
    <div className="home">
      <article>
        <div className="profile_pic"></div>
      </article>
      <div className="intro">
        <h1>{Bio.fullName}</h1>
        <h3>
          And I'm
          <span>
            <ReactTyped
              strings={Bio.roles}
              typeSpeed={80} // Speed of typing
              backSpeed={40} // Speed of deleting
              loop
            />
          </span>
        </h3>
        <p>
          Aspiring Software Engineer with a bachelor’s degree in Electrical and
          Electronics Engineering, seeking to leverage my skills in coding and
          problem-solving. Eager to contribute to solving real-life business
          problems and enhance business spend management solutions through
          innovative technology.
        </p>
        <aside>
          <button onClick={() => {openSocial("resume")}}>Resume</button>
          <span onClick={() => {openSocial("linkedin")}}>
            <LinkedInIcon></LinkedInIcon>
          </span>
          <span onClick={() => {openSocial("github")}}>
            <GitHubIcon></GitHubIcon>
          </span>
        </aside>
      </div>
    </div>
  );
};

export default Home;
