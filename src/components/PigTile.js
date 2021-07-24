// Needs click event that displays specialty, weight, greased, and heighest medal achieved

import { useState } from "react"
import PigMap from "./PigMap"


function PigTile( { hogs }) {
    
    

        //Click event

    
    return (
        <div>
            <PigMap hogs={hogs}/>
        </div>

    )
}

export default PigTile;