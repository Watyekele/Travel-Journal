export default function Fuji() {
  return (
    <div>
      <div className="Place">
        <div>
          <img
            src="../src/assets/images/Fuji.png"
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

          <h1>Mount Fuji</h1>
          <h5>12 Jan, 2023-24 Jan, 2023</h5>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3776 metres
            (12,380 feet). Mount Fuji is the single most popular tourist site in
            Japan.
          </p>
        </div>
      </div>
    </div>
  );
}
