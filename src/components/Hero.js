import React from "react";
import Typist from "react-typist"

const Navbar = () => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Hero title</h1>
        <h2 className="subtitle">Hero subtitle</h2>
        <Typist>
            Animate this text.
        </Typist>
      </div>
    </div>
  </section>
);

export default Navbar;
