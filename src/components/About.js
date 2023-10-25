import React from "react";

function About({ bio, github, linkedin, image }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
