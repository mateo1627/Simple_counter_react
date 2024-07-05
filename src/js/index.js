//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
let second = 0;
let second2 = 0;
let second3 = 0;
let second4 = 0;
let second5 = 0;
let second6 = 0;
setInterval(function(){
    second++;
    if(second === 60){
        second = 0;
        second2++;
    }
    if(second2 ===60){
        second2=0;
        second3++
    }
    if(second3 ===24){
        second3=0;
        second4++
    }
    if(second4 ===365){
        second4=0;
        second5++
    }
    if(second5 ===1){
        second5=0;
        second6++
    }
    ReactDOM.createRoot(document.getElementById('app')).render(<Home second={second} second2={second2} second3={second3} second4={second4} second5={second5} second6={second6}/>)},1000);


    