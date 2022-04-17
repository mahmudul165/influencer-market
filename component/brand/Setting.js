import React, { useState } from "react";

import Link from "next/link";

const Setting = ({ children }) => {
  return (
    <section className=" mt-3 py-3">
      {/* <SettingNavbar /> */}
      <section className=" container-fluid mt-5 py-3 ">
        <hr className="dropdown-divider" />
        <div className="d-flex bd-highlight">
          <div className=" flex-grow-1 bd-highlight">
            <Link href="/brand/dashboard">
              <button className="border-0 bg-white profile-navbar-style fs-6">
                dashboard
              </button>
            </Link>
            <Link href="/brand/security">
              <button className="border-0 bg-white profile-navbar-style fs-6">
                Security
              </button>
            </Link>
          </div>
          <div className=" bd-highlight">
            <button className="btn btn-primary d-flex      fs-6 justify-content-end">
              Start a campaign
            </button>
          </div>
        </div>
        <hr className="dropdown-divider" />
      </section>
      {/* <SettingHorizentalNavbar /> */}
      <div className="  row justify-content-evenly container p-3 m-3">
        <div className="col-3">
          <div>
            <Link href="/brand/dashboard">
              <button className="border-0 bg-white profile-navbar-style fs-6 my-1">
                dashboard
              </button>
            </Link>
          </div>
          <div>
            <Link href="/brand/security">
              <button className="border-0 bg-white profile-navbar-style fs-6 my-1">
                Security
              </button>
            </Link>
          </div>
        </div>
        <div className="col-9">{children}</div>
      </div>
    </section>
  );
};

export default Setting;
