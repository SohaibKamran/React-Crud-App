import React from "react";

const UserTable = props => (  
    <table className="table table-striped ">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.status}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="button btn btn-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="button btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>  
);

export default UserTable;
