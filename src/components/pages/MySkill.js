import React from "react";
import SkillBar from "react-skillbars";

const MySkill = () => {
  const react = [
    {
      type: "React",
      level: 80,
      color: {
        bar: "#3498db",
        title: { text: "#fff", background: "#2980b9", percent: "#000000" },
      },
    },
  ];
  const javaScript = [
    {
      type: "JavaScript",
      level: 80,
      color: {
        bar: "#4288d0",
        title: { text: "#fff", background: "#124e8c" },
      },
    },
  ];
  const nodejs = [
    {
      type: "Node JS",
      level: 75,
      color: {
        bar: "#2c3e50",
        title: { text: "#fff", background: "#2c3e50" },
      },
    },
  ];

  const mongodb = [
    {
      type: "MongoDB",
      level: 75,
      color: {
        bar: "#5a68a5",
        title: { text: "#fff", background: "#46465e" },
      },
    },
  ];

  const html = [
    {
      type: "HTML-5",
      level: 95,
      color: {
        bar: "#525252",
        title: { text: "#fff", background: "#333333" },
      },
    },
  ];
  const css3 = [
    {
      type: "CSS3",
      level: 90,
      color: {
        bar: "#2ecc71",
        title: { text: "#fff", background: "#27ae60" },
      },
    },
  ];
  const bootstrap = [
    {
      type: "Bootstrap",
      level: 80,
      color: {
        bar: "#3498db",
        title: { text: "#fff", background: "#2980b9" },
      },
    },
  ];
  const tailwind = [
    {
      type: "Tailwind",
      level: 85,
      color: {
        bar: "#3498db",
        title: { text: "#fff", background: "#2980b9" },
      },
    },
  ];
  const daisy = [
    {
      type: "Daisy UI",
      level: 90,
      color: {
        bar: "#3498db",
        title: { text: "#fff", background: "#2980b9" },
      },
    },
  ];
  const express = [
    {
      type: "Express Js",
      level: 75,
      color: {
        bar: "#3498db",
        title: { text: "#fff", background: "#2980b9" },
      },
    },
  ];
  const firbase = [
    {
      type: "Firebase",
      level: 70,
      color: {
        bar: "#3498db",
        title: { text: "#fff", background: "#2980b9" },
      },
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-semibold pt-10  text-center ">
        <span className="text-sky-600">My</span> Skill
      </h1>
      <div className="grid grid-cols-3 gap-10 ml-32 mr-32 pt-10">
        <SkillBar skills={react} />
        <SkillBar skills={javaScript} />
        <SkillBar skills={nodejs} />
        <SkillBar skills={mongodb} />
        <SkillBar skills={html} />
        <SkillBar skills={css3} />
        <SkillBar skills={bootstrap} />
        <SkillBar skills={tailwind} />
        <SkillBar skills={daisy} />
        <SkillBar skills={express} />
        <SkillBar skills={firbase} />
      </div>
    </div>
  );
};

export default MySkill;
