import React from "react";
import Nav from "./Nav";
import PigTile from "./PigTile"

import hogs from "../porkers_data";

//Filter function for hogs (greased vs ungreased)

//Sort function for hogs (name or weight)

function App() {
	return (
		<div className="App">
			<Nav />
			<PigTile hogs={hogs}/>
		</div>
	);
}

export default App;
