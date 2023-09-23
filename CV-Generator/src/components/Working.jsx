import '../index.css';
import { useState } from 'react';

const Working = ({ChangeWorking}) => {
    const [FormWorking, setFormWorking] = useState({
        companyName: '',
        title: '',
        stratDate: '',
        endDate: '',
        local: '',
        description: '',
    });

    const HandleFormWorking = (e) => {
        const updatedData = {
            ...FormWorking,
            [e.target.name]: e.target.value,
        };
        setFormWorking(updatedData);
        ChangeWorking(updatedData);
    }

    return (  
        <div className="Working">
            <h2>Working Experience</h2>
            <form className="full-form">
                <div className="form-group">
                    <label htmlFor="name">Company Name</label>
                    <input type="text" 
                    name="companyName"                   
                    onChange={HandleFormWorking} 
                    placeholder="Enter your company name" />
                </div>
                <div className="form-group">
					<label htmlFor="email">Position Title</label>
                    <input type="email" 
                    name="title"
                    onChange={HandleFormWorking} 
                    placeholder="Full Stack Developer" />
                </div>
                <div className="study-date">
                    <div className="start-date">
                        <label htmlFor="phone">Start Date</label>
                        <input 
                        name="stratDate"
                        onChange={HandleFormWorking} 
                        type="date" />
                    </div>
                    <div className="end-date">
                        <label htmlFor="phone">End Date</label>
                        <input 
						name="endDate" 
						onChange={HandleFormWorking} 
						type="date" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Localisation</label>
                    <input 
					type="text" 
					name='local' 
					onChange={HandleFormWorking} 
					placeholder="Casablanca, MA" />
                </div>
				<div className="description-format">
				<label htmlFor="address">Description</label>
                <textarea type="text" 
				name='description' 
				onChange={HandleFormWorking} 
				placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
				</div>
            </form>
            <button className="education-button-add">Add</button>
            <button className="education-button-remove">Remove</button>
        </div> 
    );
}
 
export default Working;
