import '../index.css';

const Working = () => {
    return (  
        <div className="Working">
            <h2>Working Experience</h2>
            <form className="full-form">
                <div className="form-group">
                    <label htmlFor="name">Company Name</label>
                    <input type="text" placeholder="Enter your company name" />
                </div>
                <div className="form-group">
					<label htmlFor="email">Position Title</label>
                    <input type="email" placeholder="Full Stack Developer" />
                </div>
                <div className="study-date">
                    <div className="start-date">
                        <label htmlFor="phone">Start Date</label>
                        <input type="date" />
                    </div>
                    <div className="end-date">
                        <label htmlFor="phone">End Date</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Localisation</label>
                    <input type="text" placeholder="Casablanca, MA" />
                </div>
				<div className="description-format">
				<label htmlFor="address">Description</label>
				<textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
				</div>
            </form>
            <button className="education-button-add">Add</button>
            <button className="education-button-remove">Remove</button>
        </div> 
    );
}
 
export default Working;
