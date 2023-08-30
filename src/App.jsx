
import { useState } from 'react' 
import { GlobalContext } from 'context'
import LoginView from './views/Login'
import SurveyView from './views/Survey'
import SuccessView from './views/Success'

import stg from 'utils/storage'

// Application 
export default function App () {
    const [currentViewName, setCurrentViewName] = useState(
        stg.getData("name", false) ? "SuccessView" : "LoginView"
    );
    const [userNameValue, setUserNameValue] = useState(stg.getData("name", ""))
    
    
    return (
    <GlobalContext.Provider 
        value={{
            currentViewName,
            setCurrentViewName,
            userNameValue,
            setUserNameValue,
        }}
    >
        <LoginView  show={currentViewName === "LoginView"}/>
        <SurveyView show={currentViewName === "SurveyView"}/> 
        <SuccessView show={currentViewName === "SuccessView"}/> 
    </GlobalContext.Provider>
    )
}