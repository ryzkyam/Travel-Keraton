import React from "react";


function Caraousel() {
  return (
    <>
      <div className="container min-h-100vh  mx-auto px-4 py-12 ">
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl font-bold text-center">
            Popular package 
          </h1>
          <p className="mb-10">
            choose from our curated List of trendsetting travel adventures!
          </p>
          <div className="flex gap-10 flex-wrap justify-center">
            {/* Add card components here */}
            <div className="card w-96 glass ">
              <figure>
                <img
                  src="https://th.bing.com/th/id/OIP.CqYGyFZNcpts-9Q3nxCdOgHaEK?pid=ImgDet&w=182&h=102&c=7&dpr=1,1"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New Zealand</h2>
                <p>Explore now!</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Learn now!</button>
                </div>
              </div>
            </div>
            <div className="card w-96 glass">
              <figure>
                <img
                  src="https://th.bing.com/th/id/R.61f116c6f3f7be8e7d6f3cdb5e4638d4?rik=R7H7jKHMFDJVIw&riu=http%3a%2f%2ftravelingcanucks.com%2fwp-content%2fuploads%2f2017%2f05%2fTraveling_Canucks_Travel_Photography_005.jpg&ehk=n6LBIPuKPOXJo8B4qPbgN1J5M5t4XO7QWzxI6gqCOYQ%3d&risl=1&pid=ImgRaw&r=0"
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
            <div className="card w-96 glass">
              <figure>
                <img
                  src="https://th.bing.com/th/id/OIP.DwX-XE-hrrfY3wNUvM5yaQHaEK?pid=ImgDet&w=207&h=116&c=7&dpr=1,1"
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
    </>
  );
}

export default Caraousel;


