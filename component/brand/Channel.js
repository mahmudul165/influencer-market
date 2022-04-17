import React from "react";

function Channel() {
  return (
    // <section className="container mt-5 p-3 m-auto   ">
    //   <div className="card ">
    //     <div className="row justify-content-md-center mt-5 p-3 ">
    //       <div className="col col-md-2">
    //         <h3 className="fs-3 fw-bolder"> </h3>
    //       </div>
    //       <div className="col-md-auto ">
    //         <h3 className="fs-3 fw-bolder">Facebook</h3>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className=" mt-3 py-3">
      <section className=" bg-light  ">
        <section className="container mt-5 py-3 ">
          <section className="row my-5 ">
            {/* 1st part   */}
            <section className="col-md-6 m-auto">
              <h5 className="fs-5 fw-bolder my-3 ">
                Connect Your Social Network
              </h5>
              <div className=" card border-0">
                <section className="  my-4   m-2 p-2">
                  {/* facebook api connect */}
                  <div className="mb-3">
                    <div className="d-flex ">
                      <div>
                        <button className="bg-white  rounded border-success ">
                          <i className="fa fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <div className="mx-3">
                        <h4 className="fs-5 fw-bolder">Facebook</h4>
                      </div>
                    </div>
                  </div>
                  {/* Twitter api connect */}
                  <div className="mb-3">
                    <div className="d-flex ">
                      <div>
                        <button className="bg-white  rounded border-success ">
                          <i
                            className="fa fa-solid fa-check"
                            style={{ color: "green" }}
                          ></i>
                        </button>
                      </div>
                      <div className="mx-3">
                        <h4 className="fs-5 fw-bolder">Twitter</h4>
                      </div>
                    </div>
                  </div>
                  {/* Instagram api connect */}
                  <div className="mb-3">
                    <div className="d-flex ">
                      <div>
                        <button className="bg-white  rounded border-success ">
                          <i className="fa fa-solid fa-plus  "></i>
                        </button>
                      </div>
                      <div className="mx-3">
                        <h4 className="fs-5 fw-bolder">Instagram</h4>
                      </div>
                    </div>
                  </div>
                  {/* Youtube api connect */}
                  <div className="mb-3">
                    <div className="d-flex ">
                      <div>
                        <button className="bg-white  rounded border-success ">
                          <i
                            className="fa fa-solid fa-check  success"
                            style={{ color: "green" }}
                          ></i>
                        </button>
                      </div>
                      <div className="mx-3">
                        <h4 className="fs-5 fw-bolder">Youtube</h4>
                      </div>
                    </div>
                  </div>
                  {/* tiktalk api connect */}
                  <div className=" ">
                    <div className="d-flex ">
                      <div>
                        <button className="bg-white  rounded border-success ">
                          <i className="fa fa-solid fa-plus  "></i>
                        </button>
                      </div>
                      <div className="mx-3">
                        <h4 className="fs-5 fw-bolder ">Tiktalk</h4>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Channel;
