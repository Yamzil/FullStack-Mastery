import { useState } from 'react';
import '../index.css';

const Education = ({UniversityName, DegreeName, StartDate, EndDate, Localisation}) => {
    const [universityName, setUniversityName] = useState('');
    const [degreeName, setDegreeName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [localisation, setLocalisation] = useState('');

    const handleUniversityName = (e) => {
        const NewUniversityName = e.target.value;	
        setUniversityName(NewUniversityName);
        UniversityName(NewUniversityName);
    };

    const handleDegreeName = (e) => {
        const NewDegreeName = e.target.value;
        setDegreeName(NewDegreeName);
        DegreeName(NewDegreeName);
    };

    const handleStartDate = (e) => {
        const NewStartDate = e.target.value;
        setStartDate(NewStartDate);
        StartDate(NewStartDate);
    };

    const handleEndDate = (e) => {
        const NewEndDate = e.target.value;
        setEndDate(NewEndDate);
        EndDate(NewEndDate);
    };

    const handleLocalisation = (e) => {
        const NewLocalisation = e.target.value;
        setLocalisation(NewLocalisation);
        Localisation(NewLocalisation);
    };

    return (
        <div className="Education">
            <h2>Education</h2>
            <form className="full-form">
                <div className="form-group">
                    <label htmlFor="name">University Name</label>
                    <input type="text" value={universityName} onChange={handleUniversityName}  placeholder="Enter your university name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Degree Name</label>
                    <input type="email" value={degreeName} onChange={handleDegreeName} placeholder="Enter your degree name" />
                </div>
                <div className="study-date">
                    <div className="start-date">
                        <label htmlFor="phone">Start Date</label>
                        <input value={startDate} onChange={handleStartDate} type="date"/>
                    </div>
                    <div className="end-date">
                        <label htmlFor="phone">End Date</label>
                        <input value={endDate} onChange={handleEndDate} type="date"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Localisation</label>
                    <input type="text" value={localisation} onChange={handleLocalisation} placeholder="Enter your university's address" />
                </div>
            </form>
            <button className="education-button-add">Add</button>
            <button className="education-button-remove">Remove</button>
        </div>
    );
}
 
export default Education;