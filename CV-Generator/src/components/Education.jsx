import { useState } from 'react';
import '../index.css';

const Education = ({ChangeEducation}) => {
    const [FormEducation, setFormEducation] = useState({
        universityName: '',
        degreeName: '',
        startDate: '',
        endDate: '',
        localisation: '',
    });

    const HandleFormEducation = (e) => {
        const updatedData = {
            ...FormEducation,
            [e.target.name]: e.target.value,
        };
        setFormEducation(updatedData);
        ChangeEducation(updatedData);
    }

    return (
        <div className="Education">
            <h2>Education</h2>
            <form className="full-form">
                <div className="form-group">
                    <label htmlFor="name">University Name</label>
                    <input type="text"
                    name="universityName"
                    onChange={HandleFormEducation}  
                    placeholder="Enter your university name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Degree Name</label>
                    <input type="email" 
                    name="degreeName"
                    onChange={HandleFormEducation} 
                    placeholder="Enter your degree name" />
                </div>
                <div className="study-date">
                    <div className="start-date">
                        <label htmlFor="phone">Start Date</label>
                        <input
                        name="startDate"
                        onChange={HandleFormEducation} 
                        type="date"/>
                    </div>
                    <div className="end-date">
                        <label htmlFor="phone">End Date</label>
                        <input 
                        name="endDate"
                        onChange={HandleFormEducation} 
                        type="date"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Localisation</label>
                    <input type="text" 
                    name="localisation"
                    onChange={HandleFormEducation} 
                    placeholder="Enter your university's address" />
                </div>
            </form>
            <button className="education-button-add">Add</button>
            <button className="education-button-remove">Remove</button>
        </div>
    );
}
 
export default Education;