
import { useState, useContext } from "react"
import { View } from "ui"
import { GlobalContext } from "context";

import cloth1Img from "../assets/cloth-1.jpg"
import cloth2Img from "../assets/cloth-2.jpg"

export default function SurveyView ({show}) {
    const {userName, setUserName} = useContext(GlobalContext);
    
    
    return (
        <View show={show}>
            <div className="card">
                <img className="card-img-top" src={cloth1Img}/>
            </div>
        </View>
    )
}