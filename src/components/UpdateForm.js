import React, {useState, useEffect} from "react";
import Base from "./Base";
import { createTask, updateTask } from "./helper/apicalls";

const UpdateForm = ({match}) => {
  const [values, setValues] = useState({
    status: "",
    error: "",
    updatedTask: "",
  });

  const { status, error, updatedTask } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    updateTask(match.params.taskId, { status }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          status: "",
          updatedTask: data.name
        });
      }
    });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: updatedTask ? "" : "none" }}
    >
      <h4>{updatedTask} updated successfully</h4>
    </div>
  );

  const redirectToHome = () => {
    setTimeout(() => {
      window.location.pathname = "/";
    }, 1000);
  };

  const updateTaskForm = () => (
    <>
    <p>{JSON.stringify(values)}</p>
      <form>
        <div className="form-group">
          <label for="task-status">Task status</label>
          <select
            className="form-control"
            id="task-status"
            onChange={handleChange("status")}
            value={status}
          >
            <option value="To Do">To Do</option>
            <option value="Review">Review</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button onClick={onSubmit} class="btn btn-primary">Update</button>
      </form>
    </>
  );

  return (
		<Base>
      { updatedTask && redirectToHome() }
      { successMessage() }
      { updateTaskForm() }
    </Base>
	);
};

export default UpdateForm;