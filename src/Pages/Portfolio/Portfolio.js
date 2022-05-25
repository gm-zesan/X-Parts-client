import React from "react";
import greeno from "../../images/portfolio/greeno.png";
import fitness from "../../images/portfolio/fitness.png";
import xparts from "../../images/portfolio/xparts.png";
import avatar from "../../images/portfolio/avatar.png";
import "./Portfolio.css";
const Portfolio = () => {
    return (
        <section id="about" class="about">
            <div class="container">
                <div class="section-title">
                    <p>
                        A web developer is a programmer who specializes in, or
                        is specifically engaged in, the development of World
                        Wide Web applications using a client–server model.
                    </p>
                </div>

                <div class="row mb-5">
                    <div class="col-md-4">
                        <img src={avatar} class="img-fluid avatarimg" alt="" />
                    </div>
                    <div class="col-md-8 pt-4 pt-lg-0 content">
                        <h3 className="my-5">Full-Stack WEB Developer</h3>

                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li>
                                        <i class="bi bi-rounded-right"></i>{" "}
                                        <strong>Name:</strong> G.M. Zesan
                                    </li>
                                    <li>
                                        <i class="bi bi-rounded-right"></i>{" "}
                                        <strong>Phone:</strong> +8801770597767
                                    </li>
                                    <li>
                                        <i class="bi bi-rounded-right"></i>{" "}
                                        <strong>Address:</strong> City :
                                        Pallabi, Dhaka, Bangladesh.
                                    </li>
                                    <li>
                                        <i class="bi bi-rounded-right"></i>{" "}
                                        <strong>Occupation:</strong> Student
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li>
                                        <i class="bi bi-rounded-right"></i>{" "}
                                        <strong>Degree:</strong> Diploma
                                    </li>
                                    <li>
                                        <i class="bi bi-rounded-right"></i>{" "}
                                        <strong>Designation:</strong> full-stack
                                        Web Developer
                                    </li>
                                    <li>
                                        <i class="bi bi-rounded-right"></i>{" "}
                                        <strong>Email:</strong>{" "}
                                        gmzesan7767@gmail.com
                                    </li>
                                    <li>
                                        <i class="bi bi-rounded-right"></i>{" "}
                                        <strong>Institute:</strong> Green
                                        University of Bangladesh
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    <h2 className="my-5">My Project</h2>
                </div>
                <div className="wrapper">
                    <div className="row justify-content-around">
                        <div class="col-md-4">
                            <img
                                src={greeno}
                                class="img-fluid portimg"
                                alt=""
                            />
                        </div>
                        <div class="col-md-6">
                            <h2>Project-1</h2>
                            <p className="text-justify">
                                <a
                                    className="h3"
                                    href="https://assignment-11-5f406.web.app/"
                                >
                                    Greeno-Organic
                                </a>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-around">
                        <div class="col-md-4">
                            <img
                                src={fitness}
                                class="img-fluid portimg"
                                alt=""
                            />
                        </div>
                        <div class="col-md-6">
                            <h2>Project-2</h2>
                            <p className="text-justify">
                                <a
                                    className="h3"
                                    href="https://gym-trainer-26f0d.web.app/"
                                >
                                    GYM Trainer
                                </a>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-around">
                        <div class="col-md-4">
                            <img
                                src={xparts}
                                class="img-fluid portimg"
                                alt=""
                            />
                        </div>
                        <div class="col-md-6">
                            <h2>Project-3</h2>
                            <p className="text-justify">
                                <a
                                    className="h3"
                                    href="https://x-parts.web.app/"
                                >
                                    X-Parts
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
