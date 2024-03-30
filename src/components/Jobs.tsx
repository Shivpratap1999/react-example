import React from 'react';
import Card from './Card';

interface Job {
    id: number;
    title: string;
    salary: number;
    description: string;
    job_image: string;
}

const Jobs: React.FC = () => {
    const JobList: Job[] = [
        { id: 1, title: 'Software Developer', salary: 50000, description: 'developed and deploy clean and scalable code', job_image: 'https://png.pngtree.com/png-vector/20210423/ourmid/pngtree-job-interview-concept-interview-with-the-candidate-positions-flat-png-image_3228032.jpg' },
        { id: 2, title: 'QA', salary: 45000, description: 'have to check quality of software', job_image: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-recruiting-looking-for-cattle-to-find-a-job-image_1288225.jpg' },
        { id: 3, title: 'Full Stack', salary: 60000, description: 'design and develop solutions for frontend and backend', job_image: 'https://img.lovepik.com/element/45009/8143.png_860.png' },
        { id: 4, title: 'Team Lead', salary: 75000, description: 'Responsibility to lead team and got complete projects on time', job_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5Vzazm6l4G7xR3Xat1Ib2BLdKhrbMFDIr40OOAYFUg&s' },
        { id: 5, title: 'Software Developer 1', salary: 50000, description: 'developed and deploy clean and scalable code', job_image: 'https://png.pngtree.com/png-vector/20210423/ourmid/pngtree-job-interview-concept-interview-with-the-candidate-positions-flat-png-image_3228032.jpg' },
        { id: 6, title: 'QA 1', salary: 45000, description: 'have to check quality of software', job_image: 'https://png.pngtree.com/element_our/20190531/ourmid/pngtree-recruiting-looking-for-cattle-to-find-a-job-image_1288225.jpg' },
        { id: 7, title: 'Full Stack 1', salary: 60000, description: 'design and develop solutions for frontend and backend', job_image: 'https://img.lovepik.com/element/45009/8143.png_860.png' },
        { id: 8, title: 'Team Lead 1', salary: 75000, description: 'Responsibility to lead team and got complete projects on time', job_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5Vzazm6l4G7xR3Xat1Ib2BLdKhrbMFDIr40OOAYFUg&s' },
    ];

    return (
        <div className="pannel shadow-low job-container">
            <h2>Open Job Positions</h2>
            {JobList.map(job => (
                <Card key={job.id} title={job.title} description={job.description} job_image={job.job_image} />
            ))}
        </div>
    );
}

export default Jobs;
