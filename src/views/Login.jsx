
import { useState, useContext } from "react"
import { View, GoogleAds } from "ui"
import { GlobalContext } from "context";
import http from "utils/http"


export default function LoginView ({show}) {
    // Global state
    const {userNameValue, setUserNameValue} = useContext(GlobalContext);
    const {resultData, setResultData} = useContext(GlobalContext);
    const {currentViewName, setCurrentViewName} = useContext(GlobalContext); 
    
    // Form status
    const [loginDisabled, setLoginDisabled] = useState(false);
    
    // Function to click button
    const handleSubmit = () => {
        setLoginDisabled(true);
        
        http.post({
            url: "/results",
            body: {
                password: userNameValue
            }
        })
        .then(data => {
            // Redirect to results
            if (data.status) {
                setResultData(data.data);
                setCurrentViewName("ResultView");
            }
            // Redirect to survey
            else setCurrentViewName("SurveyView");
        });
        
    }
    
    // Render login
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
                > Bienvenido </h3>
                
                <p
                  className="fade-slide-up"
                  style={{"--animation-delay": ".4s"}}
                >   Pequeña votación en la que se elegirá
                    como será el uniforme en un centro educativo X
                </p>
                
              
                <input 
                  placeholder="Inserte su nombre..." 
                  className="fade-slide-up my-2 form-control" 
                  style={{"--animation-delay": ".6s"}}
                  disabled={loginDisabled}
                  value={userNameValue}
                  onChange={e => setUserNameValue(e.target.value)}
                />
                
                
                <div className="w-100 d-flex justify-content-end">
                    <button
                        className={`
                            btn px-3 py-1 
                            ${!loginDisabled && userNameValue !== "" ? 
                                "btn-primary" : "disabled"
                            }
                        `}
                        onClick={handleSubmit}
                    > 
                        Ok
                        {loginDisabled &&
                            <div className="ms-1 spinner-border spinner-border-sm" role="status"></div>
                        }
                    </button>
                </div>
            </div>
            
        </View>
    )
}