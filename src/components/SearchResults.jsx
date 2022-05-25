import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import Row from "./Row";

const SearchResults = props => {
  const [selectedId, setSelectedId] = useState();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">SurName</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(info => {
            return <Row data={info} setSelectedId={setSelectedId} />;
          })}
        </tbody>
      </table>
      <CustomerProfile id={selectedId} />
    </div>
  );
};

export default SearchResults;
