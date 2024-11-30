import React from "react";
import Button from "../Button";

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="bg-white h-screen ">
      <h1 className="text-7xl text-center text-wrap pt-32">404 Not Found</h1>

      <Button to="/" className="btn bg-blue-950" value="back to home" />
    </div>
  );
}
