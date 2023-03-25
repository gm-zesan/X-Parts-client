import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avt1 from "../../images/avatar/1 (1).png";
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
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://x-parts.onrender.com/rating")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
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
                    {reviews.map((review) => (
                        <div key={review._id} className="single-testimonial">
                            <Avatar
                                className="mx-auto"
                                src={avt1}
                                style={{
                                    width: 120,
                                    height: 120,
                                    marginBottom: "30px",
                                }}
                            ></Avatar>
                            <p>{review.comment}</p>
                            <Rating
                                name="half-rating-read"
                                value={review.rating}
                                precision={0.5}
                                readOnly
                            />
                            <p
                                style={{
                                    fontStyle: "Italic",
                                    marginTop: "25px",
                                }}
                            >
                                <span className="usertest">{review.name}</span>{" "}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Review;
