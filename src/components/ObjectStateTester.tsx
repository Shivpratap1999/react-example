import React, { useState, ChangeEvent } from 'react';

/**
 * author: Shivpratap
 * ------------------------
 * userState: userState is a hook, it is used to change the state (value).
 *            NOTE: always use an update function with useState hook.
 * onchange: onChange is an event which is applicable in input, radio, textarea, check-box, etc.
 */

interface ComputerState {
    ram: number;
    processor: string;
    display: number;
    waitInKg: number;
}

const ObjectStateTester: React.FC = () => {
    const [computer, setComputer] = useState<ComputerState>({ ram: 8, processor: 'i5', display: 14, waitInKg: 1 });

    const handleRamChange = (event: ChangeEvent<HTMLInputElement>) => {
        setComputer(c => ({ ...c, ram: parseInt(event.target.value) }));
    };

    const handleDisplayChange = (event: ChangeEvent<HTMLInputElement>) => {
        setComputer(c => ({ ...c, display: parseInt(event.target.value) }));
    };

    const handleWaitChange = (event: ChangeEvent<HTMLInputElement>) => {
        setComputer(c => ({ ...c, waitInKg: parseFloat(event.target.value) }));
    };

    const handleProcessorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setComputer(c => ({ ...c, processor: event.target.value }));
    };

    return (
        <div className="object-state-test-container">
            <h2>Computer info:</h2>
            <h2>Display: {computer.display} inch</h2>
            <h2>RAM: {computer.ram} GB</h2>
            <h2>Processor: {computer.processor}</h2>
            <h2>Weight: {computer.waitInKg} KG</h2>
            <input type="text" value={computer.ram} onChange={handleRamChange} />
            <input type="text" value={computer.display} onChange={handleDisplayChange} />
            <input type="text" value={computer.processor} onChange={handleProcessorChange} />
            <input type="text" value={computer.waitInKg} onChange={handleWaitChange} />
        </div>
    );
}

export default ObjectStateTester;