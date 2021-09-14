import React from "react";
import moment from "moment";

const daysBetweenDates = (dateA, dateB) => {
  const firstMoment = moment(dateA);
  const secondMoment = moment(dateB);

  return firstMoment.diff(secondMoment, "days");
};

const calculateBookingLength = booking => {
  return daysBetweenDates(booking.checkOutDate, booking.checkInDate);
};

const TableRow = props => {
  return (
    <tr>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{calculateBookingLength(props.booking)}</td>
    </tr>
  );
};

const SearchResults = props => {
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
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, i) => (
          <TableRow key={i} booking={booking} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
