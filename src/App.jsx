
import { useState } from 'react' 
import { GlobalContext } from 'context'
import LoginView from './views/Login'
import SurveyView from './views/Survey'


// Application 
export default function App () {
    const [currentViewName, setCurrentViewName] = useState("LoginView")
    const [userName, setUserName] = useState("")
    
    
    return (
    <GlobalContext.Provider 
        value={{
            currentViewName,
            setCurrentViewName,
            userName,
            setUserName,
        }}
    >
        <LoginView  show={currentViewName === "LoginView"}/>
        <SurveyView show={currentViewName === "SurveyView"}/> 
    </GlobalContext.Provider>
    )
}