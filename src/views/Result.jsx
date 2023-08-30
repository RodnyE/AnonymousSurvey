
import { useState, useContext } from "react"
import { View } from "ui"
import { GlobalContext } from "context";

import {listModels, listColors} from "../logic/db"


export default function ResultView ({show}) {
    
    const {resultData} = useContext(GlobalContext);
    
    const resultModel = listModels.find(item => item.value === resultData.opt1);
    const resultColor = listColors.find(item => item.value === resultData.opt2);
    
    
    return (
      <View show={show}>
        <div className="fade-slide-up rounded text-center m-1 p-2 pb-2 bg-white text-dark">
            <img
                style={{
                    width: "150px",
                    marginBottom: ".25rem"
                }} 
                src={resultModel.src}
            />
            <p> {resultModel.value} </p>
        </div>
        
        <div 
            style={{width: "10rem"}}
            className="list-group-item d-flex align-items-center"
        >
            <div style={{background: resultColor.hex}} className="py-2 px-3 m-2 rounded"/>
            <div> {resultColor.value} </div>
         </div>
      </View>
    )
   
}