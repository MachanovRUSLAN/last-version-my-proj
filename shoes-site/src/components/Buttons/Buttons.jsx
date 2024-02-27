import React from "react";
import "./Button.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TakeProduct } from "../../redux/Slice/proslice";

function Buttons() {
  const Buttons = ["boot", "sport", "classic", "daily"];
  const dispatch = useDispatch();
  return (
    <div className="button-box">
      {Buttons.map((button, index) => {
        return (
          <div className="buttons" key={index}>
            <Link to={"/category/" + button}>
              <h5
                className="categ-button"
                onClick={dispatch(TakeProduct(button))}
              >
                {button}
              </h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Buttons;
