
import { useContext } from "react"
import { View } from "ui"
import { GlobalContext } from "context"; 


export default function SuccessView ({show}) {
    const {isNewUser} = useContext(GlobalContext);
    
    
    return (
        <View show={show} className="justify-content-center align-items-center">
            <div 
                className="
                  p-3 bg-body bg-opacity-25 border-0
                  card d-flex text-center
                "
            >
                <h3 className="fade-slide-up"> 
                  {isNewUser ?
                    "Éxito! Su voto a sido guardado, muchas gracias!" :
                    "Lo sentimos, ya usted a realizado la votación, gracias por participar!"
                  }
                </h3>
            </div>
        </View>
    )
}