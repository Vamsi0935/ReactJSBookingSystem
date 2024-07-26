import { createSlice } from "@reduxjs/toolkit";
import { ROOM_LIST } from "../utils/Constants";
//import { store } from "../store";

export const initialState = {
  conferenceRoom: "10",
  meetingRoomB: "6",
  boardRoom: "20",
};

const updateRoom = (state, action) => {
  // eslint-disable-next-line no-unused-expressions
  return ROOM_LIST.includes(action)
    ? (state[action] = state[action] - 1)
    : initialState[action];
};
const deleteRoom = (state, action) => {
  return ROOM_LIST.includes(action)
    ? (state[action] = state[action] + 1)
    : initialState[action];
};
const Reducer = createSlice({
  name: "room",
  initialState,
  reducers: {
    update: (state, action) => {
      state[action.payload] = updateRoom(state, action.payload);
    },
    deleteRoomData: (state, action) => {
      state[action.payload] = deleteRoom(state, action.payload);
    },
  },
});

export const { update, deleteRoomData } = Reducer.actions;
export default Reducer.reducer;
