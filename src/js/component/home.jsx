import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digit from "./digit"
import Counter from "./counter"

//create your first component
const Home = ({second, second2, second3, second4, second5, second6}) => {
	return (
		<div className="container">

			<Counter second={second} second2={second2} second3={second3} second4={second4} second5={second5} second6={second6}/>
          
		</div>
	);
};

export default Home;
