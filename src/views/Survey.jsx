
import { useState, useContext } from "react"
import { View } from "ui"
import { GlobalContext } from "context";
import http from "utils/http"
import stg from 'utils/storage'

import cloth1Img from "../assets/cloth-1.jpg"
import cloth2Img from "../assets/cloth-2.jpg"


const listModels = [
    { value: "Modelo 1", src: cloth1Img },
    { value: "Modelo 2", src: cloth2Img },
];

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
    // Global and local states
    const [colorValue, setColorValue] = useState(false);
    const [modelValue, setModelValue] = useState(false);
    const {userNameValue, setCurrentViewName} = useContext(GlobalContext);
    
    // Some styles 
    const cardClass = "fade-slide-up rounded text-center m-1 p-2 pb-2";
    const clothStyle = {
        width: "150px",
        marginBottom: ".25rem"
    };
    
    // Handlers
    const sendSurvey = () => {
        setCurrentViewName("SuccessView");
        
        http.post({
            url: "/survey",
            body: {
                name: userNameValue,
                opt1: modelValue,
                opt2: colorValue,
            }
        })
        .then(data => {
            if (data.status) stg.setData("name", userNameValue);
        })
        .catch(error => {
            alert("algo explotó");
            console.log(error);
        })
    }
    
    // render component
    return (
        <View show={show} className="p-2 d-flex flex-column align-items-center">
            
            <h3> Encuesta </h3>
            
            {/* 
              * Option 1 of survey  
              * Cloth models
              */}
            <div className="fade-slide-up">
                <p> 1--- Selecciona un modelo </p>
                
                <div className="d-flex flex-wrap justify-content-center">
                    {listModels.map(item => (
                        <div 
                            key={item.value}
                            className={
                                modelValue === item.value ? 
                                    cardClass + " bg-success text-light" :
                                    cardClass + " bg-white text-dark"
                            }
                            onClick={e => setModelValue(item.value)}
                        >
                            <img style={clothStyle} src={item.src}/>
                            <p> {item.value} </p>
                        </div>
                    ))}
                </div>
            </div>
            
            
             {/* 
              * Option 2 of survey  
              * Cloth colors
              */}
            <div style={{"--animation-delay": ".4s"}} className="fade-slide-up p-3 m-2 bg-white">
                
                <p> 2--- ¿De que color lo prefieres? </p>
                
                <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
                    {listColors.map(item => {
                        return <label 
                            key={item.value} 
                            style={{width: "10rem"}}
                            className="list-group-item d-flex align-items-center"
                        >
                            <input 
                                label={item.value} 
                                type="checkbox" 
                                className="checkbox"
                                checked={item.value === colorValue}
                                onChange={e => setColorValue(item.value)}
                            />
                            <div style={{background: item.hex}} className="py-2 px-3 m-2 rounded"/>
                            <div> {item.value} </div>
                        </label>
                    })}
                </ul>
            </div>
            
            
            {/* 
              * Submit survey
              */}
            <button 
                onClick={sendSurvey}
                className={
                    colorValue && modelValue ?
                        "btn fs-3 btn-primary" :
                        "btn fs-3 disabled"
                }
            > Aceptar </button>
            
        </View>
    )
}