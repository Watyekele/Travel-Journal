import TravelData from "./TravelData";

export default function Syd(props) {
  console.log(props);

  return (
    <div>
      <div className="Place">
        <div className="Image-container">
          <img src={props.Data.img} alt={props.Data.alt} className="Mountain" />
        </div>

        <div className="sidetext">
          <div className="location">
            {" "}
            <img
              src="../src/assets/images/Fill 219.png"
              alt="location-logo"
              width="10px"
            />
            <span>
              <p className="country">{props.Data.country}</p>{" "}
              <a href={props.Data.pin}>View on Google Maps</a>
            </span>
          </div>

          <h1>{props.Data.locationPlace}</h1>
          <h5>{props.Data.date}</h5>
          <p>{props.Data.sidetext}</p>
        </div>
      </div>
    </div>
  );
}
