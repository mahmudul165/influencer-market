import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
const Dashboard = () => {
  // user authentication
  const { data: session } = useSession();
  console.log(useSession(), "is given");
  return (
    <section className=" mt-3 py-3">
      <section className=" bg-light  ">
        <section className="container mt-5 py-3 ">
          <section className="row my-5 ">
            {/* 1st part  */}
            <section className="col-md-3  ">
              <div className="card   p-3 border-0" style={{ width: "18rem" }}>
                <div className="text-center p-2" style={{ marginTop: "-70px" }}>
                  <img
                    src={session?.user?.image}
                    className="rounded-circle   "
                    alt="Picture of the author"
                  />
                </div>
                <div className="card-body  ">
                  <div className="text-center">
                    <h5 className="card-title  ">
                      Name:<span className="ms-2">{session?.user?.name}</span>
                    </h5>
                    <h5 className="card-title ">
                      Joined:<span className="ms-2">12-03-2022</span>
                    </h5>
                  </div>

                  <div className="ms-2 p-3">
                    <div className="my-2  ">
                      <Link href="/setting">
                        <a className="bg-primary text-white text-center form-control text-decoration-none">
                          Setting
                        </a>
                      </Link>
                    </div>
                    <div className="my-2  ">
                      <Link href="/setting">
                        <a className="bg-primary text-white text-center form-control text-decoration-none">
                          Campaign
                        </a>
                      </Link>
                    </div>
                    <div className="my-2  ">
                      <Link href="brand/setting">
                        <a className="bg-primary text-white text-center form-control text-decoration-none">
                          Bid List
                        </a>
                      </Link>
                    </div>
                    <div className="my-2  ">
                      <Link href="brand/setting">
                        <a className="bg-primary text-white text-center form-control text-decoration-none">
                          Payment Method
                        </a>
                      </Link>
                    </div>
                    <div className="my-2  ">
                      <Link href="brand/setting">
                        <a className="bg-primary text-white text-center form-control text-decoration-none">
                          Hired Influencers
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* 2nd part   */}
            <section className="col-md-9 ">
              {/* 3 nested in card */}
              <div className="card border-0 ">
                <div className="m-2 p-2 d-flex ">
                  <a href="#" className="btn btn-primary form-control m-3 p-2">
                    Basic
                  </a>
                  <a href="#" className="btn btn-primary form-control m-3 p-2">
                    Channel
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary form-control m-3 p-2  "
                  >
                    Hired Influencers
                  </a>
                </div>
              </div>
              {/* security setting */}
              <h5 className="fs-5 fw-bolder my-3 py-2">Security Settings</h5>
              <div className=" card border-0 my-2">
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
  );
};

export default Dashboard;
