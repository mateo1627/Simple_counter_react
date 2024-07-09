import React from "react";
import Digit from "./digit"


let Counter = ({second, second2, second3, second4, second5, second6}) => {

    return (
<div className="card bg-dark row">
  <div className="card-body d-flex col-12 justify-content-center">

    <Digit digit={"🕟"}/>

    <Digit digit={second6}/>
    <Digit digit={second5}/>
    <Digit digit=":"/>
    <Digit digit={second4}/>
    <Digit digit={second3}/>
    <Digit digit=":"/>
    <Digit digit={second2}/>
    <Digit digit={second}/>
    

  </div>
</div>
    )
}

export default Counter;