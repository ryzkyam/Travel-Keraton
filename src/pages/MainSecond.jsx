import React from "react";
import mainscd from '../asset/blue-bg-second-section.svg'
function mainSecond() {
  return (
    <div className="container -mt-80  mx-auto px-4 py-12 ">
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-bold text-center">
        Popular package 
      </h1>
      <p className="mb-10">
        choose from our curated List of trendsetting travel adventures!
      </p>
      <div className="flex gap-10 flex-wrap justify-center">
        {/* Add card components here */}
        <div className="card w-80 glass ">
          <figure>
            <img
              src="https://th.bing.com/th/id/OIP.Ncs3sflgkBDsBP6Ww5B9MQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">VILLA BANDUNG</h2>
            <p>Explore now!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral"><a href="/detailvila">detaills</a></button>
            </div>
          </div>
        </div>
        <div className="card w-80 glass">
          <figure>
            <img
              src="https://th.bing.com/th/id/OIP.QIt_2FPEZjLqh1mGpvFZyQHaFj?pid=ImgDet&w=207&h=155&c=7&dpr=1,1"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tangkuban Perahu</h2>
            <p>Explore now!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-80 glass">
          <figure>
            <img
              src="https://th.bing.com/th/id/OIP.3UMCOHo9nPkcu1Q2kzDO7QHaEK?rs=1&pid=ImgDetMain"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">cappadocia turkey</h2>
            <p>Explore now!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default mainSecond;
