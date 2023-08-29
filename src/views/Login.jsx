
import { useState, useContext } from "react"
import { View } from "ui"
import { GlobalContext } from "context";

export default function LoginView ({show}) {
    
    const {userName, setUserName} = useContext(GlobalContext);
    const {currentViewName, setCurrentViewName} = useContext(GlobalContext); 
    
    // Function to click button
    const handleSubmit = () => {
        setCurrentViewName("SurveyView");
    }
    
    return (
        <View 
            show={show}
            className="p-3 d-flex justify-content-center align-items-center"
        >   
            
            <div 
                className="
                  p-3 bg-body bg-opacity-25 border-0
                  card d-flex text-center align-items-center
                "
            >
                <h3> Hola ! </h3>
                <p>
                A usted se le realizara una breve encuesta en la elegirá 
                cual de estas prendas de vestir le gusta más.
                </p>
                
              
                <input 
                    placeholder="Inserte su nombre..." 
                    className="my-2 form-control"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                
                <div className="w-100 d-flex justify-content-end">
                    <button
                        className="btn btn-primary px-3 py-1"
                        onClick={handleSubmit}
                    > Ok </button>
                </div>
            </div>
        </View>
    )
}