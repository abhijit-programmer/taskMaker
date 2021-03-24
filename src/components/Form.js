import React, { useState } from "react";
import { createTask } from "./helper/apicalls";
import Base from "./Base";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    priority: "",
    due_date: "",
    error: "",
    createdTask: "",
  });

  const { name, priority, due_date, error, createdTask } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    createTask({ name, priority, due_date }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          priority: "",
          due_date: "",
          createdTask: data.name
        });
      }
    });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdTask ? "" : "none" }}
    >
      <h4>{createdTask} created successfully</h4>
    </div>
  );

  const redirectToHome = () => {
    setTimeout(() => {
      window.location.pathname = "/";
    }, 1000);
  };

  const createTaskForm = () => (
    <>
      <form>
        <div className="form-group">
          <label for="task-name">Task Name</label>
          <input
            type="text"
            id="task-name"
            className="form-control"
            onChange={handleChange("name")}
            value={name}
          />
        </div>
        <div className="form-group">
          <label for="task-priority">Task priority</label>
          <select
            className="form-control"
            id="task-priority"
            onChange={handleChange("priority")}
            value={priority}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label for="due-date">Due Date</label>
          <input
            type="date"
            id="due-date"
            className="form-control"
            onChange={handleChange("due_date")}
            value={due_date}
          />
        </div>
        <button onClick={onSubmit} class="btn btn-primary">Create</button>
      </form>
    </>
  );

  return (
		<Base>
      { createdTask && redirectToHome() }
      { successMessage() }
      { createTaskForm() }
    </Base>
	);
};

export default Form;
