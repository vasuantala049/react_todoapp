import { useState } from "react"
import "./toggleswitch.css"
export const ToggleSwitch=()=>{
    const [isOn,setIsOn]=useState(false);
    const handleToggleSwitch=()=>{
        setIsOn(!isOn);
    }
    
    return(
        <div className="togleswitch" style={{backgroundColor:isOn ? "green" : ""}} onClick={handleToggleSwitch}>
            <div className={`toggle ${isOn ? "on" : "off"}`}>
                <span className="state">{isOn ? "ON" : "OFF"}</span>
            </div>
        </div>
    )
}