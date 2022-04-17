import React, { Component } from "react";
import Slider from "react-slick";

export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
    };
    return (
      <div className="container   py-4">
        <h1
          className="my-2 text-center   whileHover={{
                   scale: 1.3,
                   transition: { duration: 2 },
                 }} "
        >
          Work with perfect Creator
        </h1>
        <Slider
          ref={(c) => (this.slider = c)}
          {...settings}
          className="text-center"
        >
          <div key={1} className="card my-4 py-4  mb-3  border-0">
            <div className="row g-4">
              <div className="col-md-6  testimonial-img p-3">
                <img
                  src="/images/home/client-1.webp"
                  className="img-fluid rounded-start    p-2  "
                  alt="..."
                />

                <img
                  src="/images/home/client-1.webp"
                  className=" rounded     p-2 shape-img "
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="text-start  text-wrap">
                    St. Augustine College Now Offers A Fully Online English
                    Language Program. Learn more today.St. Augustine College Now
                    Offers A Fully Online English Language Program. Learn more
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div key={2} className="card my-4 py-4 mb-3 ms-4 border-0">
            <div className="row g-4">
              <div className="col-md-6 testimonial-img p-3">
                <img
                  src="/images/home/client-3.jpg"
                  className="img-fluid rounded-start  p-2   "
                  alt="..."
                />
                <img
                  src="/images/home/client-3.jpg"
                  className=" rounded     p-2 shape-img-2 "
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="text-start  text-wrap">
                    St. Augustine College Now Offers A Fully Online English
                    Language Program. Learn more today.St. Augustine College Now
                    Offers A Fully Online English Language Program. Learn more
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div key={3} className="card my-4 py-4 mb-3 ms-4 border-0">
            <div className="row g-4">
              <div className="col-md-6 testimonial-img">
                <img
                  src="/images/home/client-7.jpg"
                  className="img-fluid rounded-start     "
                  alt="..."
                />
                <img
                  src="/images/home/client-7.jpg"
                  className=" rounded     p-2 shape-img  "
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="text-start  text-wrap">
                    St. Augustine College Now Offers A Fully Online English
                    Language Program. Learn more today.St. Augustine College Now
                    Offers A Fully Online English Language Program. Learn more
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div key={4} className="card my-4 py-4 mb-3 ms-4 border-0">
            <div className="row g-4">
              <div className="col-md-6 testimonial-img">
                <img
                  src="/images/home/client-8.jpg"
                  className="img-fluid rounded-start    "
                  alt="..."
                />
                <img
                  src="/images/home/client-8.jpg"
                  className=" rounded    shape-img-2  "
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="text-start  text-wrap">
                    St. Augustine College Now Offers A Fully Online English
                    Language Program. Learn more today.St. Augustine College Now
                    Offers A Fully Online English Language Program. Learn more
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="button ms-3" onClick={this.next}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
}
