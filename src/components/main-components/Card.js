function Card(props) {
	return (
		<div className="card mrg-5px">
			<div className="card-img-div">
				<img src={props.imgSrc} alt={props.playerName} />
			</div>
			<div className="card-playerName pd-5px">
				<h6>{props.playerName}</h6>
			</div>
		</div>
	);
}
export { Card };
