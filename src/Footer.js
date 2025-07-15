import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      Coded by{" "}
      <a href="https://www.linkedin.com/in/sandramercadal/">Sandra Mercadal</a>{" "}
      open-sourced on
      <a href="https://github.com/sandramercadal/Vanilla-Weather-App">
        {" "}
        Github
      </a>{" "}
      and hosted on{" "}
      <a href="https://github.com/sandramercadal/Vanilla-Weather-App">
        Netlify{" "}
      </a>
    </div>
  );
}
