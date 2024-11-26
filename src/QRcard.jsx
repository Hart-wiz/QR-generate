import React from "react";
import Button from "./Button.jsx";

export default function QRcard() {
  return (
    <>
      <section className="bg-yellow-600 w-auto justify-items-center min-w-[360px] py-[2rem] my-[2rem]  mr-[0.9rem]">
        <div className="bg-slate-950 w-[200px] h-[200px] "></div>
        <Button
          to="download"
          className="btn bg-green-950 border-none mt-[0.5rem]"
          value="download QR"
        />
      </section>
    </>
  );
}
