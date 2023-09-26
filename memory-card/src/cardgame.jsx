import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'

const GameCard = () => {
	const [pokemonArray, setpokemonArray] = useState([]);
	let newArray = [...pokemonArray];
	let currentIndex = newArray.length, temporaryValue;
	let randomIndex = Math.floor(Math.random() * currentIndex);

	useEffect(() => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
			.then(response => {
				const results = response.data.results;
				setpokemonArray(results);
			})
			.catch(error => {
				console.error('Error fetching Pokemon data:', error);
			});
	}, []);

	function shuffleCards(pokemonArray) {
		let newArray = [...pokemonArray];
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			temporaryValue = newArray[currentIndex];
			newArray[currentIndex] = newArray[randomIndex];
			newArray[randomIndex] = temporaryValue;
		}
		return newArray;
	}

	return (
		<div className='game'>
			<div className='scoreboard'>
				<span className='score'>Highest Score: </span>
			</div>
			<div className="game-card" onClick={() => setpokemonArray(shuffleCards(pokemonArray))}>
				{pokemonArray.map((pokemon, index) => (
					<div key={index} className="pokemon-card" >
						<h2>{pokemon.name}</h2>
						<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIndex}.png`}/>
					</div>
				))}
			</div>
		</div>
	);
}
 
export default GameCard;