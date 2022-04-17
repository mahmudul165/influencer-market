import Image from "next/image";
import React from "react";
import { Roll } from "react-reveal";
import OverViewImage2 from "../../../../public/images/home/overview-image-2.png";
function HomeOverview2() {
  return (
    <section>
      <section className="container   ">
        <div className="row align-items-center">
          <section className="col-md-8 col-sm-12">
            {/* <Roll left> */}
            <div className="  my-2 py-2">
              <h2
                className="my-2    whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
              >
                Work with perfect Creator
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
          <section className=" col-md-4 col-sm-12 ">
            {/* <Roll right>
              <div className="my-4 py-2">
                <Image src={OverViewImage2} alt="Picture of the author" />
              </div>
            </Roll> */}
            <div className="my-2 py-2">
              <video
                width=" 411px"
                height="411px"
                borderRadius="15px"
                autoPlay
                muted
                src={"/videos/video-demo-2.mp4"}
              />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default HomeOverview2;
