import PersonalDetails from './components/PersonalDetails.jsx';
import CVGenerator from './components/CVGenerator.jsx';
import Education from './components/Education.jsx';
import Printcv from './components/Printcv.jsx';
import Working from './components/Working.jsx';
import { useState } from 'react';
import './index.css';

function App() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [image, setImage] = useState(null);

	const handleFullNameChange = (newFullName) => {
		setFullName(newFullName);
	};

	const handleEmailChange = (newEmail) => {
		setEmail(newEmail);
	};

	const handlePhoneChange = (newPhone) => {
		setPhone(newPhone);
	};

	const handleAddressChange = (newAddress) => {
		setAddress(newAddress);
	};

	const handleImageChange = (newImage) => {
		setImage(newImage);
	};

	return (
		<div className="App">
		<Printcv />
		<div className="cv-format">
			<PersonalDetails ChangeFullName={handleFullNameChange}
			ChangeEmail={handleEmailChange}
			ChangePhone={handlePhoneChange}
			ChangeAdresse={handleAddressChange} 
			changeImage={handleImageChange}
			/>
			<Education />
			<Working  />
		</div> 
		<CVGenerator fullName={fullName} 
		email={email}
		phone={phone}
		address={address}
		image={image}
		/>
		</div>
  );
}

export default App

