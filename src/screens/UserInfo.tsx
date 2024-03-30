import { useState } from 'react';
import { UserInfoResponse, useFetchUserQuery } from '../features/users/user_api_slice';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UserInfos() {
    const [numUser, setNumUser] = useState(10);
    let userResponse: UserInfoResponse = {users:[]}
    const { data=userResponse, isFetching } = useFetchUserQuery(numUser);
    return (
        <div>
            <Header />
            <div style={{ margin: "100px" }}>
                <h1>Website Users Data</h1>
                <div>
                    <select value={numUser} onChange={(e)=>{setNumUser(Number(e.target.value))}}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div>
                    <p>Number of User fetched: {data.users.length}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>First Name</th>
                                <th>Phone</th>
                                <th>Password</th>
                                <th>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.length > 0 ?
                            data.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.password}</td>
                                    <td><img alt="userImage" src={user.image} height={50} /></td>
                                </tr>
                            )):<tr></tr>}
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer />
        </div>
    )
}