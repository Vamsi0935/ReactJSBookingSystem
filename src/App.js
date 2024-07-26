import { useState } from "react";
import "./App.css";
import BookingForm from "./components/BookingForm";
import BookingInfo from "./components/BookingInfo";
import Header from "./components/Header";
import RoomsInfo from "./components/RoomsInfo";
//import Counter from "./components/Counter";

function App() {
  const [bookingInfo, setBookingInfo] = useState([]);
  const [editData, setEditData] = useState(null);
  const [type, setType] = useState("Create");
  return (
    <div className="App">
      <Header />
      <section className="d-flex justify-content-around">
        <BookingForm
          setBookingInfo={setBookingInfo}
          editData={editData}
          type={type}
          setType={setType}
        />
        <RoomsInfo />
        {/* <Counter /> */}
      </section>
      <BookingInfo
        bookingInfo={bookingInfo}
        setEditData={setEditData}
        setType={setType}
        type={type}
        setBookingInfo={setBookingInfo}
      />
    </div>
  );
}

export default App;
