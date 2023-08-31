
import { useState, useContext } from "react"
import { View } from "ui"
import { GlobalContext } from "context";

import {listModels, listColors} from "../logic/db"
const models = {}; 
const colors = {};
    
listModels.forEach(item => {models[item.value] = item.src});
listColors.forEach(item => {colors[item.value] = item.hex});


export default function ResultView ({show}) {
    
    const {resultData} = useContext(GlobalContext);
    
    
    return (
        <View show={show}>
            <h3> Resultados de encuesta </h3>
            
            {/* 
              * Option 1 of survey  
              * Cloth models
              */}
            <div className="fade-slide-up">
                <div className="d-flex flex-wrap justify-content-center">
                    {resultData.opt1.map(([value, count]) => (
                        <div 
                            key={value}
                            className=" bg-white text-dark"
                        >
                            <img 
                                src={models[value]}
                                style={{width: "70px"}}
                            /> 
                            <span> Votos: {count} </span>
                        </div>
                    ))}
                </div>
            </div>
            
            
             {/* 
              * Option 2 of survey  
              * Cloth colors
              */}
            <div style={{"--animation-delay": ".4s"}} className="fade-slide-up p-3 m-2 bg-white">
                
                <ul>
                    {resultData.opt2.map(([value, count])=> {
                        return <li 
                            key={value} 
                            style={{width: "10rem"}}
                            className="list-group-item d-flex align-items-center"
                        >
                 
                            <span> Votos: {count} </span>
                            <div style={{background: colors[value]}} className="py-2 px-3 m-2 rounded"/>
                            <div> {value} </div>
                        </li>
                    })}
                </ul>
            </div>
      </View>
    )
   
}