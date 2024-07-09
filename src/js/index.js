//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
let second, second2, second3, second4, second5, second6;
second = second2 = second3 = second4 = second5 =second6 = 0;

setInterval(function(){
    second++;
    if(second === 9){
        second = 0;
        second2++;
    }
    if(second2 ===6){
        second= second2 = 0 ;
        second3++
    }
    if(second3 ===9){
        second = second2= second3 = 0;
        second4++
    }
    if(second4 ===6){
        second = second2= second3=second4 = 0;
        second5++
    }
    if(second5 ===4){
        second = second2 = second3 = second4 = second5 = 0;
        second6++
    }
    if(second6 ===2 && second5 === 4){
        second = second2 = second3 = second4 = second5 =second6 = 0;
    }
    
    ReactDOM.createRoot(document.getElementById('app')).render(<Home second={second} second2={second2} second3={second3} second4={second4} second5={second5} second6={second6}/>)},0.000001);
    