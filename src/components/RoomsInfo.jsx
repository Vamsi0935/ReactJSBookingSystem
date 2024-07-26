import React from "react";
//import { initialState } from "../reducers/Reducer";
import { useSelector } from "react-redux";

function RoomsInfo() {
  const state = useSelector((state) => state.counterReducer);
  //console.log(state.conferenceRoom, "room");
  return (
    <div className="form-control availableRooms mt-4">
      <h3 style={{ textAlign: "left" }}>
        Available Rooms
        <hr />
      </h3>
      <div style={{ textAlign: "left" }}>
        <p>
          Conference Room A(Capacity:{" "}
          {state.conferenceRoom ? state.conferenceRoom : "10"})
        </p>
        <p>
          Meeitng Room B(Capacity:{" "}
          {state.meetingRoomB ? state.meetingRoomB : "6"})
        </p>
        <p>Board Room (Capacity: {state.boardRoom ? state.boardRoom : "20"})</p>
      </div>
    </div>
  );
}

export default RoomsInfo;
