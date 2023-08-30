
import { useState } from 'react' 
import { GlobalContext } from 'context'
import LoginView from './views/Login'
import SurveyView from './views/Survey'
import SuccessView from './views/Success'
import ResultView from './views/Result'

import stg from 'utils/storage'

// Application 
export default function App () {
    const [userNameValue, setUserNameValue] = useState(stg.getData("name", ""))
    const [resultData, setResultData] = useState({})
  
    const [currentViewName, setCurrentViewName] = useState(
        stg.getData("name", false) ? "SuccessView" : "LoginView"
    );
    
    
    return (
    <GlobalContext.Provider 
        value={{
            currentViewName,
            setCurrentViewName,
            
            userNameValue,
            setUserNameValue,
            
            resultData,
            setResultData,
        }}
    >
        <LoginView  show={currentViewName === "LoginView"}/>
        <SurveyView show={currentViewName === "SurveyView"}/> 
        <SuccessView show={currentViewName === "SuccessView"}/> 
        {currentViewName === "ResultView" && <ResultView show={true}/>  }
    </GlobalContext.Provider>
    )
}