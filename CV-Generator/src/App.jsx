import PersonalDetails from './components/PersonalDetails.jsx';
import Resume from './components/Resume.jsx';
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

	const [universityName, setUniversityName] = useState('');
	const [degreeName, setDegreeName] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [localisation, setLocalisation] = useState('');

	const [companyName, setCompanyName] = useState('');
	const [title, setTitle] = useState('');
	const [stratDate, setStratDateJob] = useState('');
	const [endD, setEndDateJob] = useState('');
	const [local, setLocal] = useState('');
	const [description, setDescription] = useState('');



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

	const handleUniversityName = (NewUniversityName) => {
		setUniversityName(NewUniversityName);
	};

	const handleDegreeName = (NewDegreeName) => {
		setDegreeName(NewDegreeName);
	};

	const handleStartDate = (NewStartDate) => {
		setStartDate(NewStartDate);
	};

	const handleEndDate = (NewEndDate) => {
		setEndDate(NewEndDate);
	};

	const handleLocalisation = (NewLocalisation) => {
		setLocalisation(NewLocalisation);
	};

	const handleCompanyName = (NewCompanyName) => {
		setCompanyName(NewCompanyName);
	}

	const handleTitle = (NewTitle) => {
		setTitle(NewTitle);
	}

	const handleStratDateJob = (NewStratDate) => {
		setStratDateJob(NewStratDate);
	}

	const handleEndDateJob = (NewEndDate) => {
		setEndDateJob(NewEndDate);
	}

	const handleLocalJob = (NewLocal) => {
		setLocal(NewLocal);
	}

	const handleDescription = (NewDescription) => {
		setDescription(NewDescription);
	}

	return (
		<div className="App">
		<Printcv />
		<div className="setting-resume">
				<div className="cv-format">
					<PersonalDetails ChangeFullName={handleFullNameChange}
						ChangeEmail={handleEmailChange}
						ChangePhone={handlePhoneChange}
						ChangeAdresse={handleAddressChange}
					/>
					<Education UniversityName={handleUniversityName}
						DegreeName={handleDegreeName}
						StartDate={handleStartDate}
						EndDate={handleEndDate}
						Localisation={handleLocalisation}
					/>
					<Working CompanyName={handleCompanyName}
						Title={handleTitle}
						StratDate={handleStratDateJob}
						EndDate={handleEndDateJob}
						Local={handleLocalJob}
						Description={handleDescription}
					/>
				</div> 
			<div className="resume">
				<Resume fullName={fullName}
				email={email}
				phone={phone}
				address={address}
				universityName={universityName}
				degreeName={degreeName}
				startDate={startDate}
				endDate={endDate}
				localisation={localisation}
				companyName={companyName}
				title={title}
				stratDate={stratDate}
				endD={endD}
				local={local}
				description={description}

				/>
			</div>
		</div>
		</div>
  );
}

export default App

