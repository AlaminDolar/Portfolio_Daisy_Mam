import React from "react";
import aboutPic from "../../images/About.png";
import { FaLongArrowAltDown } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-teal-100">
      <h1 className="text-5xl font-semibold pt-10 text-sky-600 text-center">
        About <span className="text-black"> Me</span>
      </h1>
      <div className="hero min-h-screen lg-md:translate-x-9  lg:-translate-y-20">
        <div className="hero-content lg:gap-28 flex-col lg:flex-row">
          <img src={aboutPic} className="max-w-sm translate-x-9" />
          <div className="">
            <p className=" text-justify lg:w-5/6">
              Hello I am a full stack developer.I have completed my graduation
              in Computer Science and Engineering. I always wanted to be a
              developer. After discovering my passion for web development, I
              couldn’t get enough. I made websites as my personal projects. I’m
              looking forward to bringing that passion to a full-time role in a
              company.
            </p>
            <br />
            <p className="text-justify lg:w-5/6">
              I would like to bring your attention to my key strengths- • Strong
              command in HTML5, CSS3, Bootstrap, JavaScript, ES6, React, React
              Router, Bootstrap, Firebase, Node.js, Express, MongoDB • Knowledge
              of Languages: JavaScript, Python, C • I have some good knowledge
              in Object-oriented programming and basic problem-solving • I have
              done 5+ personal projects in web development • I have done my
              university project on web development. One thing I can assure you
              is that I am able to grasp new concepts quickly
            </p>
            <p className="text-start pt-5">
              <button className="btn btn-outline btn-primary">
                <FaLongArrowAltDown></FaLongArrowAltDown> Download Resume
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
