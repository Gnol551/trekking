import "./Main.css";
export default CardTrekking;
function CardTrekking(props) {
    return (
        <div className="container-card">
            <img src={props.img} alt="" className="img-ctn-card"/>
            <div className="text-ctn-card">{props.name}</div>
            <div className="price-ctn-card">{props.price}</div>
            <div className="btn-ctn-card">{props.btn}</div>
        </div>
    )
}