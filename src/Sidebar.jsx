import React from "react";

export default function Sidebar() {
  return (
    <div
    //   className={`w-[300px] h-full text-white absolute bg-blue-800 ${
    //     isVisible ? "block" : "hidden"
    //   }`}
    >
      <ul className="grid gap-4 p-8">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Contact">contact</a>
        </li>
        <li>
          <a href="/About">About us</a>
        </li>
        <li>
          <a href="/Donate">Become a partner</a>
        </li>
        <li>
          <a href="http://">Others</a>
        </li>
      </ul>
    </div>
  );
}
