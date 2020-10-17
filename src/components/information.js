import React from "react";
import Navbar from "./header";

const Info = (props) => {
    const {getValues}=props;
    return (
      //render all values with checkbox
      <div className="info">
              <div className="stname">
                  <div>
                    <h1>Portugal</h1>
                  </div>
                  <div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="Aasiya jayant"></input>
                        <label for="check" id="abc">Aasiya jayant</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="Lavleen"></input>
                        <label for="check">Lavlee</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="Rey"></input>
                        <label for="check">Rey</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="Cayla"></input>
                        <label for="check">cayla</label>
                      </div>
                     
                  </div>
                  <div>
                    <h1>Nicaragua</h1>
                  </div>
                  <div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="Devenvsd"></input>
                        <label for="check">Devenvsd</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="Gdxascgh"></input>
                        <label for="check">Gdxascgh</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="tghrsjg"></input>
                        <label for="check">tghrsjg</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="pdeuifkj"></input>
                        <label for="check">pdeuifkj</label>
                      </div>
                     
                  </div>

                  <div>
                    <h1>Marshalla Island</h1>
                  </div>
                  <div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="Asfdejh"></input>
                        <label for="check">Asfdejh</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="Egfdbfkj"></input>
                        <label for="check">Egfdbfkj</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="MAnis"></input>
                        <label for="check">MAnis</label>
                      </div>
                      <div>
                        <input id="check" onClick={getValues} type="checkbox" value="JKsdchjbs"></input>
                        <label for="check">JKsdchjbs</label>
                      </div>
                     
                  </div>
                
                
              </div>
             
      </div>
    );
  }


export default Info;

