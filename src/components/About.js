import React from "react";

function About(props) {
  // if (!props.warn) {
  //   return null;
  // }
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length >1 ?<p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a><br />
        <a href={props.linkedin}>{props.linkedin}</a>
      </>
    </div>
  );
}


export default About;
