import React from 'react';

const Button: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        (e.target as HTMLButtonElement).textContent = 'Clicked ';
    };

    const handleDoubleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        (e.target as HTMLButtonElement).textContent = 'Clicked-2 !!';
    };

    return (
        <div className="button-wrapper">
            <button className="button" onClick={handleClick} onDoubleClick={handleDoubleClick}>Click me</button>
        </div>
    );
}

export default Button;