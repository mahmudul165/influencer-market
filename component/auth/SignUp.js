import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";
import Image from "next/image";
import SignupImg from "/public/images/home/sign_in.png.png";
import NewWindow from "react-new-window";
const Signup = () => {
  const axios = require("axios").default;
  const [signupData, setData] = useState([]);
  const [value, setValue] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handle = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = async (data) => {
    await setData(data);
    signupData.user = await value;

    axios
      .post("https://reqres.in/api/users", {
        signupData,
        // value,
        // status: "pending",
      })
      .then((res) => {
        // res.data.user = value;
        console.log("my res is", res.data?.signupData);
        if (res.data?.signupData?.user === value) {
          alert("Data added successfully");
          reset();
        }
      });
  };
  errors && console.log(errors);
  //console.log("value of user ", value);

  // user authentication
  const { data: session } = useSession();
  console.log(useSession());
  const handleSignIn = () => {
    event.preventDefault();
    value === "influencer" || value === "brand"
      ? signIn()
      : alert("An example warning alert with an icon ");
  };
  // value !== null && signIn();
  return (
    <section className="vh-100  ">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="  text-black my-3 p-3">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <h3 className="text-center fw-bolder fs-4  mb-3 mx-1 mx-md-4 mt-5 p-2">
                      Sign up to
                      <span className="text-warning ms-2"> {value}</span>
                    </h3>
                    {/* radio  */}
                    <div className="form-check  d-flex justify-content-center my-4 fs-5 fw-bolder ">
                      <label htmlFor="brand" className="me-5">
                        <input
                          className="mx-1 me-2 radio-btn"
                          {...register("user", { required: true })}
                          type="radio"
                          name="user"
                          value="brand"
                          id="brand"
                          onClick={handle}
                        />
                        Brand
                      </label>
                      <label htmlFor="influencer">
                        <input
                          {...register("user", { required: true })}
                          className="me-2 mx-1 radio-btn  "
                          type="radio"
                          name="user"
                          value="influencer"
                          id="influencer"
                          onClick={handle}
                        />
                        Influencer
                      </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4   me-2">
                      {!session ? (
                        <>
                          <button
                            type="button"
                            className="btn btn-primary btn-lg me-5 "
                            onClick={() => handleSignIn()}
                          >
                            Google
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-lg ms-2"
                            onClick={() => handleSignIn()}
                          >
                            Facebook
                          </button>
                        </>
                      ) : (
                        <>
                          {/* <div className="text-center">
                            <h3 className="mt-5">
                              {session.user?.email || session.user?.name}
                            </h3>
                            <button
                              type="button"
                              className="btn btn-primary btn-lg me-5 "
                              onClick={() => signOut()}
                            >
                              signOut
                            </button>
                          </div> */}
                        </>
                      )}
                    </div>
                    {/* <div className="d-flex justify-content-center mx-4   me-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg me-5 "
                        onClick={() => signIn}
                      >
                        Google
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg ms-2"
                      >
                        Facebook
                      </button>
                    </div> */}

                    <div className="divider mb-3  ">Or</div>

                    <form
                      //handleSubmit(onSubmit)
                      onSubmit={handleSubmit(onSubmit)}
                      className="mx-1 mx-md-4"
                    >
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            {...register(
                              "name",

                              {
                                required: true,
                                maxLength: 20,
                                minLength: {
                                  value: 5,
                                  message: "Name must   least 5 characters",
                                },
                              },
                              { pattern: /^[A-Za-z]+$/i }
                            )}
                          />
                          <small className="text-danger">
                            {errors.name?.message}
                          </small>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            {...register("email", {
                              required: true,
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Email must   required",
                              },

                              minLength: {
                                value: 2,
                                message: "Email must   required",
                              },
                            })}
                          />
                          <small className="text-danger">
                            {errors.email?.message}
                          </small>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            {...register("password", {
                              required: true,
                              minLength: {
                                value: 8,
                                message:
                                  "Password must have at least 8 characters",
                              },
                            })}
                          />
                          <small className="text-danger">
                            {errors.password?.message}
                          </small>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-2">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in
                          <a href="">Terms of service</a>
                        </label>
                      </div>
                      <div className="form-check d-flex justify-content-center mx-2 mb-3 mb-lg-4">
                        <input
                          type="submit"
                          className="btn btn-lg btn-primary"
                          value="SignUp"
                        />
                      </div>
                      <div>
                        <p className="text-center text-muted mt-3 mb-0">
                          Have already an account?
                          <Link href="/login">
                            <a className="fw-bold text-body mx-2">
                              <u>Login here</u>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                    <Image
                      src={SignupImg}
                      className="img-fluid"
                      alt="Signup image"
                      width={500}
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
