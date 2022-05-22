import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h2 className="my-5 text-center">
                My all <span style={{ color: "#008037" }}>Orders</span>
            </h2>
            <div className="table-responsive">
                <table class="table text-center">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>12434424</td>
                            <td>Motors</td>
                            <td>230</td>
                            <td>$ 450</td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-dark btn-sm rounded-circle"
                                >
                                    Small button
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;