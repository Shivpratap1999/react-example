import React, { useContext } from 'react';
import { UserContext } from './UseContextA';

// useContext() = React Hook that allow you to share
//                value between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//     <Chile />
//   </MyContext.Provide>


// CONSUMER COMPONENT
// 1. import {useContext} from 'react';
//    import {MyContext} from './Compotent'
// 2. const value = userContext(MyContext);

const UseContextComponentD: React.FC= () =>{
    const name = useContext(UserContext);
    return (
        <div className="use-context">
            <h1>ComponentD</h1>
            <p>bye {name}</p>
        </div>
    );
}


export default UseContextComponentD;
