import Image from "next/image";
import React from "react";
import { Roll } from "react-reveal";
import OverViewImage4 from "../../../../public/images/home/overview-image-4.png";
function HomeOverview4() {
  return (
    <section>
      <section className="container   ">
        <div className="row align-items-center">
          <section className="col-md-5 ">
            <Roll left>
              <div className="  my-4 py-2">
                <h3
                  className="my-4 py-2   fs-2   fw-bolder  whileHover={{
                    scale: 1.3,
                    transition: { duration: 2 },
                  }} "
                >
                  The platform that connects brands with influencers.
                </h3>
                <p className="py-2 fw-bolder">
                  People trust people. Streamline your influencer marketing
                  campaigns with Narrators’ dual-sided platform fueled by a
                  database of 500K influencers. Headquartered in Singapore, the
                  Narrators award-winning influencer marketing platform operates
                  in several markets across the region.
                </p>
              </div>
            </Roll>
          </section>
          <section className="col-md-7 ">
            <Roll right>
              <div className="my-4 py-2">
                <Image src={OverViewImage4} alt="Picture of the author" />
              </div>
            </Roll>
          </section>
        </div>
      </section>
    </section>
  );
}

export default HomeOverview4;
