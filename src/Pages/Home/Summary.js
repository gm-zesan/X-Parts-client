import React from "react";
import CountUp from "react-countup";
const Summary = () => {
    return (
        <div className="bg1">
            <div className="overlayuser text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="display-5">
                                <span className="fw-bold">Customers</span>
                                <br />
                                <CountUp duration={1} end={120} />
                                M+
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p className="display-5">
                                <span className="fw-bold">Annual revenue</span>
                                <br />
                                <CountUp duration={1} end={33} />
                                K+
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <p className="display-5">
                                <span className="fw-bold">Reviews</span>
                                <br />
                                <CountUp duration={1} end={100} />
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p className="display-5">
                                <span className="fw-bold">served</span>
                                <br />
                                <CountUp duration={1} end={100} />+
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
