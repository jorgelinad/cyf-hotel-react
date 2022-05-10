import moment from "moment";
import React from "react";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">SurName</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Day</th>
          <th scope="col">Check Out Day</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(info => {
          const checkIn = moment(info.checkInDay);
          const ckeckOut = moment(info.checkOutDay);
          const numeroDeNoches = ckeckOut.diff(checkIn, "days");

          return (
            <tr>
              <th scope="row">{info.id}</th>
              <td>{info.title}</td>
              <td>{info.firstName}</td>
              <td>{info.surName}</td>
              <td>{info.email}</td>
              <td>{info.roomId}</td>
              <td>{info.checkInDay}</td>
              <td>{info.checkOutDay}</td>
              <td>{numeroDeNoches}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
