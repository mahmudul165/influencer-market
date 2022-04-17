import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faSolid } from "@fortawesome/free-solid-svg-icons";

const Campaign = () => {
  const [value, setValue] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  const handleContantValue = (e) => {
    setValue(e.target?.value);
    console.log(value);
  };
  // value for yes no ->>>> price
  const [price, setPrice] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  const handleShowPrice = (e) => {
    setPrice(e.target?.value);
  };
  const [date, setDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <section className=" mt-3 py-3">
      <section className=" bg-light  ">
        <section className="container mt-5 py-3 ">
          <section className="row my-5 ">
            <h5 className="fs-5 fw-bolder my-3 ">Create Campaign </h5>
            <div className="col-md-6  card border-0">
              {/* 1st part firast slide */}
              <section className="  my-4 pb-2 m-2 p-2">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Title
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Type Your Campaign Name"
                  />
                </div>
                {/* description */}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Type Your Campaign Description with necessary information."
                    rows="3"
                  ></textarea>
                </div>
                {/* file upload */}
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />

                  <label
                    className="input-group-text"
                    htmlFor="inputGroupFile02"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-upload" />
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputGroupFile01" className="form-label">
                    Campaign Catagory
                  </label>
                  <select
                    id="inputGroupFile02"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Campaign Catagory</option>
                    <option value="seo">seo</option>
                    <option value="web design">web design</option>
                    <option value="web development">web development</option>
                    <option value="graphices">graphices</option>
                    <option value="data entry">data entry</option>
                    <option value="smm">smm</option>
                    <option value="digital marketing">digital marketing</option>
                    <option value="react developer">react developer</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputGroupFile01" className="form-label">
                    Promotion Type
                  </label>
                  <input
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Select Promotion Type"
                  />
                  <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                  </datalist>
                  {/*  <input type="text" list="data" onChange={this._onChange} />              
              <datalist id="data">
                {this.state.data.map((item, key) => (
                  <option key={key} value={item.displayValue} />
                ))}
              </datalist> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="inputGroupFile01" className="form-label">
                    Campaign Expired Date
                  </label>
                  {/* <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Expired date"
              />
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
              </datalist> */}
                  {/* <div className="input-group date" id="datepicker">
                <input type="text" className="form-control" id="date" />
                <span className="input-group-append">
                  <span className="input-group-text bg-light d-block">
                    <i className="fa fa-calendar"></i>
                  </span>
                </span>
              </div> */}
                  {/* react date picker */}

                  <DatePicker
                    className="form-control"
                    selected={date}
                    onChange={(date) => setDate(date)}
                    onCalendarClose={handleCalendarClose}
                    onCalendarOpen={handleCalendarOpen}
                  />

                  {/*  <input type="text" list="data" onChange={this._onChange} />              
              <datalist id="data">
                {this.state.data.map((item, key) => (
                  <option key={key} value={item.displayValue} />
                ))}
              </datalist> */}
                </div>
                {/* ********* 1st part 2nd part   slide ************ */}
                <div className="mb-3">
                  <label htmlFor="influencerRequire" className="form-label">
                    Influencer Required
                  </label>
                  <select
                    id="influencerRequired"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Number of Influencer</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                {/* gender */}
                <div className="mb-3">
                  <label htmlFor="influencerGender" className="form-label">
                    Influencer Gender
                  </label>
                  <div className="d-flex  ">
                    <div className="me-2 ">
                      <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        id="any"
                        value="any"
                        autoComplete="off"
                        onClick={() => alert("any")}
                      />
                      <label
                        className="btn btn-outline-primary  "
                        htmlFor="any"
                      >
                        Any
                      </label>
                    </div>
                    <div className="me-2 ">
                      <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        id="male"
                        value="male"
                        autoComplete="off"
                        onClick={() => alert("male")}
                      />
                      <label
                        className="btn btn-outline-primary  "
                        htmlFor="male"
                      >
                        Male
                      </label>
                    </div>
                    <div className=" me-2">
                      <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        id="female"
                        value="female"
                        autoComplete="off"
                        onClick={() => alert("female")}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="female"
                      >
                        Female
                      </label>
                    </div>
                    <div className="  ">
                      <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        id="others"
                        autoComplete="off"
                        value="others"
                        onClick={() => alert("others")}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="others"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                </div>
                {/* influencer age */}
                <div className="mb-3">
                  <label htmlFor="influencerGender" className="form-label">
                    Influencer Age
                  </label>
                  <div className="d-flex  ">
                    <div className="me-2 ">
                      <input
                        type="radio"
                        className="btn-check"
                        name="age"
                        id="below-15"
                        value="below 15"
                        autoComplete="off"
                        onClick={() => alert("below-15")}
                      />
                      <label
                        className="btn btn-outline-primary  "
                        htmlFor="below-15"
                      >
                        Below 15
                      </label>
                    </div>
                    <div className="me-2 ">
                      <input
                        type="radio"
                        className="btn-check"
                        name="age"
                        id="20-30"
                        value="20-30"
                        autoComplete="off"
                        onClick={() => alert("20-30")}
                      />
                      <label
                        className="btn btn-outline-primary  "
                        htmlFor="20-30"
                      >
                        20-30
                      </label>
                    </div>
                    <div className=" me-2">
                      <input
                        type="radio"
                        className="btn-check"
                        name="age"
                        id="30-40"
                        value="30-40"
                        autoComplete="off"
                        onClick={() => alert("30-40")}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="30-40"
                      >
                        30-40
                      </label>
                    </div>
                    <div className="  ">
                      <input
                        type="radio"
                        className="btn-check"
                        name="age"
                        id="above-40"
                        autoComplete="off"
                        value="others"
                        onClick={() => alert("Above 40")}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="above-40"
                      >
                        Above 40
                      </label>
                    </div>
                  </div>
                </div>
                {/* Audiance location */}
                <div className="mb-3">
                  <label htmlFor="influencerRequire" className="form-label">
                    Audiance Location
                  </label>
                  <select
                    id="influencerRequired"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Audiance Location</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Kasba</option>
                    <option value="3">Habiganj</option>
                  </select>
                </div>
                {/* 1st section slide 3 */}
                {/* physical product */}
                <div className="mb-3">
                  <label htmlFor="influencerRequire" className="form-label">
                    Would You Provide Any Physical Product?
                  </label>
                </div>
                <div className="mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="yes"
                      onClick={handleShowPrice}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="no"
                      onClick={handleShowPrice}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      No
                    </label>
                  </div>
                </div>
                {/* if yes then price field add */}

                {price === "yes" && (
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="price"
                    />
                  </div>
                )}
                {/* deadline */}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Deadline
                  </label>
                  <DatePicker
                    className="form-control"
                    selected={deadline}
                    onChange={(deadline) => setDeadline(deadline)}
                    onCalendarClose={handleCalendarClose}
                    onCalendarOpen={handleCalendarOpen}
                  />
                </div>

                {/* content creator */}
                <div className="mb-3">
                  <label htmlFor="influencerRequire" className="form-label">
                    If You Make Your Content Then Select Brand?
                  </label>
                  <div />
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Influencer
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Brand
                      </label>
                    </div>
                  </div>
                </div>
                {/* if brnad choose then show below content div */}
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />

                  <label
                    className="input-group-text"
                    htmlFor="inputGroupFile02"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-upload" />
                  </label>
                </div>
                {/* shooting location */}
                <div className="mb-3">
                  <label htmlFor="influencerRequire" className="form-label">
                    Shooting Location
                  </label>
                  <select
                    id="influencerRequired"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Shooting Location</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Kasba</option>
                    <option value="3">Habiganj</option>
                  </select>
                </div>
                {/* address */}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Type Your Address"
                  />
                </div>
                {/* Campaign budget */}
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Campaign Budget
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Select Campaign Budget (tk)"
                  />
                </div>
              </section>
            </div>
            <section className="col-md-6     ">
              {/* 2nd part */}
              <div className="card border-0">
                <section className="d-flex  my-3 pb-2 m-2 p-2">
                  <div className="form-check form-check-inline">
                    <button className="btn btn-primary btn-lg fw-bold" disabled>
                      Facebook
                    </button>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="facebook"
                      id="facebook1"
                      value="1k-5k"
                      autoComplete="off"
                      onClick={() => alert("1k-5k")}
                    />
                    <label
                      className="btn btn-outline-primary  "
                      htmlFor="facebook1"
                    >
                      1k-5k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="facebook"
                      id="facebook2"
                      value="5k-10k"
                      autoComplete="off"
                      onClick={() => alert("5k-10k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="facebook2"
                    >
                      5k-10k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="facebook"
                      id="facebook3"
                      autoComplete="off"
                      value="10k-50k"
                      onClick={() => alert("10k-50k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="facebook3"
                    >
                      10k-50k
                    </label>
                  </div>
                </section>
                <section className="d-flex  my-3 pb-2 m-2 p-2">
                  <div className="form-check form-check-inline">
                    <button
                      className="btn btn-primary btn-lg   fw-bold"
                      disabled
                    >
                      Tiktok
                    </button>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="tiktok"
                      id="tiktok1"
                      value="1k-5k"
                      autoComplete="off"
                      onClick={() => alert("1k-5k")}
                    />
                    <label
                      className="btn btn-outline-primary  "
                      htmlFor="tiktok1"
                    >
                      1k-5k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="tiktok"
                      id="tiktok2"
                      value="5k-10k"
                      autoComplete="off"
                      onClick={() => alert("5k-10k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="tiktok2"
                    >
                      5k-10k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="tiktok"
                      id="tiktok3"
                      autoComplete="off"
                      value="10k-50k"
                      onClick={() => alert("10k-50k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="tiktok3"
                    >
                      10k-50k
                    </label>
                  </div>
                </section>
                <section className="d-flex  my-3 pb-2 m-2 p-2">
                  <div className="form-check form-check-inline">
                    <button className="btn btn-primary btn-lg fw-bold" disabled>
                      Instagram
                    </button>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="instagram"
                      id="instagram1"
                      value="1k-5k"
                      autoComplete="off"
                      onClick={() => alert("1k-5k")}
                    />
                    <label
                      className="btn btn-outline-primary  "
                      htmlFor="instagram1"
                    >
                      1k-5k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="instagram"
                      id="instagram2"
                      value="5k-10k"
                      autoComplete="off"
                      onClick={() => alert("5k-10k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="instagram2"
                    >
                      5k-10k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="instagram"
                      id="instagram3"
                      autoComplete="off"
                      value="10k-50k"
                      onClick={() => alert("10k-50k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="instagram3"
                    >
                      10k-50k
                    </label>
                  </div>
                </section>
                <section className="d-flex  my-3 pb-2 m-2 p-2">
                  <div className="form-check form-check-inline">
                    <button className="btn btn-primary btn-lg fw-bold" disabled>
                      Youtube
                    </button>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="youtube"
                      id="youtube1"
                      value="1k-5k"
                      autoComplete="off"
                      onClick={() => alert("1k-5k")}
                    />
                    <label
                      className="btn btn-outline-primary  "
                      htmlFor="youtube1"
                    >
                      1k-5k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="youtube"
                      id="youtube2"
                      value="5k-10k"
                      autoComplete="off"
                      onClick={() => alert("5k-10k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="youtube2"
                    >
                      5k-10k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="youtube"
                      id="youtube3"
                      autoComplete="off"
                      value="10k-50k"
                      onClick={() => alert("10k-50k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="youtube3"
                    >
                      10k-50k
                    </label>
                  </div>
                </section>
                <section className="d-flex  my-3 pb-2 m-2 p-2">
                  <div className="form-check form-check-inline">
                    <button className="btn btn-primary btn-lg fw-bold" disabled>
                      Livestream
                    </button>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="livestrem"
                      id="livestrem1"
                      value="1k-5k"
                      autoComplete="off"
                      onClick={() => alert("1k-5k")}
                    />
                    <label
                      className="btn btn-outline-primary  "
                      htmlFor="livestrem1"
                    >
                      1k-5k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="livestrem"
                      id="livestrem2"
                      value="5k-10k"
                      autoComplete="off"
                      onClick={() => alert("5k-10k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="livestrem2"
                    >
                      5k-10k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="livestrem"
                      id="livestrem3"
                      autoComplete="off"
                      value="10k-50k"
                      onClick={() => alert("10k-50k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="livestrem3"
                    >
                      10k-50k
                    </label>
                  </div>
                </section>
                <section className="d-flex  my-3 pb-2 m-2 p-2">
                  <div className="form-check form-check-inline">
                    <button className="btn btn-primary btn-lg fw-bold" disabled>
                      Twitter
                    </button>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="twitter"
                      id="twitter1"
                      value="1k-5k"
                      autoComplete="off"
                      onClick={() => alert("1k-5k")}
                    />
                    <label
                      className="btn btn-outline-primary  "
                      htmlFor="twitter1"
                    >
                      1k-5k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="twitter"
                      id="twitter2"
                      value="5k-10k"
                      autoComplete="off"
                      onClick={() => alert("5k-10k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="twitter2"
                    >
                      5k-10k
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="btn-check"
                      name="twitter"
                      id="twitter3"
                      autoComplete="off"
                      value="10k-50k"
                      onClick={() => alert("10k-50k")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="twitter3"
                    >
                      10k-50k
                    </label>
                  </div>
                </section>
                {/* content type */}
                <section className="  my-3 pb-2 m-2 p-2">
                  <div className="form-check form-check-inline">
                    <div className="mb-3">
                      <label className=" fw-bold  ">Content Type</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="content"
                        id="inlineCheckbox1"
                        value="video"
                        onClick={handleContantValue}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        Video
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        name="content"
                        type="radio"
                        id="inlineCheckbox2"
                        value="post"
                        onClick={handleContantValue}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        Static Post
                      </label>
                    </div>
                  </div>
                </section>
                {/* logic for post and video */}
                {value === "post" && (
                  <section className="  my-3 pb-2 m-2 p-2">
                    <div className="form-check form-check-inline">
                      <div className="mb-3">
                        {/* <label className=" fw-bold  mb-3  ">Post</label> */}

                        <div className="table-responsive-sm">
                          <table className="table  table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">Platform</th>
                                <th scope="col">No. of Post</th>
                                <th scope="col">Placement</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Facebook</th>
                                <td className="p-1 m-1">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="No.of post"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox1"
                                    >
                                      Post
                                    </label>
                                  </div>
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox2"
                                    >
                                      Story
                                    </label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Instagram</th>
                                <td>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="No. of post"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox1"
                                    >
                                      Post
                                    </label>
                                  </div>
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox2"
                                    >
                                      Story
                                    </label>
                                  </div>
                                </td>
                              </tr>
                              {/* <tr>
                            <th scope="row">Youtube</th>
                            <td>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="duration"
                              />
                            </td>
                            <td className="p-1 m-1">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Post
                                </label>
                              </div>
                            </td>
                            <td className="p-1 m-1">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox2"
                                >
                                  Story
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Tiktok</th>
                            <td>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="duration"
                              />
                            </td>
                            <td className="p-1 m-1">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Post
                                </label>
                              </div>
                            </td>
                            <td className="p-1 m-1">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox2"
                                >
                                  Story
                                </label>
                              </div>
                            </td>
                          </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
                {value === "video" && (
                  // video content
                  <section className="  my-3 pb-2 m-2 p-2">
                    <div className="form-check form-check-inline">
                      <div className="mb-3">
                        {/* <label className=" fw-bold  mb-3  ">Video</label> */}

                        <div className="table-responsive-sm">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">Platfrom</th>
                                <th scope="col">Video Duration</th>
                                <th scope="col">No. of video</th>
                                <th scope="col">Placement</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Facebook</th>
                                <td className="p-1 m-1">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="duration"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="No. of video"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox1"
                                    >
                                      Post
                                    </label>
                                  </div>
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox2"
                                    >
                                      Story
                                    </label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Instagram</th>
                                <td>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="duration"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="No. of video"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox1"
                                    >
                                      Post
                                    </label>
                                  </div>
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox2"
                                    >
                                      Story
                                    </label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Youtube</th>
                                <td>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="duration"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="No. of video"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox1"
                                    >
                                      Post
                                    </label>
                                  </div>
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox2"
                                    >
                                      Story
                                    </label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Tiktok</th>
                                <td>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="duration"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="No. of video"
                                  />
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox1"
                                    >
                                      Post
                                    </label>
                                  </div>
                                </td>
                                <td className="p-1 m-1">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineCheckbox2"
                                    >
                                      Story
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </section>
            {/* Save all content */}

            <div className="d-flex flex-row-reverse bd-highlight">
              <div className="p-2 bd-highlight">
                <button className="btn btn-lg btn-primary ">Save</button>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Campaign;
