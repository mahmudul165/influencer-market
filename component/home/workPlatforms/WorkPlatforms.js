import React from "react";

function WorkPlatforms() {
  return (
    <div className="container ">
      <h1 className="my-4 py-2  text-center  ">
        The platform that connects brands with influencers
      </h1>
      <div className="my-2 py-2 text-center">
        <video
          width=" 846px"
          height=" 400px"
          borderRadius="20px"
          controls
          style={{ backgroundColor: "#C4C4C4", borderRadius: "20px" }}
          autoPlay
          muted
          src={"/videos/test-video.mp4"}
        />
        <p className="my-4">
          St. Augustine College Now Offers A Fully Online English Language
          Program.
        </p>
        <button className="btn ms-3 my-4 py-2  btn btn-outline-dark rounded-pill  slider-btn-bg    ">
          Creat camping
        </button>
      </div>
    </div>
  );
}

export default WorkPlatforms;
