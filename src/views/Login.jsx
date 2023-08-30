
import { useState, useContext } from "react"
import { View } from "ui"
import { GlobalContext } from "context";

import http from "utils/http"

export default function LoginView ({show}) {
    
    const {userNameValue, setUserNameValue} = useContext(GlobalContext);
    const {setResultData} = useContext(GlobalContext);
    const {setCurrentViewName} = useContext(GlobalContext); 
    
    // Function to click button
    const handleSubmit = () => {
        setCurrentViewName("SurveyView");
        
        http.post({
            url: "/results",
            body: {
                password: userNameValue
            }
        })
        .then(data => {
            if (data.status) {
                setResultData(data.data);
                setCurrentViewName("ResultView");
            }
        })
    }
    
    return (
        <View 
            show={show}
            className="p-3 d-flex justify-content-center align-items-center"
        >   
            
            <div 
                className="
                  fade-slide-up
                  p-3 bg-body bg-opacity-25 border-0
                  card d-flex text-center align-items-center
                "
                style={{maxWidth: "500px"}}
            >
                <h3 
                  className="fade-slide-up"
                  style={{"--animation-delay": ".2s"}}
                > Hola ! </h3>
                
                <p
                  className="fade-slide-up"
                  style={{"--animation-delay": ".4s"}}
                >   Encuesta en la elegirá 
                    cual de estas prendas de vestir le gusta más.
                </p>
                
              
                <input 
                    placeholder="Inserte su nombre..." 
                    className="
                        fade-slide-up
                        my-2 form-control
                    "
                    style={{"--animation-delay": ".6s"}}
                    value={userNameValue}
                    onChange={e => setUserNameValue(e.target.value)}
                />
                
                <div className="w-100 d-flex justify-content-end">
                    <button
                        className={
                            userNameValue !== "" ? 
                                "btn px-3 py-1 btn-primary" : 
                                "btn px-3 py-1 disabled"
                        }
                        onClick={handleSubmit}
                    > Ok </button>
                </div>
            </div>
            
        </View>
    )
}