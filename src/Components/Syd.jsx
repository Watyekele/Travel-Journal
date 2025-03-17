import TravelData from "./TravelData";
import React from "react";

export default function Syd(props) {
  return (
    <>
      <div className="Place my-8 mx-4 flex flex-row items-center gap-2 text-xs">
        <div className="Image-container max-w-80 max-h-80">
          <img
            src={props.Data.img}
            alt={props.Data.alt}
            className="Mountain mr-2 min-h-20 max-w-80 p-0"
          />
        </div>

        <div className="sidetext min-w-70 text-left text-xm  mx-2 min-h-10 items-center">
          <span className="location flex gap-2 items-center  justify-left">
            {" "}
            <img src="/images/Fill 219.png" alt="location-logo" width="10px" />
            <p className="country font-bold-800">{props.Data.country}</p>{" "}
            <a
              href={props.Data.pin}
              target="_blank"
              rel="noopener noreferrer"
              className="googleMap text-red-800 text-xs underline"
            >
              View on Google Maps
            </a>
          </span>

          <h1 className="name text-left font-semibold text-xl mb-2">
            {props.Data.locationPlace}
          </h1>
          <h5 className="date font-semibold mb-2">{props.Data.date}</h5>
          <p className="max-w-[95%] whitespace-normal ">
            {props.Data.sidetext}
          </p>
        </div>
      </div>
    </>
  );
}
