import React from "react";

const Review = () => {
    const hanldeComment = (event) => {
        event.preventDefault();
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
                        className="form-control"
                        placeholder="Type your opinion"
                    ></textarea>
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="number"
                        name="rating"
                        placeholder="Rating out of 5"
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
