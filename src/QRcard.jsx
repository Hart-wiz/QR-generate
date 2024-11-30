import React from "react";
import Button from "./Button.jsx";

export default function QRcard() {
  function downloadFile() {
    const link = document.createElement("a");
    link.href = "/qr_image.png";
    link.download = "qr_image.png";
    link.click();
  }
  return (
    <>
      <section className="bg-yellow-600 w-auto  justify-items-center min-w-[360px] py-[2rem]   ">
        <div className="bg-slate-950 w-[200px] h-[200px] md:mt-[6rem] ">
          <img src="QRcodeback\qr_image.png" alt="qrcode" className="w-full" />
        </div>

        <Button
          onClick={downloadFile}
          className="btn bg-green-950 border-none mt-[0.5rem]"
          value="download QR"
        />
      </section>
    </>
  );
}
