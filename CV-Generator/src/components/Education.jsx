import '../index.css';

const Education = () => {
    return (
        <div className="Education">
            <h2>Education</h2>
            <form className="full-form">
                <div className="form-group">
                    <label htmlFor="name">University Name</label>
                    <input type="text" placeholder="Enter your university name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Degree Name</label>
                    <input type="email" placeholder="Enter your degree name" />
                </div>
                <div className="study-date">
                    <div className="start-date">
                        <label htmlFor="phone">Start Date</label>
                        <input type="date"/>
                    </div>
                    <div className="end-date">
                        <label htmlFor="phone">End Date</label>
                        <input type="date"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Localisation</label>
                    <input type="text" placeholder="Enter your university's address" />
                </div>
            </form>
            <button className="education-button-add">Add</button>
            <button className="education-button-remove">Remove</button>
        </div>
    );
}
 
export default Education;