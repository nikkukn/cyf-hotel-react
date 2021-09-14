import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.infoArray.map((str, index) => (
        <li key={index}>{str}</li>
      ))}
    </ul>
  );
};

export default Footer;
