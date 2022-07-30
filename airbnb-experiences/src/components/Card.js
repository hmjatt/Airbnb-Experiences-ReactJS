import starPic from "../images/star.png";

function Card(props) {
    return (
		<div className="card">
		<img src={props.img} className="card-image" alt="katie-zaferes" />
		<div className="card-stats">
			<img src={starPic} className="card-star" alt="star-icon" />
			<span>{props.rating}</span>
			<span className="grey-text">({props.reviewCount}) • </span>
			<span className="grey">{props.country}</span>
		</div>
		<p className="card-title">{props.title}</p>
		<p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
	</div>
    );
}

export default Card;