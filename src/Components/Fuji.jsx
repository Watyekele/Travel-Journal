import React from "react";

export default function Fuji({
  img,
  alt,
  country,
  pin,
  locationPlace,
  date,
  sidetext,
}) {
  return (
    <div>
      <div className="Place">
        <div className="Image-container">
          <img src={img} alt={alt} className="Mountain" />
        </div>

        <div className="sidetext">
          <div className="location">
            {" "}
            <img src="/images/Fill 219.png" alt="Location-logo" width="10px" />
            <span>
              {country} <a href={pin}>View on Google Maps</a>
            </span>
          </div>

          <h1>{locationPlace}</h1>
          <h5>{date}</h5>
          <p>{sidetext}</p>
        </div>
        <hr />
      </div>
    </div>
  );
}
