import Image from "next/image";
import React from "react";
import { Roll, Rotate } from "react-reveal";
import OverViewImage3 from "../../../../public/images/home/overview-image-3.png";
function HomeOverview3() {
  return (
    <section>
      {/* <h3 className="text-center p-3   fs-1  my-6  fw-bolder ">
        Make the most of your influencer marketing program with
      </h3> */}
      <section className="container ">
        <div className="row align-items-center">
          <section className="col-md-6 ">
            {/* <Roll left>
              <div className="my-4 py-2">
                <Image src={OverViewImage3} alt="Picture of the author" />
              </div>
            </Roll> */}
            <div className="my-2 py-2">
              <video
                width=" 411px"
                height="411px"
                borderRadius="15px"
                autoPlay
                muted
                src={"/videos/video-demo.mp4"}
              />
            </div>
          </section>
          <section className="col-md-6 ">
            {/* <Roll right> */}
            <div className="  my-2 py-2">
              <h2
                className="    whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                Smart camp monitoring
              </h2>
              <p>
                People trust people. Streamline your influencer marketing
                campaigns with Narrators’ dual-sided platform fueled by a
                database of 500K influencers. Headquartered in Singapore, the
                Narrators award-winning influencer marketing platform operates
                in several markets across the region.
              </p>
            </div>
            {/* </Roll> */}
          </section>
        </div>
      </section>
    </section>
  );
}

export default HomeOverview3;
