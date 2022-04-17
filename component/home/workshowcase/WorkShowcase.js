import React, { useRef } from "react";
import Image from "next/image";
import HeaderHomeImage from "../../../public/images/home/narrators-influencer-marketing-platform.png";
import { motion, useAnimationFrame, useSpring } from "framer-motion";

function WorkShowcase() {
  const ref = useRef(null);

  return (
    <motion.div
      initial={{ y: -250, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 3,
        type: "spring",
        stiffness: 100,
        scale: 1.5,
      }}
      className="header-bg py-5"
    >
      <div className="container  mt-5 py-3  ">
        <div className="row my-5  align-items-center  my-4 py-2">
          <section className="col-lg-6 ">
            <div className=" mt-5 pt-5">
              <h1 className="my-4 py-2 ">
                Brand Promoter and Creator are both in the same place
              </h1>
              <p className="my-2 py-2 ">
                The best way to create, manage and measure your campaigns with
                influencers
              </p>

              <div className="d-flex  ">
                <button className="btn  my-4 py-2  btn btn-outline-dark rounded-pill  slider-btn-bg    ">
                  Join Creator
                </button>
              </div>
            </div>
          </section>
          <section className="col-lg-6 ">
            <div className="gallary-image">
              {/* <Image src={HeaderHomeImage} alt="Picture of the author" /> */}
              <div className="image-gallary-1"></div>
              <div className="image-gallary-2"></div>
              <div className="image-gallary-3"></div>
              <div className="image-gallary-4"></div>
              <div className="image-gallary-5"></div>
              <div className="image-gallary-6"></div>
              <div className="image-gallary-7"></div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default WorkShowcase;
