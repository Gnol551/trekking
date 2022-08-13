import "./Main.css";

export default FavoritePlaces;
function FavoritePlaces(props) {
  return (
    <div className="container-camping">
      <img src={props.img} className="img-camping" />
      <div className="text-ctn-camping">{props.name}</div>
      <div className="like-ctn-camping">{props.like}</div>
    </div>
  );
}
