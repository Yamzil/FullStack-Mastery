import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const GameCard = () => {
	const [pokemonArray, setPokemonArray] = useState([{
		name: "",
		id: 0,
	}]);

	const [score, setScore] = useState(0);

	function handleScore() {
		setScore(score + 1);
	}

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?limit=5')
			.then(response => {
				const results = response.data.results;
				const pokemonData = results.map((pokemon, index) => ({
					name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
					id: index + 1,
				}));
				setPokemonArray(shuffleCards(pokemonData));
			})
			.catch(error => {
				console.error('Error fetching Pokemon data:', error);
			});
	}, []);

	function shuffleCards(pokemonArray) {
		let newArray = [...pokemonArray];
		let currentIndex = newArray.length,
			temporaryValue;
		while (currentIndex !== 0) {
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			temporaryValue = newArray[currentIndex];
			newArray[currentIndex] = newArray[randomIndex];
			newArray[randomIndex] = temporaryValue;
		}
		return newArray;
	}

	function handleClickedCard() {
		setPokemonArray(shuffleCards(pokemonArray))
		handleScore();
	}
	return (
		<div className="game">
			<div className="scoreboard">
				<span className="score">Score: {score}</span>
				<span className="score">Highest Score: </span>
			</div>
			<div className="game-card" onClick={handleClickedCard} >
				{pokemonArray.map(pokemon => (
					<div key={pokemon.id} className="pokemon-card">
						<h2>{pokemon.name}</h2>
						<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default GameCard;