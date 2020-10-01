import React from "react";
import { heroBg } from "../../images/homeImages";

export default function HeroSection() {
  return (
    <section className="hero">
      <div
        className="hero-background h-100 w-100 all-center-column"
        style={{ background: `url(${heroBg})` }}
      >
        <div className="caption all-center-column">
          <div className="title bold">The power of technology</div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            repellendus.
          </div>
        </div>
        <div className="buttons mt-5 all-center">
          <button className="btn btn-primary bg-lg mx-2">Sign up Free</button>
          <button className="btn btn-secondary bg-lg mx-2">Login</button>
        </div>
      </div>
    </section>
  );
}
