import React, { createContext, useState } from 'react';
import UseContextComponentB from './UseContextB.tsx';

// useContext() = React Hook that allows you to share
//                values between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import { createContext } from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//     <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENT
// 1. import { useContext } from 'react';
//    import { MyContext } from './Component'
// 2. const value = useContext(MyContext);

export const UserContext = createContext<string>('');

const UseContextComponentA: React.FC = () => {
    const [name, setName] = useState<string>('shiv');

    const handleClick = () => {
        setName('suraj');
    };

    return (
        <div className="use-context-container">
            <div className="use-context">
                <h1>ComponentA</h1>
                <p>Hello {name}, example of useContext</p>
                <button onClick={handleClick}>Change Name</button>
                <UserContext.Provider value={name}>
                    <UseContextComponentB />
                </UserContext.Provider>
            </div>
        </div>
    );
}

export default UseContextComponentA;
