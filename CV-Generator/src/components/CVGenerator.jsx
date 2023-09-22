import '../index.css';


const CVGenerator = ({ fullName, email, phone, address, image }) => {

    return ( 
        <div className="CVGenerator">
			<div className='info-image'>
				<div className='FillPersonalInfos'>
					<h1 className='fullName'>{fullName}</h1>
					<div className='Infos'>
						<h3 className='email'>{email}</h3>
						<h3 className='phone'>{phone}</h3>
						<h3 className='address'>{address}</h3>
					</div>
				</div>
				<img src={image}></img>
			</div>
        </div>
    );
}
 
export default CVGenerator;