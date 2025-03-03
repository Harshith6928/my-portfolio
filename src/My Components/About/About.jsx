import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../CSS/about.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-left">
        <div id="pic">

        </div>
        <h1>Harshith Pinnamshetti</h1>
        <p>Full Stack Developer</p>
        <hr />
        <aside>
          <div className="info">
            <div className="icon">
              <EmailIcon></EmailIcon>
            </div>
            <div className="sub-info">
              <p className="up">Email</p>
              <p className="down">pinnamshettyh@gmail.com</p>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <LocalPhoneIcon></LocalPhoneIcon>
            </div>
            <div className="sub-info">
              <p className="up">Mobile</p>
              <p className="down">+91 9063600750</p>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <LinkedInIcon></LinkedInIcon>
            </div>
            <div className="sub-info">
              <p className="up">LinkedIn</p>
              <p className="down">linkedin.com/in/harshithpinnamshetti</p>
            </div>
          </div>
          <div className="info">
            <div className="icon">
              <LocationOnIcon></LocationOnIcon>
            </div>
            <div className="sub-info">
              <p className="up">Location</p>
              <p className="down">Hyderabad</p>
            </div>
          </div>
        </aside>
      </section>
      <section className="about-right">
        <h1>About Me :</h1>
        <p>
          My name is Harshith, and I am from Korutla, Jagitial District,
          currently residing in Hyderabad. I hold a Bachelor's degree in
          Electrical and Electronics Engineering. After graduation, I further
          enhanced my skills by completing a Java Full Stack course, where I
          gained in-depth knowledge of Java, SQL, and web technologies. I am a
          disciplined, self-motivated, and goal-oriented person, always striving
          for continuous learning and improvement. My hobbies include listening
          to music and pencil sketching, which reflect my creative side.
        </p>
        <h3>Education :</h3>
        <article>
            <div className="education">
                <h3>KU College of Engineering and Technology</h3>
                <p>2020-2024</p>
                <p>Electrical and Electronics Engineering</p>
                <p>cgpa : 7.61</p>
            </div>
            <div className="education">
                <h3>Narayana Junior College</h3>
                <p>2017-2019</p>
                <p>Intermediate</p>
                <p>cgpa : 9.3</p>
            </div>
            <div className="education">
                <h3>Akshara High School</h3>
                <p>2016-2017</p>
                <p>SSC</p>
                <p>cgpa : 9.0</p>
            </div>
        </article>
      </section>
    </div>
  );
};

export default About;
