export default function Geiranger() {
  return (
    <div>
      <div className="Place">
        <div>
          <img
            src="../src/assets/images/Geiranger.png"
            alt="Fuji mountain"
            className="Mountain"
          />
        </div>

        <div className="sidetext">
          <div className="location">
            {" "}
            <img
              src="../src/assets/images/Fill 219.png"
              alt="Fuji mountain"
              width="10px"
            />
            <span>
              JAPAN <a href="#">View on Google Maps</a>
            </span>
          </div>

          <h1>Geirangerfjord</h1>
          <h5>01 Oct, 2024 - 18 Nov, 2024</h5>
          <p>
            The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og
            Romsdal county, Norway. It is located entirely in the Stranda
            Municipality.
          </p>
        </div>
      </div>
    </div>
  );
}
