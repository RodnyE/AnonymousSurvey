
import { useState, useContext } from "react"
import { View } from "ui"
import { GlobalContext } from "context";

import cloth1Img from "../assets/cloth-1.jpg"
import cloth2Img from "../assets/cloth-2.jpg"


const listColors = [
  { value: "Rojo", hex: "#FF0000" },
  { value: "Verde", hex: "#00FF00" },
  { value: "Azul", hex: "#0000FF" },
  { value: "Amarillo", hex: "#FFFF00" },
  { value: "Cian", hex: "#00FFFF" },
  { value: "Magenta", hex: "#FF00FF" },
  { value: "Negro", hex: "#000000" },
  { value: "Blanco", hex: "#FFFFFF" },
  { value: "Gris", hex: "#808080" },
  { value: "Naranja", hex: "#FFA500" },
  { value: "Rosa", hex: "#FFC0CB" },
  { value: "Morado", hex: "#800080" },
  { value: "Verde oscuro", hex: "#006400" },
];

export default function SurveyView ({show}) {
    const {userName, setUserName} = useContext(GlobalContext);
    
    const cardClassName = "fade-slide-up rounded text-center m-1 p-2 pb-2 bg-white";
    const clothStyle = {
        width: "150px",
        marginBottom: ".25rem"
    };
    
    return (
        <View show={show} className="p-2 d-flex flex-column align-items-center">
            
            <h3> Encuesta </h3>
            <p> 1--- Selecciona un modelo </p>
            <div className="d-flex flex-wrap justify-content-center">
                
                <div className={cardClassName}>
                    <img style={clothStyle} src={cloth1Img}/>
                    <p> Modelo 1 </p>
                </div>
            
                <div className={cardClassName}>
                    <img style={clothStyle} src={cloth2Img}/>
                    <p> Modelo 2 </p>
                </div>
                
            </div>
            
            <div className="fade-slide-up p-3 m-2 bg-white">
                <p> 2--- ¿De que color lo prefieres? </p>
                <ul class="list-group">
                    {listColors.map(item => {
                        return <label id={item.value} className="list-group-item d-flex align-items-center">
                            <input label={item.value} type="checkbox" className="checkbox"/>
                            <div style={{background: item.hex}} className="py-2 px-3 m-2 rounded"/>
                            <div> {item.value} </div>
                        </label>
                    })}
                </ul>
            </div>
            
        </View>
    )
}