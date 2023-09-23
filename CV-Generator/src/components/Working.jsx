import '../index.css';
import { useState } from 'react';

const Working = ({CompanyName, Title, StratDate, EndDate, Local, Description}) => {
    const [companyName, setCompanyName] = useState('');
    const [title, setTitle] = useState('');
    const [stratDate, setStratDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [local, setLocal] = useState('');
    const [description, setDescription] = useState('');

    const handleCompanyName = (e) => {
        const NewCompanyName = e.target.value;	
        setCompanyName(NewCompanyName);
        CompanyName(NewCompanyName);
    }

    const handleTitle = (e) => {
        const NewTitle = e.target.value;
        setTitle(NewTitle);
        Title(NewTitle);
    }

    const handleStratDate = (e) => {
        const NewStratDate = e.target.value;
        setStratDate(NewStratDate);
        StratDate(NewStratDate);
    }

    const handleEndDate = (e) => {
        const NewEndDate = e.target.value;
        setEndDate(NewEndDate);
        EndDate(NewEndDate);
    }

    const handleLocal = (e) => {
        const NewLocal = e.target.value;
        setLocal(NewLocal);
        Local(NewLocal);
    }

    const handleDescription = (e) => {
        const NewDescription = e.target.value;
        setDescription(NewDescription);
        Description(NewDescription);
    }

    return (  
        <div className="Working">
            <h2>Working Experience</h2>
            <form className="full-form">
                <div className="form-group">
                    <label htmlFor="name">Company Name</label>
                    <input type="text" value={companyName } onChange={handleCompanyName} placeholder="Enter your company name" />
                </div>
                <div className="form-group">
					<label htmlFor="email">Position Title</label>
                    <input type="email" value={title} onChange={handleTitle} placeholder="Full Stack Developer" />
                </div>
                <div className="study-date">
                    <div className="start-date">
                        <label htmlFor="phone">Start Date</label>
                        <input value={stratDate} onChange={handleStratDate} type="date" />
                    </div>
                    <div className="end-date">
                        <label htmlFor="phone">End Date</label>
                        <input value={endDate} onChange={handleEndDate} type="date" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Localisation</label>
                    <input type="text" value={local} onChange={handleLocal} placeholder="Casablanca, MA" />
                </div>
				<div className="description-format">
				<label htmlFor="address">Description</label>
                <textarea type="text" value={description} onChange={handleDescription} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
				</div>
            </form>
            <button className="education-button-add">Add</button>
            <button className="education-button-remove">Remove</button>
        </div> 
    );
}
 
export default Working;
