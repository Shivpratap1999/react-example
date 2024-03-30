import React, { useState, ChangeEvent } from 'react';

const ColorPicker: React.FC = () => {
    const [color, setColor] = useState<string>('#FFFFFF');

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color-picker">Select a color:</label>
            <input id="color-picker" type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;