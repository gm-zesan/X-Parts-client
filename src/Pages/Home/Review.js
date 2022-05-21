import { Avatar } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avt1 from "../../images/avatar/1 (1).png";
import avt2 from "../../images/avatar/1 (2).png";
import avt3 from "../../images/avatar/1 (3).png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "#008037", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "#008037", fontSize: "45px" }} />
        </div>
    );
};
const Review = () => {
    return (
        <div className="test-wrap">
            <div className="testimonial mx-auto">
                <h2 className="text-center">
                    TESTI<span style={{ color: "#008037" }}>MONIAL</span>
                </h2>
                <Slider
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    dots
                    autoplay
                >
                    <div className="single-testimonial">
                        <Avatar
                            className="mx-auto"
                            src={avt1}
                            style={{
                                width: 120,
                                height: 120,
                                marginBottom: "30px",
                            }}
                        ></Avatar>
                        <p>
                            Organic farmers and food producers grow and produce
                            food without using synthetic chemicals such as
                            pesticides and artificial fertilisers. They do not
                            use genetically modified (GM) components or expose
                            food to irradiation. It is really good. And Good for
                            health also.
                        </p>
                        <Rating
                            name="half-rating-read"
                            value={2.5}
                            precision={0.5}
                            readOnly
                        />
                        <p style={{ fontStyle: "Italic", marginTop: "25px" }}>
                            <span className="usertest">Sonia patal</span>{" "}
                            Businessman
                        </p>
                    </div>
                    <div className="single-testimonial">
                        <Avatar
                            className="mx-auto"
                            src={avt2}
                            style={{
                                width: 120,
                                height: 120,
                                marginBottom: "30px",
                            }}
                        ></Avatar>
                        <p>
                            Organic farmers and food producers grow and produce
                            food without using synthetic chemicals such as
                            pesticides and artificial fertilisers. They do not
                            use genetically modified (GM) components or expose
                            food to irradiation. It is really good. And Good for
                            health also.
                        </p>
                        <Rating
                            name="half-rating-read"
                            value={2.5}
                            precision={0.5}
                            readOnly
                        />
                        <p style={{ fontStyle: "Italic", marginTop: "25px" }}>
                            <span className="usertest">Jhon bro</span>{" "}
                            Web-developer
                        </p>
                    </div>
                    <div className="single-testimonial">
                        <Avatar
                            className="mx-auto"
                            src={avt3}
                            style={{
                                width: 120,
                                height: 120,
                                marginBottom: "30px",
                            }}
                        ></Avatar>
                        <p>
                            Organic farmers and food producers grow and produce
                            food without using synthetic chemicals such as
                            pesticides and artificial fertilisers. They do not
                            use genetically modified (GM) components or expose
                            food to irradiation. It is really good. And Good for
                            health also.
                        </p>
                        <Rating
                            name="half-rating-read"
                            value={2.5}
                            precision={0.5}
                            readOnly
                        />
                        <p style={{ fontStyle: "Italic", marginTop: "25px" }}>
                            <span className="usertest">Deshi vai</span> Media
                            Analyst
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Review;
