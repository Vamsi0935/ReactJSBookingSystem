import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { initialState, update } from "../reducers/Reducer";

function BookingForm({ setBookingInfo }) {
  const [data, setData] = useState([
    {
      room: "",
      date: "",
      startTime: "",
      endTime: "",
      meetingTitle: "",
    },
  ]);
  const roomType = [
    { type: "Conference Room", value: "conferenceRoom" },
    { type: "Meeting Room B", value: "meetingRoomB" },
    { type: "Board Room", value: "boardRoom" },
  ];
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let bookingData = {};
    bookingData.room = data.room;
    bookingData.date = data.date;
    bookingData.startTime = data.startTime;
    bookingData.endTime = data.endTime;
    bookingData.meetingTitle = data.meetingTitle;
    dispatch(update(data.room));
    setData({
      ...data,
      room: "",
      date: "",
      startTime: "",
      endTime: "",
      meetingTitle: "",
    });

    setBookingInfo(bookingData);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    setData({ ...data, [e.target.name]: value });
  };

  return (
    <div className="form-control form-container mt-4">
      <h3 style={{ textAlign: "left" }}>
        Book a Room
        <hr />
      </h3>
      <form onSubmit={handleFormSubmit}>
        <div style={{ textAlign: "left" }} className="mt-3">
          <label htmlFor="">
            <b>Room : </b>
          </label>
          <select
            class="form-select form-control"
            name="room"
            value={data?.room}
            onChange={handleChange}
          >
            <option value={""}>Select a room</option>
            {roomType.map(({ type, value }) => (
              <option value={value} key={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div style={{ textAlign: "left" }} className="mt-3">
          <label htmlFor="">
            <b>Date:</b>{" "}
          </label>
          <input
            type="date"
            name="date"
            value={data?.date}
            onChange={handleChange}
            className="form-select form-control"
          />
        </div>
        <div style={{ textAlign: "left" }} className="mt-3">
          <label htmlFor="">
            <b>Start Time:</b>{" "}
          </label>
          <input
            type="time"
            name="startTime"
            className="form-select form-control"
            value={data?.startTime}
            onChange={handleChange}
          />
        </div>
        <div style={{ textAlign: "left" }} className="mt-3">
          <label htmlFor="">
            <b>End Time:</b>{" "}
          </label>
          <input
            type="time"
            name="endTime"
            className="form-select form-control"
            value={data?.endTime}
            onChange={handleChange}
          />
        </div>
        <div style={{ textAlign: "left" }} className="mt-3">
          <label htmlFor="">
            <b>Meeting Title:</b>{" "}
          </label>
          <input
            type="text"
            name="meetingTitle"
            className="form-select form-control"
            value={data?.meetingTitle}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-outline-dark w-50 mt-3">
          Book Room
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
