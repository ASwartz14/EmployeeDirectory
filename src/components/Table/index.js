import React from "react";

function Table(props) {
  return (
    <table className="table table-striped table-hover table-fluid">
      <thead>
        <tr>
          <th></th>
          <th onClick={props.sortEmp}>Name</th>
          <th>Phone</th>
          <th>DOB</th>
        </tr>
      </thead>

      <tbody className="">
        {props.results.map((result) => (
          <tr className="table" key={result.login.uuid}>
            <td>
              {" "}
              <img
                className="
                        "
                src={result.picture.medium}
                alt=""
              />
            </td>

            <td>{result.name.first + " " + result.name.last} </td>

            <td>{result.phone}</td>
            <td>{result.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
