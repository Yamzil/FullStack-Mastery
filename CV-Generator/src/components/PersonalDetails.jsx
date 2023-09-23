import { useState } from 'react';
import '../index.css';

const PersonalDetails = ({ChangPersonalDetails}) => {
	const [FormPersonalDetails, setFormPersonalDetails] = useState({
		fullName: '',
		email: '',
		phone: '',
		address: '',
	});

	const HandleFormPersonalDetails = (e) => {
		const updatedData = {
			...FormPersonalDetails,
			[e.target.name]: e.target.value,
		};
		setFormPersonalDetails(updatedData);
		ChangPersonalDetails(updatedData);
	};

    return (
        <div className="Personal-Details">
            <h2>Personal Details</h2>
            <form className="full-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
					<input type="text" 
					placeholder="Enter your name"
					name="fullName"
					onChange={HandleFormPersonalDetails}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
					<input type="email" 
					placeholder="Enter your email" 
					name="email"
					onChange={HandleFormPersonalDetails}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
					<input type="tel" 
					placeholder="Enter your phone number" 
					name="phone"
					onChange={HandleFormPersonalDetails}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
					<input type="text" 
					placeholder="Enter your address"
					name="address"
					onChange={HandleFormPersonalDetails}/>
                </div>
            </form>
        </div>
    );
}
 
export default PersonalDetails;
