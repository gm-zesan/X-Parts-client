import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Review from "./Review";
import Summary from "./Summary";
import Welcome from "../../images/welcome.png";
import Parts from "./Parts";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="container welcome-wrap">
                    <h2 className="text-center">
                        WELOME TO{" "}
                        <span style={{ color: "#008037" }}>GREENO</span>
                    </h2>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="text-justify">
                                Welcome to my Greeno Organic store. You don't
                                have to cook fancy or complicated masterpieces -
                                just good food from fresh ingredients. We must
                                make organic the conventional choice and not the
                                exception available only to the rich and
                                educated.
                                <hr />
                                For the organic food, the less it's designed,
                                the better it is. Taste and style is beyond
                                clothes. It's in food; it's in quality. Working
                                out, healthy bodies, organic food-they're all
                                part of the same thing. So always you are
                                welcome to my <strong>Greeno</strong>.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="w-75 mx-auto">
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
            <Summary></Summary>
            <Review></Review>
        </div>
    );
};

export default Home;
