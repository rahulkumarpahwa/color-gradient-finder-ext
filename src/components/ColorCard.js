const ColorCard = (props) => {
  // console.log(props);
  const { arr } = props;
  // console.log(arr);

  return (
    <div className="color-card">
      <hr />
      <h4 className="color-card-heading">Click to Copy </h4>

      <div className="color-card-container">
        {arr.map((colr) => (
          <div
            key={colr}
            className="card"
            style={{
              backgroundColor: colr,
            }}
            onClick={() => {
              navigator.clipboard.writeText(colr);
              alert(colr + " copied!");
            }}
          >
            {colr}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorCard;
