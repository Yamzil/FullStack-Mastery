import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: uuidv4() },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: uuidv4()},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Juni', id: uuidv4() }
    ]);
    return ( 
        <div className="home">
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2> {blog.title} </h2>
					<p> Written by {blog.author} </p>
				</div>
			))}
        </div>
    );
}
 
export default Home;