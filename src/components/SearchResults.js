import React, { useState } from "react";
import moment from "moment";

import CustomerProfile from "./CustomerProfile";

const daysBetweenDates = (dateA, dateB) => {
  const firstMoment = moment(dateA);
  const secondMoment = moment(dateB);

  return firstMoment.diff(secondMoment, "days");
};

const calculateBookingLength = booking => {
  return daysBetweenDates(booking.checkOutDate, booking.checkInDate);
};

const TableRow = props => (
  <tr
    className={props.isSelected ? "selected-search-row" : undefined}
    onClick={props.handleClick}
  >
    <th scope="row">{props.booking.id}</th>
    <td>{props.booking.title}</td>
    <td>{props.booking.firstName}</td>
    <td>{props.booking.surname}</td>
    <td>{props.booking.email}</td>
    <td>{props.booking.roomId}</td>
    <td>{props.booking.checkInDate}</td>
    <td>{props.booking.checkOutDate}</td>
    <td>{calculateBookingLength(props.booking)}</td>
    <td>
      <button onClick={() => props.setShowProfile(props.booking.id)}>
        Show Profile
      </button>
    </td>
  </tr>
);

const SearchResults = props => {
  const [selectedRows, setSelectedRows] = useState([]);
  // removes or adds an index to the selectedRows state array variable
  const toggleSelectedAtPosition = index => {
    // check if the given index is in the selectedRows array
    if (selectedRows.includes(index)) {
      // if it is:
      // create a new array without this index
      const newArray = selectedRows.filter(i => i !== index);
      // setSelectedRows with this new array
      setSelectedRows(newArray);
    } else {
      // if it's NOT:
      //create a new array which incldues this index
      const newArray = selectedRows.concat(index);
      // setSelectedRows with this new array
      setSelectedRows(newArray);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in</th>
          <th scope="col">Check-out</th>
          <th scope="col">Number of Nights</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, i) => (
          <TableRow
            key={i}
            booking={booking}
            setShowProfile={val => props.onShowCustomerProfile(val)}
            handleClick={() => toggleSelectedAtPosition(i)}
            isSelected={selectedRows.includes(i)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
