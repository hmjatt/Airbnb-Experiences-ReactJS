import katieZaferes from "../images/zaferes.png";
import starPic from "../images/star.png";

function Card(props) {
    return (
		<div className="card">
		<img src={katieZaferes} className="card-image" alt="katie-zaferes" />
		<div className="card-stats">
			<img src={starPic} className="card-star" alt="star-icon" />
			<span>{props.rating}</span>
			<span className="grey-text">({props.reviewCount}) • </span>
			<span className="grey">{props.country}</span>
		</div>
		<p>{props.title}</p>
		<p><span className="bold">From ${props.price}</span> / person</p>
	</div>
    );
}

export default Card;