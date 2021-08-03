import { CardsContainer } from "./main-components/Cards-container";
import { cardsArray } from "./main-components/Cardsarray";
import { ScoreBoard } from "./main-components/Score-board";

function Main() {
	return (
		<div id="main">
			<ScoreBoard currentScore="0" highScore="0" />
			<CardsContainer cardsArray={cardsArray} />
		</div>
	);
}
export { Main };
