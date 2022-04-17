import Image from "next/image";
import React from "react";
import { Rotate } from "react-reveal";

function VideoIntroducing() {
  return (
    <section className=" ">
      <section className="container my-3">
        <div className="row align-items-center">
          <section className="col-md-6 ">
            {/* <Rotate top right> */}
            <div className=" my-3 py-1">
              <h1
                className="my-3 py-1   fs-1     fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                The platform that connects brands with influencers.
              </h1>
              <p className="py-2 fs-6 fw-bolder">
                People trust people. Streamline your influencer marketing
                campaigns with Narrators’ dual-sided platform fueled by a
                database of 500K influencers. Headquartered in Singapore, the
                Narrators award-winning influencer marketing platform operates
                in several markets across the region including Malaysia,
                Indonesia, Philippines, South Korea, Hong Kong and Thailand to
                name a few.
              </p>
            </div>
            {/* </Rotate> */}
          </section>
          <section className="col-md-6 ">
            {/* <Rotate top left> */}
            <div className="my-4 py-2">
              <iframe
                className="w-100"
                height="420"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
            {/* </Rotate> */}
          </section>
        </div>
      </section>
    </section>
  );
}

export default VideoIntroducing;
