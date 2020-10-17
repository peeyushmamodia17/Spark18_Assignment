import React from "react";
import Navbar from "./header";

const Detail = (props) => {
    const {value}=props;
    return (
      //render all values these are check by checkbox and after uncheck remove these values
      <div className="detail-value">
              <div className="stname">
                 <input type="search" id="search" value={value}></input>
              </div>
             
      </div>
    );
  }


export default Detail;

