// import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.country === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img alt="" src={props.img} className="card--image" />
            <div className="card--stats">
                <img src={star} alt="" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewcount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}