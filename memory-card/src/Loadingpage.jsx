import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';


const LoadingPage = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		let timer;
		if (loading) {
			timer = setTimeout(() => {
				setLoading(false);
				navigate('/game');
			}, 2000);
		}
		return () => clearTimeout(timer);
	}, [loading, navigate]);

	const handleStartGame = () => {
		setLoading(true);
	};

	return (
		<div className="loading-page">
			<h1 className="title">Memory Card</h1>
			{loading ? (<div className="loader"></div>) : (<button className="start-game" onClick={handleStartGame}>Start Game</button>)}
		</div>
	)
}
 
export default LoadingPage;