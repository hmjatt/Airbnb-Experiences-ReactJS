import katieZaferes from "../images/zaferes.png";
import starPic from "../images/star.png";

function Card() {
    return (
		<div className="card">
		<img src={katieZaferes} className="card-image" alt="katie-zaferes" />
		<div className="card-stats">
			<img src={starPic} className="card-star" alt="star-icon" />
			<span>5.0</span>
			<span className="grey-text">(6) • </span>
			<span className="grey">USA</span>
		</div>
		<p>Life Lessons with Katie Zaferes</p>
		<p><span className="bold">From $136</span> / person</p>
	</div>
    );
}

export default Card;