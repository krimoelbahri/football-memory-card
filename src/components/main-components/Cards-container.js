import { Card } from "./Card";
import React, { useState, useEffect } from "react";
import { cardsArray } from "./Cards-array";
import { shuffleArray } from "../helpers/array-helpers";

function CardsContainer(props) {
	const [shuffledArray, setShuffledArray] = useState(cardsArray);
	const handleClick = (e) => {
		setShuffledArray(shuffleArray(cardsArray));
		let index = e.target.dataset.index;
		props.handleScore(cardsArray[index]);
	};
	useEffect(() => {
		setShuffledArray(shuffleArray(cardsArray));
		return () => {};
	}, []);
	return (
		<div id='cards-container'>
			{shuffledArray.map((card, i) => {
				return (
					<React.Fragment key={card.playerId + i}>
						<Card
							handleClick={handleClick}
							imgSrc={card.imgSrc}
							playerName={card.playerName}
							index={card.index}
						/>
					</React.Fragment>
				);
			})}
		</div>
	);
}
export { CardsContainer };
