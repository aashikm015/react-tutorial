import React from "react";
import Icon from "./components/icon"
import Counter from "./components/counter"



const App = () => {

  return (
    <div className="App row">   
      <div className="col-6"><Counter /></div> 
      <div className="col-6"><Icon /></div> 
    </div>
  );  
};

export default App;
