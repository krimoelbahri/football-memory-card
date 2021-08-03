function ScoreBoard(props) {
	return (
		<div className="score-board mrg-5px flex-r">
			<div className="current-score mrg-5px flex-r">
				<p className="pd-5px">Current score:</p>
				<p className="pd-5px">{props.currentScore}</p>
			</div>
			<div className="high-score mrg-5px flex-r">
				<p className="pd-5px">high score:</p>
				<p className="pd-5px">{props.highScore}</p>
			</div>
		</div>
	);
}
export { ScoreBoard };
