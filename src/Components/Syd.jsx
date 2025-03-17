import TravelData from "./TravelData";
import React from "react";

export default function Syd(props) {
  return (
    <>
      <div className="Place my-8 mx-4 flex flex-col md:flex-row items-center gap-2 text-xs">
        <div className="Image-container w-1/3 sm:w-1/4">
          <img
            src={props.Data.img}
            alt={props.Data.alt}
            className="Mountain max-w-full h-auto"
          />
        </div>

        <div className="sidetext w-full text-left text-xs sm:text-sm md:text-base mx-2 flex-1">
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
          <p className="w-full max-w-full break-words whitespace-normal text-sm sm:text-base ">
            {props.Data.sidetext}
          </p>
        </div>
      </div>
    </>
  );
}
