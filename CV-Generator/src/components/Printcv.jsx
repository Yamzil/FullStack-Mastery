import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

const PDFDocument = ({ fullName, email, phone, address, universityName, degreeName, startDate, endDate, localisation, companyName, title, stratDate, endD, local, description }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text>{fullName}</Text>
				<Text>Web Developer</Text>
			</View>
			<View style={styles.section}>
				<Text>Contact Information</Text>
				<Text>Email: {email}</Text>
				<Text>Phone: {phone}</Text>
				<Text>Address: {address}</Text>
			</View>
			<View style={styles.section}>
				<Text>Education</Text>
				<Text>{startDate} - {endDate}</Text>
				<Text>{universityName} - {degreeName}</Text>
				<Text>{localisation}</Text>
			</View>
			<View style={styles.section}>
				<Text>Work Experience</Text>
				<Text>{title} - {companyName} - {stratDate} to {endD}</Text>
				<Text>{local}</Text>
				<Text>{description}</Text>
			</View>
		</Page>
	</Document>
);


const Printcv = ({ onClear, ...resumeData }) => {
		const handleDownloadPDF = () => {
			pdf(<PDFDocument {...resumeData} />)
				.toBlob()
				.then((pdfBlob) => {
					const url = URL.createObjectURL(pdfBlob);
					const a = document.createElement('a');
					a.style.display = 'none';
					a.href = url;
					a.download = 'resume.pdf';
					document.body.appendChild(a);
					a.click();
					URL.revokeObjectURL(url);
				});
		};
    return ( 
        <div className="pdf-cv">
			<button onClick={handleDownloadPDF} className="get-resume">Get Your Resume</button>
            <button onClick={onClear} className="clear-resume">Clear Your Resume</button>
		</div>
     );
}
 
export default Printcv;