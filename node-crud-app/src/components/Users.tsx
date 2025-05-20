import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  age: number;
  _id: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`)
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id: string) => {
    axios
      .delete(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/deleteUser/${id}`
      )
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column vh-100 bg-primary justify-content-center align-items-center">
      {/* Centered heading */}
      <h1 className="text-white mb-4">MERN CRUD App</h1>

      {/* White card */}
      <div className="w-75 bg-white rounded shadow p-4">
        {/* Add button */}
        <div className="mb-3">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>

        {/* Table */}
        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link
                    to={`/update/${user._id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
