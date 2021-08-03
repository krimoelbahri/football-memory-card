import React, { useState, useEffect } from "react";
import { Card } from "./Card";

function CardsContainer(props) {
	return (
		<div id="cards-container">
			{props.cardsArray.map((card, i) => {
				return (
					<React.Fragment key={card.playerId + i}>
						<Card imgSrc={card.imgSrc} playerName={card.playerName} />
					</React.Fragment>
				);
			})}
		</div>
	);
}
export { CardsContainer };
