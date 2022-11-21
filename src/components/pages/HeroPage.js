import React from "react";
import profile from "../../images/Dol.png";
import { SocialIcon } from "react-social-icons";
import { FaLongArrowAltDown } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-sky-100">
        <div className=" hero-content flex-col  gap-28 lg:flex-row-reverse">
          <div>
            <div>
              <img src={profile} className="w-[400px] -translate-y-8 " />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-start">Nice To Meet You</h1> <br />
            <h1 className="text-6xl text-start font-medium text-sky-600">
              Hi I'm Al-Amin
            </h1>
            <br />
            <h1 className="text-3xl text-start">
              I am a Full Stack Web Developer
            </h1>
            <br />
            <div className="flex gap-6">
              <button className="btn btn-primary">Hire Me</button>
              <button className="btn btn-outline btn-primary">
                <FaLongArrowAltDown></FaLongArrowAltDown> Download Resume
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
