import { useState } from 'react';
import '../index.css';

const PersonalDetails = ({ ChangeFullName, ChangeEmail, ChangePhone, ChangeAdresse, changeImage }) => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [image, setImage] = useState(null);

	const handleFullName = (e) => {
		const NewFullName = e.target.value;	
		setFullName(NewFullName);
		ChangeFullName(NewFullName);
	};


	const handleEmail = (e) => {
		const NewEmail = e.target.value;
		setEmail(NewEmail);
		ChangeEmail(NewEmail);
	};


	const handlePhone = (e) => {
		const NewPhone = e.target.value;
		setPhone(NewPhone);
		ChangePhone(NewPhone);
	};


	const handleAddress = (e) => {
		const NewAddress = e.target.value;
		setAddress(NewAddress);
		ChangeAdresse(NewAddress);
	};

	const handleImage = (e) => {
		const NewImage = e.target.files[0];
		setImage(NewImage);
		changeImage(NewImage);

	}
    return (
        <div className="Personal-Details">
            <h2>Personal Details</h2>
            <form className="full-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
					<input type="text" placeholder="Enter your name" value={fullName} onChange={handleFullName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
					<input type="email" placeholder="Enter your email" value={email} onChange={handleEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
					<input type="tel" placeholder="Enter your phone number" value={phone}  onChange={handlePhone}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
					<input type="text" placeholder="Enter your address" value={address} onChange={handleAddress}/>
                </div>
            </form>
			<input className="img-button" type="file" accept="image/*" value={image} onChange={handleImage}/>
        </div>
    );
};
 
export default PersonalDetails;
