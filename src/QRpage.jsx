import React, { useState } from "react";
import Button from "./Button";
import QRcard from "./QRcard";

export default function QRpage() {
  const [outPut, setOutPut] = useState("helloooo");
  function result() {
    setOutPut(<QRcard />);
  }
  return (
    <div className="flex flex-row bg-slate-100 flex-wrap min-w-[360px] justify-center h-auto">
      <section className="w-[60%] min-w-[360px] bg-slate-600 px-[1.5rem] justify-center">
        <div className="text-white opacity-65 w-full ">
          <h1 className="text-[0.9rem] md:text-[3rem] py-[0.9rem]">
            OpenQR:
            <h2 className="text-[0.9rem] pt-[0.9rem] md:text-[3rem]">
              Your Quick QR Code Solution
            </h2>
          </h1>
          <ul className="text-[0.9rem] md:text-[1rem]">
            <li>
              <b>Simple Input: </b> Enter your text, link, or number.
            </li>
            <li>
              <b>Instant Generation: </b>Click a button, and your QR code is
              ready.
            </li>
            <li>
              <b>Easy Sharing: </b> Download, print, or share directly.
            </li>
          </ul>

          <h1>Try OpenQR today and experience the future of sharing.</h1>
        </div>

        {outPut}

        <form action="" className="flex flex-col ">
          <fieldset>
            <label htmlFor="input"> Type in your link or text </label>

            <Button
              type="button"
              onClick={result}
              value="generate QR"
              className="btn bg-blue-950 ml-[40%] my-[0.9rem]"
            />
          </fieldset>

          <textarea
            className="w-full h-[90px] text-center py-[0.8rem] mb-[2rem] border border-gray-800 rounded-lg"
            id="input"
            name="input"
            placeholder="Type your message or link here & click convert to get your unique QR-code"
          ></textarea>
        </form>
      </section>
    </div>
  );
}
