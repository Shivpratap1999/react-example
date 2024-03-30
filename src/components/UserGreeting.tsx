import React, { useContext } from 'react';
import { UserInfoContext, UserInfoContextType } from '../screens/Home';

const UserGreeting: React.FC = () => {
    const userInfos:UserInfoContextType = useContext(UserInfoContext)
    const welcomeMessage = <h2 className="pannel welcome-box green-bg">Welcome {userInfos.userName}</h2>;
    const loginPrompt = <h2 className="pannel welcome-box red-bg">Please signin to continue</h2>;
    return (userInfos.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.defaultProps = {
    username: 'Guest',
    login: false,
};
export default UserGreeting;
