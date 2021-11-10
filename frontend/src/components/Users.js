import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getUsers()
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [users])

    return (
        <div>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <td>User Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            (user) =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;
