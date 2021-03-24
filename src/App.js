import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Base from "./components/Base";
import List from "./components/List";

const App = () => {
	return (
		<div className="App">
			<Base>
				<List />
					
				<Link to="/create" className="btn btn-primary btn-block mt-3">Create Task</Link>
			</Base>
		</div>
	);
};

export default App;
