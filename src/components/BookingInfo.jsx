import React from "react";
import { BOOKING_INFO } from "../utils/Constants";

function BookingInfo({ bookingInfo }) {
  return (
    <div className="pt-4">
      <h2 className="text-light bg bg-dark p-2">{BOOKING_INFO}</h2>
      <center>
        <table class="table table-striped-columns w-75">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Room Type</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Meeting Title</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>{bookingInfo?.room}</td>
              <td>{bookingInfo?.date}</td>
              <td>{bookingInfo?.startTime}</td>
              <td>{bookingInfo?.endTime}</td>
              <td>{bookingInfo?.meetingTitle}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default BookingInfo;
