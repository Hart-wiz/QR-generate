import React from "react";

import Button from "./Button.jsx";

export default function About() {
  return (
    <>
      <div>
        About Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        sapiente eius quos, id quam ratione quae nam maiores officiis vitae
        error velit nostrum ut asperiores ducimus non iste, exercitationem
        culpa?
      </div>
      <Button to="/" className="btn bg-blue-950" value="back to home" />
    </>
  );
}
