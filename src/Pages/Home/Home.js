import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Review from "./Review";
import Summary from "./Summary";
import Welcome from "../../images/welcome.png";
import Parts from "./Parts";
import Skill from "./Skill";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="container welcome-wrap">
                    <h2 className="text-center">
                        WELOME TO{" "}
                        <span style={{ color: "#008037" }}>X-PARTS</span>
                    </h2>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="text-justify">
                                I am Zesan. My goal is in 2022 to become a
                                fullstack developer. It is so much challanging
                                to me. But I have to do it.I want to be a
                                fullstack developer.
                                <hr />I want to move forward with this in mind.
                                I think 2022 is going to be the most challenging
                                for me. And it will bring the biggest change in
                                my life inshallah.<strong>X-Parts</strong>.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="mx-auto text-right">
                                <img
                                    className="img-fluid"
                                    src={Welcome}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Parts></Parts>
            <Skill></Skill>
            <Summary></Summary>
            <Review></Review>
        </div>
    );
};

export default Home;
