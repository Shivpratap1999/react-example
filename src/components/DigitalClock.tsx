import React, { useEffect, useState } from 'react';

const DigitalClock: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const padZero = (number: number): string => {
        return number < 10 ? `0${number}` : `${number}`;
    };

    const formatTime = (): string => {
        let hours: number = time.getHours();
        const minutes: number = time.getMinutes();
        const seconds: number = time.getSeconds();
        const meridiem: string = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    };

    return (
        <div className="clock-container-outer">
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </div>
    );
};

export default DigitalClock;