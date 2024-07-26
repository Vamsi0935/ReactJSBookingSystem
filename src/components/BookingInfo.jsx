import React, { useEffect } from "react";
import { BOOKING_INFO } from "../utils/Constants";
import { deleteRoomData } from "../reducers/Reducer";
import { useDispatch } from "react-redux";

function BookingInfo({
  bookingInfo,
  setEditData,
  setType,
  type,
  setBookingInfo,
}) {
  //const [data, setData] = useState();
  console.log("Booking Info -->  ", bookingInfo);
  useEffect(() => {
    // if (type === "Create") {
    localStorage.setItem("data", JSON.stringify(bookingInfo));
    //}
  }, [bookingInfo]);
  const handleEdit = (data) => {
    setEditData(data);
    setType("Edit");
  };
  const dispatch = useDispatch();
  const handleDelete = (index, room) => {
    const data = bookingInfo.filter((v, i) => i !== index);
    localStorage.setItem("data", data);
    console.log("deleted data   ", data);
    dispatch(deleteRoomData(room));
    setBookingInfo(data);
  };
  return (
    <div className="pt-4">
      <h2 className="text-light p-2">{BOOKING_INFO}</h2>
      <center>
        <table class="table table-striped-columns w-75">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Meeting Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingInfo?.map((data, index) => (
              <tr style={{ textAlign: "center" }} key={data.date}>
                <td>{data?.roomNumber}</td>
                <td>{data?.room}</td>
                <td>{data?.date}</td>
                <td>{data?.startTime}</td>
                <td>{data?.endTime}</td>
                <td>{data?.meetingTitle}</td>
                <td>
                  <button
                    className="btn btn-primary m-1"
                    onClick={() => handleEdit(data)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index, data.room)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default BookingInfo;
