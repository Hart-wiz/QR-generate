import React from "react";
import Button from "../Button.jsx";

export default function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="z-index-3hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              <b>OpenQR: Your Pocket-Sized Link...</b>
              <br></br>
              OpenQR is a free, open-source tool that simplifies digital
              sharing. By converting text, links, and numbers into scannable QR
              codes, we bridge the gap between the digital and physical worlds.
              No sign-up, no hassle, just easy, instant QR code generation.
            </p>
            <Button
              to="/QRpage"
              className="btn btn-primary"
              value="Get Started"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
