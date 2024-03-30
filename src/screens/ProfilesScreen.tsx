import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserInfoResponse, useFetchUserQuery } from "../features/users/user_api_slice";
import { useState } from "react";

const profiles: number[] = [1, 2, 3, 4, 5];

export default function ProfileScreen() {
    const [numUser, setNumUser] = useState(10);
    let userResponse: UserInfoResponse = { users: [] }
    const { data = userResponse, isFetching } = useFetchUserQuery(numUser);
    return (
        <div>
            <Header />
            <h1 style={{ margin: "100px" }}>Profile Screen</h1>
            <div className="pannel shadow-high profiles-container">
                <div>
                    <select value={numUser} onChange={(e) => { setNumUser(Number(e.target.value)) }}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div className="profiles-link-container">
                    {data.users.map((user) => (
                        <NavLink key={user.id} to={`${user.id}`} className={({ isActive }) => {
                            return isActive ? "profile-links profile-links-visited" : "profile-links"
                        }}>Profile {user.id}</NavLink>
                    ))}
                </div>

                <Outlet />
            </div>
            <Footer />
        </div>
    )
}