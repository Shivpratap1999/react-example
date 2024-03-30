import { Link } from "react-router-dom";
import { UserInfoContextType,UserInfoContext} from "../screens/Home";
import { useContext } from "react";



export default function UserInfo() {
    const userInfos:UserInfoContextType = useContext(UserInfoContext)

    return (
        <div className="userinfo-wrapper">
            <div className="userinfo-image"> {/* Add onClick handler to toggle profile */}
                <img alt="profile pic" src={userInfos.userImageUrl}/>
            </div>
            <h1>{userInfos.userName}</h1>
            <Link className="header-button" to={userInfos.isLoggedIn ? '/entry-action/Login' : '/entry-action/Sign Up'}>
                {userInfos.isLoggedIn ? 'Sign In' : 'Sign Up'}
            </Link>
        </div>
    );
}



UserInfo.defaultProps = {
    userName: 'guest',
    userImageUrl: 'https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=',
    isLoggedIn: false,
};