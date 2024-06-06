import React from "react";
import assetheader from "../asset/header.png";
function Hero() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={assetheader}
          className="max-w-full max-h-full mb-max -mr-7 -mt-5  shadow-8xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Travel Keraton</h1>
          <p className="py-6">
           Travel Keraton hadir untuk mewujudkan liburan impian Anda. Kami menawarkan berbagai paket wisata lengkap ke berbagai destinasi menarik di Indonesia dan mancanegara.
          </p>
          <button className="btn btn-active btn-neutral">Lihat Detail</button>
        </div>
      </div>
    </div>
    
  );
}

export default Hero;
