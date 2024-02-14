import PropTypes from "prop-types";
import "./Child.css";

function Child({ val }) {
  return (
    <div className="childFlexItem">
      {/* {console.log(val)} */}
      <p style={{ color: "grey", fontSize: "15px" }}>{val.planType}</p>
      <h4 style={{ fontSize: "20px" }}>{`${val.planValue}/month`}</h4>

      {val.planbenefits.map((y) => {
        return (
          <div key={y.planDetails} className="planDetailTxtAlign">
            <div className={y.status ? "enableTxt" : "disableText"}>
              {y.status ? (
                <span>
                  <i className="fa-solid fa-check"></i>
                </span>
              ) : (
                <span>
                  <i className="fa-solid fa-xmark"></i>
                </span>
              )}
              {y.planDetails}
            </div>
          </div>
        );
      })}

      <button className="btnAlign">Button</button>
    </div>
  );
}

Child.propTypes = {
  val: PropTypes.any,
};

export default Child;
