import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

const AllUser = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("https://calm-harbor-28456.herokuapp.com/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-2xl my-5 text-center">
                Total Users: {users.length}
            </h2>
            <div className="overflow-x-auto table-responsive">
                <table className="table text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <UserRow
                                key={user._id}
                                user={user}
                                index={index + 1}
                                refetch={refetch}
                            ></UserRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;
