import React from "react";
import profile from "../../images/p.png";
import { SocialIcon } from "react-social-icons";

const HeroPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="  flex gap-32 lg:flex-row-reverse">
          <div>
            <img src={profile} className=" pt-0 mt-0 w-full" />
          </div>
          <div>
            <h1 className="text-2xl text-start">Nice To Meet You</h1> <br />
            <h1 className="text-6xl text-start font-medium text-sky-600">
              Hi I'm Al-Amin
            </h1>
            <br />
            <h1 className="text-3xl text-start">
              I am Full Stack Web Developer
            </h1>
            <br />
            <div className="flex gap-6">
              <button className="btn btn-primary">Hire Me</button>
              <button className="btn btn-outline btn-primary">
                Download Resume
              </button>
            </div>
            <br />
            <div className="flex gap-3 ">
              <SocialIcon url="https://linkedin.com/in/jaketrent" />
              <SocialIcon url="https://github.com/in/jaketrent" />
              <SocialIcon url="https://facebook.com/in/jaketrent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
