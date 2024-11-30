import React, { useState } from "react";
import Button from "./Button";
import QRcard from "./QRcard";

// import qr from "qr-image";

export default function QRpage() {
  const [outPut, setOutPut] = useState("");
  function showQRcode() {
    setOutPut(<QRcard />);
  }

  return (
    <div className="flex flex-row bg-slate-100 flex-wrap min-w-full justify-center h-[100%]">
      <section className="w-[60%] min-w-full sm:min-w-full lg:min-w-[360px] bg-slate-600 px-[1.5rem] justify-center">
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

        <form action="" className="flex flex-col ">
          <fieldset className=" flex flex-row gap-[20%] justify-center py-[1rem] rounded-[9px]">
            <Button
              type="button"
              onClick={showQRcode}
              value="generate QR"
              className="btn bg-blue-950 w-[100%] border-none px-[3rem] "
            />
            <button
              type="reset"
              className="hover:text-white btn bg-yellow-300 text-black  border-none px-[2rem] "
            >
              clear
            </button>
          </fieldset>

          <textarea
            type="text"
            className="w-full h-[90px] text-center py-[0.8rem] mb-[2rem] border border-gray-800 rounded-lg"
            id="input"
            name="input"
            placeholder="Type your message or link here & click convert to get your unique QR-code"
          ></textarea>
        </form>
      </section>
      {outPut}
    </div>
  );
}
