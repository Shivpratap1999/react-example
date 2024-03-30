import { createContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ColorPicker from '../components/ColorPicker';
import Counter from '../components/Counter';
import DigitalClock from '../components/DigitalClock';
import Jobs from '../components/Jobs';
import List from '../components/List';
import MyComponant from '../components/MyComponent';
import ObjectStateTester from '../components/ObjectStateTester';
import ReduxComponent from '../components/ReduxExp';
import ToDoList from '../components/ToDoList';
import UseContextComponentA from '../components/UseContextA';
import UseEffectComponent from '../components/UseEffectComponent';
import UserGreeting from '../components/UserGreeting';

interface FoodItem {
    id: number;
    name: string;
    calories: number;
}

export interface UserInfoContextType {
    userName: string,
    userImageUrl: string,
    isLoggedIn: boolean,
}

const fruits: FoodItem[] = [
    { id: 1, name: 'apple', calories: 40 },
    { id: 2, name: 'banana', calories: 56 },
    { id: 3, name: 'cherry', calories: 80 },
    { id: 4, name: 'coconut', calories: 130 },
    { id: 5, name: 'pineapple', calories: 150 }
];

const vegetables: FoodItem[] = [
    { id: 1, name: 'potatoes', calories: 20 },
    { id: 2, name: 'celery', calories: 46 },
    { id: 3, name: 'carrots', calories: 19 },
    { id: 4, name: 'broccoli', calories: 13 },
    { id: 5, name: 'corn', calories: 15 }
];

export const UserInfoContext = createContext<UserInfoContextType>({ userName: 'guest', isLoggedIn: false, userImageUrl: "https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" });
export default function HomeScreen() {
    let userInfos: UserInfoContextType = { userName: 'Shivpratp', isLoggedIn: false, userImageUrl: "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" }
    return (
        <>
            <UserInfoContext.Provider value={userInfos}>
                <Header />
                <UserGreeting />
            </UserInfoContext.Provider>
            <Jobs />
            {fruits.length > 0 && <List items={fruits} category="Fruits" />}
            {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
            <Button />
            <MyComponant />
            <Counter />
            <ColorPicker />
            <ObjectStateTester />
            <ToDoList />
            <UseEffectComponent />
            <DigitalClock />
            <UseContextComponentA />
            <ReduxComponent />
            <Footer />
        </>
    );
}