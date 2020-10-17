import React from "react";
import Navbar from "./header";
import Info from "./information";
import Detail from "./detail";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      values:[]
    };
  }

  //get values and handle these
  getValues=(e)=>{
    console.log("hii");
    const {values}=this.state;
    let check=e.target.checked;
    let value=e.target.value;
    console.log(value);
    if(check){
        values.push(value);
    }else{
      let index=values.indexOf(value);
      values.splice(index, 1);
    }

    this.setState({
      values:values
    })
   
    console.log(values);
  }

  //render the app
  render() {
    const {values}=this.state;
    return (
      <div className="App">
          <div>
              <Navbar></Navbar>
              <div className="container">
                <div className="list">
                  <Info getValues={this.getValues}></Info>
                </div>
                <div className="detail">
                {values.map((value) => {
                  console.log(value);
                  return (
                    <Detail value={value}></Detail>
                  )
                })}
                </div>
              </div>
              
          </div>
      </div>
    );
  }
}

export default App;
