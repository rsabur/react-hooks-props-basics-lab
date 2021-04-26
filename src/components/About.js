import React from "react";
import user from "../data/user";
import Links from "./Links"

function About(props) {
  // if (!props.warn) {
  //   return null;
  // }
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length >1 ?<p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}


export default About;
