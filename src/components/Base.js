import React from "react";
import Navbar from "./Navbar";
const Base = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-3"></div>
					<div className="col-lg-6">{children}</div>
					<div className="col-lg-3"></div>
				</div>
			</div>
		</>
	);
};

export default Base;
