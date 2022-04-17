import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import LogoImg from "../../public/images/home/influencer_bg_remover.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  // user authentication
  const { data: session } = useSession();
  console.log(useSession());
  return (
    <section>
      <nav
        className={`fixed-top  header-bg navbar navbar-expand-lg navbar-light  ${
          !show && " shadow-lg  rounded bg-light  nav-scroll"
        }`}
        id="navbar-scroll"
      >
        <section className="container ">
          <Link href="http://localhost:3000/">
            <a
              className="navbar-brand-logo   p-2 fs-1 fw-bolder   "
              href="http://localhost:3000/"
            >
              {/* <Image
                src={LogoImg}
                width="250px"
                height="50px"
                alt="Picture of the author"
              /> */}
              Influencer
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-link"></ul>

            <ul className="ms-auto  navbar-nav   mb-2 mb-lg-0 align-items-center">
              <li className="nav-item dropdown fs-6  fw-bolder">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="creatorsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brand And Agencie
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="creatorsDropdown"
                >
                  <li>
                    <Link href="/action">
                      <a className="fs-6  fw-bolder dropdown-item">ACTION</a>
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="fs-6  fw-bolder dropdown-item" href="#">
                      WORK
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown fs-6  fw-bolder">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="brandDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Creator
                </a>
                <ul className="dropdown-menu" aria-labelledby="brandDropdown">
                  <li>
                    <a className="fs-6  fw-bolder dropdown-item" href="#">
                      ACTION
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="fs-6  fw-bolder dropdown-item" href="#">
                      WORK
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item  ">
                <Link href="/campaign">
                  <a
                    className="nav-link active fs-6  fw-bolder"
                    aria-current="page"
                  >
                    Studio
                  </a>
                </Link>
              </li>
              <li className="nav-item  ">
                <a
                  className="nav-link active fs-6  fw-bolder"
                  aria-current="page"
                  href="#"
                >
                  Insight
                </a>
              </li>
              <li className="nav-item  ">
                <a
                  className="nav-link active fs-6  fw-bolder"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              {session ? (
                // <li>{session.user?.email}</li>
                // start
                <>
                  <li className="nav-item dropdown fs-6  fw-bolder">
                    <a
                      className="nav-link active dropdown-toggle"
                      href="#"
                      id="creatorsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={session.user?.image}
                        width="25px"
                        height="25px"
                        className="rounded-circle"
                        alt="Picture of the author"
                      />
                    </a>

                    <ul
                      className="dropdown-menu   nav-style "
                      aria-labelledby="creatorsDropdown"
                      style={{ marginLeft: "-174px" }}
                    >
                      <li>
                        <a className="fs-6  fw-bolder dropdown-item  " href="#">
                          Profile
                        </a>
                        <Link href="/brand/dashboard">
                          <a className="fs-6  fw-bolder dropdown-item">
                            Dashboard
                          </a>
                        </Link>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Manage Requests
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Post a Request
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Refer & Get up to $100
                        </a>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Become a Seller
                        </a>
                        <Link href="/brand/settings">
                          <a className="fs-6  fw-bolder dropdown-item">
                            Settings
                          </a>
                        </Link>

                        <Link href="/brand/channel">
                          <a className="fs-6  fw-bolder dropdown-item">
                            Channel
                          </a>
                        </Link>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Billing NEW
                        </a>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          English
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          $ USD
                        </a>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          Help & support
                        </a>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <a
                          className="fs-6  fw-bolder dropdown-item"
                          href="#"
                          onClick={signOut}
                        >
                          Logout
                        </a>
                      </li>

                      {/* <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          WORK
                        </a>
                      </li> */}
                    </ul>
                  </li>
                </>
              ) : (
                // end
                <>
                  <li className="nav-item  ">
                    <Link href="/login">
                      <a
                        className="nav-link active fs-6  fw-bolder"
                        aria-current="page"
                        href="#"
                      >
                        Login
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item text-white ">
                    <Link href="/signup">
                      <a
                        className="nav-link active text-white fs-6  fw-bolder   btn rounded-pill  nav-btn-bg p-2"
                        aria-current="page"
                        href="#"
                      >
                        Sign up
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </section>
      </nav>

      {/* {$(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
          $("#navbar-scroll").css("position", "fixed");
          $("#navbar-scroll").css("top", 0);
        } else {
          $("#navbar-scroll").css("position", "");
          $("#navbar-scroll").css("top", "-100%");
        }
      })} */}
    </section>
  );
};

export default Navbar;
