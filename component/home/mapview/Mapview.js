import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import MapviewImage from "/public/images/home/map-view.png";
//import MapviewVideo from "/public/videos/map_video.mp4";
function Mapview() {
  return (
    <div className="container mt-5 pt-2">
      <div className=" row  align-items-center">
        <section
          // initial={{ opacity: 0, x: 180, z: 180 }}
          // animate={{ opacity: 1, x: 0, z: 0 }}
          // transition={{ duration: 3 }}
          className="col-md-8 col-sm-12 "
        >
          <div className="  my-4 py-2">
            <h3
              className="my-4 py-2 fs-2  fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
            >
              The platform that connects brands with influencers.
            </h3>
            <p className="py-2    fw-bolder">
              People trust people. Streamline your influencer marketing
              campaigns with Narrators’ dual-sided platform fueled by a database
            </p>

            {/* <button className="btn btn-bg-color rounded-pill text-white  ms-2 my-4 py-2 p-3 fs-4 fw-bolder  ml-5">
              REQUEST A DEMO
            </button> */}
          </div>
        </section>
        <section
          // initial={{ opacity: 0, x: -180, z: 180 }}
          // animate={{ opacity: 1, x: 0, z: 0 }}
          // transition={{ duration: 3 }}
          className="col-md-4  col-sm-12  "
        >
          {/* <Image src={MapviewImage} alt="Picture of the author" /> */}
          <div className="my-4 py-2">
            <video
              width=" 360px"
              height="480px"
              autoPlay
              muted
              src={"/videos/map_video.mp4"}
            />
          </div>

          {/* <iframe
            src="https://streamable.com/e/trgavb?autoplay=1"
            allowFullScreen
          ></iframe> */}
        </section>
      </div>
    </div>
  );
}

export default Mapview;
