import starPic from "../images/star.png";

function Card(props) {
	let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
		<div className="card">
		{badgeText && <div className="card-badge">{badgeText}</div>}
		<img src={props.img} className="card-image" alt="katie-zaferes" />
		<div className="card-stats">
			<img src={starPic} className="card-star" alt="star-icon" />
			<span>{props.rating}</span>
			<span className="grey">({props.reviewCount}) • </span>
			<span className="grey">{props.location}</span>
		</div>
		<p className="card-title">{props.title}</p>
		<p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
	</div>
    );
}

export default Card;