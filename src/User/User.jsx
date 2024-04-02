import React, { Fragment, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
  const EmpData = [
    {
      id: 1,
      name: "shivam",
      password: "shivam123",
      IsActive: 1,
    },
    {
      id: 2,
      name: "Yogendar",
      password: "Yogendar123",
      IsActive: 1,
    },
    {
      id: 3,
      name: "amar",
      password: "amar123",
      IsActive: 1,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(EmpData);
  }, []);

  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Password</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>{item.IsActive}</td>
                <td colSpan={2}>
                    <button className="btn btn-primary">Edit</button> &nbsp;
                    <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Data Found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default User;
