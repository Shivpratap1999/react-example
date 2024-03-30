import React from 'react';

interface CardProps {
    job_image?: string;
    title?: string;
    description?: string;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className="card">
            <img className="card-image" src={props.job_image} alt="job_image" />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.description}</p>
        </div>
    );
}

Card.defaultProps = {
    job_image: 'https://via.placeholder.com/150',
    title: 'Job Title',
    description: 'this is job description',
};

export default Card;