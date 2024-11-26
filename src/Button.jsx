import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <>
      <Link to={props.to}>
        <button
          className={props.className}
          onClick={props.onClick}
          type={props.type}
        >
          {props.value}
        </button>
      </Link>
    </>
  );
}
