import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../reducers/Reducer";

function BookingForm({ setBookingInfo, editData, type, setType }) {
  const [data, setData] = useState({
    roomNumber: "",
    room: "",
    date: "",
    startTime: "",
    endTime: "",
    meetingTitle: "",
  });

  const roomType = [
    { type: "Conference Room", value: "conferenceRoom" },
    { type: "Meeting Room B", value: "meetingRoomB" },
    { type: "Board Room", value: "boardRoom" },
  ];
  const dispatch = useDispatch();
  const handleFormSubmit = (e, data) => {
    e.preventDefault();
    const bookingInfo = {
      roomNumber: data.roomNumber,
      room: data.room,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      meetingTitle: data.meetingTitle,
      id: data.roomNumber + data.meetingTitle,
    };
    dispatch(update(data.room));
    setBookingInfo((prevData) => [...prevData, bookingInfo]);
    setData({
      ...data,
      roomNumber: "",
      room: "",
      date: "",
      startTime: "",
      endTime: "",
      meetingTitle: "",
    });
  };
  const getData = localStorage.getItem("data");
  const submitEditData = (e, editData) => {
    e.preventDefault();
    let changeData = {};
    let data = [];
    if (getData) {
      for (let i = 0; i < getData.length; i++) {
        // eslint-disable-next-line no-unused-vars
        changeData = {
          ...getData[i],
          room: editData.room,
          roomNumber: editData.roomNumber,
          date: editData.date,
          startTime: editData.startTime,
          endTime: editData.endTime,
          meetingTitle: editData.meetingTitle,
        };
      }
      data = [...data, changeData];
      setBookingInfo(data);
    }
    setData({
      ...data,
      roomNumber: "",
      room: "",
      date: "",
      startTime: "",
      endTime: "",
      meetingTitle: "",
    });
    setType("Create");
  };
  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    setData({ ...data, [e.target.name]: value });
  };

  useEffect(() => {
    if (type === "Edit") {
      setData(editData);
    }
  }, [editData, type]);
  console.log(type);
  return (
    <div className="form-control form-container mt-4">
      <h3 style={{ textAlign: "left" }}>
        Book a Room
        <hr />
      </h3>
      <form
        onSubmit={
          type === "Edit"
            ? (e) => submitEditData(e, data)
            : (e) => handleFormSubmit(e, data)
        }
      >
        <div style={{ textAlign: "left" }} className="mt-3">
          <label htmlFor="">
            <b>Room no:</b>{" "}
          </label>
          <input
            type="text"
            name="roomNumber"
            value={data?.roomNumber}
            placeholder="Enter room number"
            onChange={handleChange}
            className="form-select form-control"
            disabled={type === "Edit"}
          />
        </div>
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
            placeholder="Enter meeting title"
            value={data?.meetingTitle}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-outline-dark w-50 mt-3">
          {type === "Edit" ? "Update" : "Book Room"}
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
