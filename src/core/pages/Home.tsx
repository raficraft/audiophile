import React from "react";
import Hero_home from "../Component/Hero_home/Hero_home";
import Navigation_home from "../Component/Navigation_home/Navigation_home";

export default function Home() {
  return (
    <>
      <Hero_home></Hero_home>
      <section className="wrapper_layout">
        <div className="wrapper_inside">
          <div className="home_content">
            <Navigation_home></Navigation_home>
          </div>
        </div>
      </section>
    </>
  );
}
