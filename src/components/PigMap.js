
import { useState } from "react"

function PigMap({ hogs, clickImage }) {
    
    //inState
    const [showData, setData] = useState(false)

    const [greased, setGrease] = useState(false)

    //filter function
    function setGreased () {
        setGrease(!greased)
    }

    function filterGrease() {
        return greasedHogs
    }

    let greasedHogs = hogs.filter(hog => {
        if (hog.greased === true) {
            return (<li>Hi</li>)

        }})
        
    function clickImage() {
        return setData(!showData)
    }

    let pigMap = hogs.map(hog => {
        return  (<>
         <li key={hog.name}>{hog.name}
         </li> 
         <img alt="Nice Pig" onClick={clickImage} src={hog.image}>
         </img>
         {!showData ? null : <li>{hog.weight} | {hog.greased} | {hog.specialty} | {hog["highest medal achieved"]}</li>}
         </>
        )
     })
     
    return (
        <div>
            <button onClick={setGreased}>Filter me, baby</button>
            {pigMap}
        </div>
        
    )
}

export default PigMap