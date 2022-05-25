import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";
const Review = () => {
    const [user] = useAuthState(auth);
    const hanldeComment = (event) => {
        event.preventDefault();
        const comment = event.target.comment.value;
        const rating = event.target.rating.value;

        const url = `https://calm-harbor-28456.herokuapp.com/rating`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                comment,
                rating,
                name: user.displayName,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Review posted successfully");
                event.target.reset();
            });
    };
    return (
        <div className="comment-wrap col-md-7 col-12 mx-auto">
            <h2 className="my-5 text-center">
                Leave a <span style={{ color: "#008037" }}>Comment</span>
            </h2>
            <form onSubmit={hanldeComment} id="algin-form">
                <div className="form-group">
                    <textarea
                        rows="5"
                        name="comment"
                        className="form-control"
                        placeholder="Type your opinion"
                    ></textarea>
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="rating"
                        placeholder="Give your rating here"
                    />
                </div>
                <div className="form-group text-right mt-5">
                    <button style={{ width: "100%" }} className="btn-custom">
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Review;
