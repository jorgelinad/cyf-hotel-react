import React, { useState } from "react";
import moment from "moment";

const numeroDeNoches = (a, b) => {
  const checkIn = moment(a);
  const ckeckOut = moment(b);
  return ckeckOut.diff(checkIn, "days");
};

const Row = props => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    props.setSelectedId(props.data.id);
  };

  return (
    <tr
      onClick={() => setSelected(!selected)}
      className={selected ? "colorSelected" : ""}
    >
      <th scope="row">{props.data.id}</th>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surName}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>{numeroDeNoches(props.data.checkInDate, props.data.checkOutDate)}</td>
      <td>
        <button onClick={handleClick}>Show Profile</button>
      </td>
    </tr>
  );
};

export default Row;
