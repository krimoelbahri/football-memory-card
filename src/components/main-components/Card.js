function Card(props) {
	return (
		<div
			onClick={props.handleClick}
			className='card mrg-5px'
			data-index={props.index}>
			<div data-index={props.index} className='card-img-div'>
				<img
					src={props.imgSrc}
					alt={props.playerName}
					data-index={props.index}
				/>
			</div>
			<div className='card-playerName pd-5px' data-index={props.index}>
				<h6 data-index={props.index}>{props.playerName}</h6>
			</div>
		</div>
	);
}
export { Card };
