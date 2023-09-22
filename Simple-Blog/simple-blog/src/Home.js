import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {


    const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then(res => {
				if (!res.ok) {
					throw Error('could not fetch the data for that resource');
				}
				return res.json();
			})
			.then(data => {
				setBlogs(data);
			})
			.catch(err => {
				console.log(err.message);
			});
	});


    return ( 
        <div className="home">
			{blogs && <BlogList blogs={blogs} />}
        </div>
    );
}
 
export default Home;