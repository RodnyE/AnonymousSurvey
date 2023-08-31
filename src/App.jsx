
import { useState } from 'react' 
import { GlobalContext } from 'context'
import LoginView from './views/Login'
import SurveyView from './views/Survey'
import SuccessView from './views/Success'
import ResultView from './views/Result'

import stg from 'utils/storage'

// Application 
export default function App () {
    const [userNameValue, setUserNameValue] = useState("");
    const [resultData, setResultData] = useState({});
    const [currentViewName, setCurrentViewName] = useState("LoginView");
    const isNewUser = !stg.existsData("name");
    
    return (
    <div>
        {/*
          * Views components
          */}
        <GlobalContext.Provider 
            value={{
                currentViewName,
                setCurrentViewName,
            
                userNameValue,
                setUserNameValue,
            
                resultData,
                setResultData,
            
                isNewUser,
            }}
        >
            <LoginView  show={currentViewName === "LoginView"}/>
            <SurveyView show={currentViewName === "SurveyView"}/> 
            <SuccessView show={currentViewName === "SuccessView"}/> 
            {currentViewName === "ResultView" && 
                <ResultView show={true}/>
            }
        </GlobalContext.Provider>
        
        {/* 
          * Google Ads Component
          */}
        <GoogleAds />
        
    </div>
    )
}