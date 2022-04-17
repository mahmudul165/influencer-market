import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faSolid } from "@fortawesome/free-solid-svg-icons";

const Security = () => {
  return (
    <section className="bg-light mt-3 py-3">
      <section className="    ">
        <section className="container   ">
          <section className="row   ">
            <div className=" ">
              <section className=" ">
                <section>
                  <section className=" bg-light  ">
                    <section>
                      <section className="row my-5 ">
                        {/* 1st part   */}
                        <section className="col-md-6">
                          <h5 className="fs-5 fw-bolder my-3 ">
                            Basic Settings{" "}
                          </h5>
                          <div className=" card border-0">
                            <section className="  my-4 pb-2 m-2 p-2">
                              {/* city location */}
                              <div className="mb-3">
                                <label
                                  htmlFor="influencerRequire"
                                  className="form-label"
                                >
                                  City
                                </label>
                                <select
                                  id="influencerRequired"
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Select City Location</option>
                                  <option value="1">Dhaka</option>
                                  <option value="2">Kasba</option>
                                  <option value="3">Habiganj</option>
                                </select>
                              </div>
                              {/* email */}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Enter Your Email"
                                />
                              </div>
                              {/* Contact no. */}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Contact No.
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Enter Your  Contact No."
                                />
                              </div>
                              {/* email */}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Company
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Enter Your Company"
                                />
                              </div>
                              {/* website */}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Website
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Enter Your Website URL"
                                />
                              </div>
                              {/*Social link */}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Social Link
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Enter Your Social Link"
                                />
                              </div>
                              {/* Save all content */}
                              <div className="d-flex flex-row  bd-highlight  ">
                                <div className="p-2 bd-highlight">
                                  <button className="btn btn-lg btn-primary ">
                                    Save
                                  </button>
                                </div>
                              </div>
                            </section>
                          </div>
                        </section>
                        {/* 2nd part */}
                        <section className="col-md-6">
                          <h5 className="fs-5 fw-bolder my-3 ">
                            Security Settings
                          </h5>
                          <div className=" card border-0">
                            <section className="  my-4 pb-2 m-2 p-2">
                              {/* old password*/}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Old Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Enter Your Old Password"
                                />
                              </div>
                              {/* New Password */}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  New Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Enter Your  New Password"
                                />
                              </div>
                              {/*  Re-type Password */}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Re-type Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Enter Your Re-type Password"
                                />
                              </div>
                              {/* Save all content */}
                              <div className="d-flex flex-row  bd-highlight  ">
                                <div className="p-2 bd-highlight">
                                  <button className="btn btn-lg btn-primary ">
                                    Change Password
                                  </button>
                                </div>
                              </div>
                            </section>
                          </div>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Security;
