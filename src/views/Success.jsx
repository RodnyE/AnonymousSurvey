
import { View } from "ui"

export default function SuccessView ({show}) {
    return (
        <View show={show} className="justify-content-center align-items-center">
            <div 
                className="
                  p-3 bg-body bg-opacity-25 border-0
                  card d-flex text-center
                "
            >
                <h3 
                  className="fade-slide-up"
                  style={{"--animation-delay": ".2s"}}
                > Éxito! Su voto a sido guardado, muchas gracias! </h3>
            </div>
        </View>
    )
}