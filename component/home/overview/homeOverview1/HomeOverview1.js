import Image from "next/image";
import React from "react";
import { Roll } from "react-reveal";
import OverViewImage1 from "../../../../public/images/home/overview-image-1.png";
function HomeOverview1() {
  return (
    <section>
      {/* <Roll left>
        <h2 className="text-center p-3   fs-3  my-6  fw-bolder ">
          Make the most of your influencer marketing program with
        </h2>
      </Roll> */}
      <section
        // initial={{ opacity: 0, x: 180, z: 180 }}
        // animate={{ opacity: 1, x: 0, z: 0 }}
        // transition={{ duration: 3 }}
        className="container my-3"
      >
        <div className="row align-items-center">
          <section className="col-md-6  col-sm-12">
            {/* <Roll left>
              <div className="my-4 py-2">
                <Image src={OverViewImage1} alt="Picture of the author" />
              </div>
            </Roll> */}
            {/* <video
              width="450"
              height="420"
              autoPlay
              muted
              src="https://streamable.com/e/9z9u93?autoplay=1"
            ></video> */}

            {/* <video width="450" height="420" autoPlay muted>
              <source
                src="https://streamable.com/e/9z9u93?autoplay=1"
                type="video/mp4"
              />
            </video> */}
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
          <section className="col-md-6 col-sm-12">
            {/* <Roll right> */}
            <div className="  my-4 py-2">
              <h2
                className="my-2 py-2     whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                The platform that connects brands with influencers.
              </h2>
              <p>
                St. Augustine College Now Offers A Fully Online English Language
                Program. Learn more today. Learn English Today! Take An Online
                ESL Course For Adults Through St. Augustine College. Check
                Academic Calendar. Browse Resources. View Events. Highlights:
                Academic Calendar Available, Catalog Available, Resources
                Available.
              </p>
            </div>
            {/* </Roll> */}
          </section>
        </div>
      </section>
    </section>
  );
}

export default HomeOverview1;
