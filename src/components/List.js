import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTasks } from "./helper/apicalls";

const List = () => {
	const [tasks, setTasks] = useState([]);
	const [error, setError] = useState(false);

	// Date formate function
  const formateDate = (date) => {
    let newDate = date.slice(0, 10);
    newDate = newDate.split("-");
    newDate = newDate.reverse();
    newDate = newDate.join("-");

    return newDate;
  };

	const preload = () => {
		getAllTasks().then(data => {
			if (data.error) {
				setError(data.error);
			} else {
				setTasks(data);
			}
		});
	};

	useEffect(() => {
		preload();
	}, []);

	return (
		<div>
			<ul className="list-group">
				{tasks &&
					tasks.map((task, index) => (
						<li className="list-group-item list-group-item-action">
							{task.name}
							{/* <span className="btn btn-sm btn-info float-right ml-2">Update</span> */}
							<span
								type="button"
								className="dropdown-toggle dropdown-toggle-split float-right ml-1"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
							</span>
							<div className="dropdown-menu">
								<Link className="dropdown-item" to={`/update/${task._id}`}>
									Update Status
								</Link>
							</div>
							<span className="badge badge-success ml-1 float-right">
								{task.status}
							</span>
							<span className="badge badge-warning ml-1 float-right">
								{formateDate(task.due_date)}
							</span>
							<span className="badge badge-danger ml-1 float-right">
								{task.priority}
							</span>
						</li>
					))}
			</ul>
		</div>
	);
};

export default List;
