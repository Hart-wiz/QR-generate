import React, { useState } from "react";
import Button from "./Button";
import { QRCodeCanvas } from "qrcode.react";

export default function QRpage() {
  const [outPut, setOutPut] = useState("");

  function showQRcode() {
    setOutPut(<QRcard />);
  }

  const [text, setText] = useState("");

  // for QRcard section to show output
  function QRcard() {
    function downloadFile() {
      // select the QRcode canvas
      const canvas = document.querySelector("canvas");

      // convert the canvas to PNG data URL
      const url = canvas.toDataURL("image/png");
      // create an anchor tag
      const link = document.createElement("a");
      // set the href
      link.href = url;
      // set the download attribute
      link.download = "qrcode.png";
      // trigger the download
      link.click();
    }
    return (
      <section className="bg-yellow-600 w-auto  justify-items-center min-w-[360px] py-[2rem]   ">
        <div className="bg-slate-950 w-[200px] flex-row h-[200px] md:mt-[6rem] ">
          <QRCodeCanvas value={text} size={200} />
        </div>

        <Button
          onClick={downloadFile}
          className="btn bg-green-950 border-none text-white mt-[0.5rem]"
          value="download QR"
        />
      </section>
    );
  }

  // for the genaral page task
  return (
    <div className="flex flex-row bg-yellow-600 flex-wrap min-w-full justify-center h-[100%]">
      <section className="w-[60%] min-w-full sm:min-w-full lg:min-w-[360px] bg-opacity-70 bg-blue-700 px-[1.5rem] justify-center">
        <div>
          <div className="text-white  w-full ">
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
        </div>
        <form action="" className="flex flex-col ">
          <fieldset className=" flex flex-row gap-[20%] justify-center py-[1rem] rounded-[9px]">
            <Button
              type="button"
              onClick={showQRcode}
              value="generate QR"
              className="btn bg-blue-950 text-white w-[100%] border-none px-[3rem] "
            />
            <button
              type="reset"
              className=" btn bg-yellow-300 text-black  border-none px-[2rem] hover:text-white hover:bg-yellow-600 "
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
            onChange={(e) => setText(e.target.value)}
          >
            {text}
          </textarea>
        </form>
      </section>
      {outPut}
    </div>
  );
}
