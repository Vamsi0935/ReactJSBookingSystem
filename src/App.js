import { useState } from "react";
import "./App.css";
import BookingForm from "./components/BookingForm";
import BookingInfo from "./components/BookingInfo";
import Header from "./components/Header";
import RoomsInfo from "./components/RoomsInfo";
//import Counter from "./components/Counter";

function App() {
  const [bookingInfo, setBookingInfo] = useState([]);
  return (
    <div className="App">
      <Header />
      <section className="d-flex justify-content-around">
        <BookingForm setBookingInfo={setBookingInfo} />
        <RoomsInfo />
        {/* <Counter /> */}
      </section>
      <BookingInfo bookingInfo={bookingInfo} />
    </div>
  );
}

export default App;
