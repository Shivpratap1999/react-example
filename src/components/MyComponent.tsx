import React, { useState, ChangeEvent } from 'react';

const MyComponant: React.FC = () => {
    const [name, setName] = useState<string>('Guest');
    const [age, setAge] = useState<number>(0);
    const [isEmployed, setIsEmployed] = useState<boolean>(false);
    const [about, setAbout] = useState<string>('I am a guest');

    const updateName = () => {
        setName('Shivpratap');
    };

    const updateAge = () => {
        setAge(age + 2);
    };

    const updateAbout = () => {
        setAbout('This is about me');
    };

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(event.target.value));
    };

    const handleAboutChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAbout(event.target.value);
    };

    return (
        <div className="pannel shadow-high use-stat-example">
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Age: {age}</p>
            <input type="number" value={age} onChange={handleAgeChange} />
            <p>Is Employed: {isEmployed ? 'YES' : 'NO'}</p>
            <p>About: {about}</p>
            <textarea value={about} onChange={handleAboutChange} /><br />
            <button className="button" onClick={updateName}>Set Name</button>
            <button className="button" onClick={updateAge}>Increase Age</button>
            <button className="button" onClick={toggleEmployedStatus}>Toggle Status</button>
            <button className="button" onClick={updateAbout}>Set About</button>
        </div>
    );
}

export default MyComponant;