import PersonalDetails from './components/PersonalDetails.jsx';
import Resume from './components/Resume.jsx';
import Education from './components/Education.jsx';
import Printcv from './components/Printcv.jsx';
import Working from './components/Working.jsx';
import { useState } from 'react';
import './index.css';

function App() {
	const clearFormFields = () => {
		setFormPersonalDetails({
			fullName: '',
			email: '',
			phone: '',
			address: '',
		});
		setFormEducation({
			universityName: '',
			degreeName: '',
			startDate: '',
			endDate: '',
			localisation: '',
		});
		setFormWorking({
			companyName: '',
			title: '',
			stratDate: '',
			endDate: '',
			local: '',
			description: '',
		});
	};

	const [FormPersonalDetails, setFormPersonalDetails] = useState({
		fullName: '',
		email: '',
		phone: '',
		address: '',
	});

	const HandlePersonalDetailsForm = (PersonalData) => {
		setFormPersonalDetails(PersonalData);
	};

	const [FormEducation, setFormEducation] = useState({
		universityName: '',
		degreeName: '',
		startDate: '',
		endDate: '',
		localisation: '',
	});

	const HandleEducation = (EducationData) => {
		setFormEducation(EducationData);
	};

	const [FormWorking, setFormWorking] = useState({
		companyName: '',
		title: '',
		stratDate: '',
		endDate: '',
		local: '',
		description: '',
	});

	const handleCompanyName = (CompanyName) => {
		setFormWorking(CompanyName);
	}

	return (
		<div className="App">
		<Printcv onClear={clearFormFields} 
				resumeData={{
					fullName: FormPersonalDetails.fullName,
					email: FormPersonalDetails.email,
					phone: FormPersonalDetails.phone,
					address: FormPersonalDetails.address,
					universityName: FormEducation.universityName,
					degreeName: FormEducation.degreeName,
					startDate: FormEducation.startDate,
					endDate: FormEducation.endDate,
					localisation: FormEducation.localisation,
					companyName: FormWorking.companyName,
					title: FormWorking.title,
					stratDate: FormWorking.stratDate,
					endD: FormWorking.endDate,
					local: FormWorking.local,
					description: FormWorking.description,
				}}
		/>
		<div className="setting-resume">
				<div className="cv-format">
					<PersonalDetails ChangPersonalDetails={HandlePersonalDetailsForm}/>
					<Education ChangeEducation={HandleEducation}/>
					<Working ChangeWorking={handleCompanyName}/>
				</div> 
			<div className="resume">
				<Resume fullName={FormPersonalDetails.fullName}
				email={FormPersonalDetails.email}
				phone={FormPersonalDetails.phone}
				address={FormPersonalDetails.address}
				universityName={FormEducation.universityName}
				degreeName={FormEducation.degreeName}
				startDate={FormEducation.startDate}
				endDate={FormEducation.endDate}
				localisation={FormEducation.localisation}
				companyName={FormWorking.companyName}
				title={FormWorking.title}
				stratDate={FormWorking.stratDate}
				endD={FormWorking.endDate}
				local={FormWorking.local}
				description={FormWorking.description}
				/>
			</div>
		</div>
		</div>
  );
}
export default App

