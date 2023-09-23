import '../index.css';


const Resume = ({ fullName, email, phone, address, universityName, degreeName, startDate, endDate, localisation, companyName, title, stratDate, endD, local, description  }) => {

    return (
		<div className="cv">
			<header>
				<h1>{fullName}</h1>
				<p>Web Developer</p>
			</header>
			<section className="contact">
				<h2>Contact Information</h2>
				<ul>
					<li>Email: {email}</li>
					<li>Phone: {phone}</li>
					<li>Address: {address}</li>
				</ul>
			</section>
			<section className="education">
				<h2>Education</h2>
				<p> {startDate} - {endDate}</p>
				<p>{universityName} - {degreeName}</p>
				<p>{localisation}</p>
			</section>
			<section className="experience">
				<h2>Work Experience</h2>
				<p>{title} - {companyName} - {stratDate} to {endD}</p>
				<p>{local}</p>
				<p>{description}</p>
			</section>
		</div>
	);
}
 
export default Resume;
