import React, { useState } from "react";
import { CardsContainer } from "./main-components/Cards-container";
import { ScoreBoard } from "./main-components/Score-board";

function Main() {
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [gameArray, setGameArray] = useState([]);
	const handleScore = (obj) => {
		if (!gameArray.includes(obj)) {
			setGameArray((prevArray) => prevArray.concat(obj));
			setCurrentScore((currentScore) => currentScore + 1);
			setHighScore((highScore) =>
				currentScore < highScore ? highScore : currentScore + 1
			);
		} else {
			setGameArray([]);
			setCurrentScore(0);
		}
	};

	return (
		<div id='main'>
			<ScoreBoard currentScore={currentScore} highScore={highScore} />
			<CardsContainer handleScore={handleScore} />
		</div>
	);
}
export { Main };
