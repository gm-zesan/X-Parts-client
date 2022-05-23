import React from "react";
import toast from "react-hot-toast";

const UserRow = ({ user, refetch }) => {
    const { name, email, designation, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("Failed to Make an admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            });
    };
    return (
        <tr>
            <th>1</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{designation}</td>
            <td>
                {role !== "admin" && (
                    <button onClick={makeAdmin} class="btn btn-dark btn-sm">
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <button class="btn btn-danger btn-sm">Remove User</button>
            </td>
        </tr>
    );
};

export default UserRow;