import React, { useEffect, useState } from 'react';

/**
    useEffect() : React Hook that tells React DO SOME CODE WHEN (pick one)
                This Component re-render
                This Component mount
                The state of a value

    useEffect(function,[dependencies])

    1. useEffect(() => {})           //Runs after every re-render
    2. useEffect(() => {},[])        //Runs only on mount
    3. useEffect(()=>{},[value])     //Runs on mount + when value chnage

    USES:
    #1. Event Listeners
    #2. DOM manipulation
    #3. Subscriptions (real-time update)
    #4. Fetching Data from an API
    #5. Clean up when a component unmount
 */

function UseEffectComponent() {
    const [count, setCount] = useState<number>(0);
    const [color, setColor] = useState<string>('green');
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [hight, setHight] = useState<number>(window.innerHeight);

    const handleResize = () => {
        setHight(window.innerHeight);
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        document.title = `count: ${count} color: ${color}`;
    }, [count, color]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        document.title = `size ${width} X ${hight}`;
    }, [width, hight]);

    const handleIncrementClick = () => {
        setCount(() => count + 1);
    };
    const handleDecrementClick = () => {
        setCount(() => count - 1);
    };
    const changeColor = () => {
        setColor(c => (c === 'green' ? 'red' : 'green'));
    };
    return (
        <div className="use-effect">
            <h1>Use Effect</h1>
            <p>Window Width: {width}px</p>
            <p>Window Hight: {hight}px</p>
            <p style={{ color }}>count: {count}</p>
            <button onClick={handleIncrementClick}> Increment </button>
            <button onClick={handleDecrementClick}> decrement </button> <br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default UseEffectComponent;
