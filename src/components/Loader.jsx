import React from "react";
import "./Loader.css";

function Loader() {
  const loaderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="loader-persons">
      {loaderArray.map(() => {
        return (
          <div className="loader-person">
            <div></div>
            <div></div>
            <div></div>
            <div className="view-details-btn"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Loader;
