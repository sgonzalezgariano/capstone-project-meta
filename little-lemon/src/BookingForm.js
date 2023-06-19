import { useState } from "react";

const BookingForm = ({ initializeTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [ocassion, setOcassion] = useState("");

  const getIsFormValid = () => {
    return date && initializeTimes && guests && ocassion;
  };

  const clearForm = () => {
    setDate("");
    setGuests("");
    setOcassion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Successfull");
    clearForm();
  };

  return (
    <main className="main-content">
      <section className="book-content">
        <h1>Book a Table</h1>
        <form onSubmit={handleSubmit}>
          <div className="sections date-time-content">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onClick={() => setDate(date)} />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              onChange={(e) => dispatch({ type: e.target.value })}
            >
              {initializeTimes.map((time, key) => {
                return (
                  <option key={key} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="sections diners-content">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              onClick={() => setGuests(guests)}
            />
          </div>
          <div className="sections occasion-content">
            <label htmlFor="occasion">Occasion</label>
            <select
              className="occasion-content"
              name="occasion"
              aria-label="Select Occasion"
              onClick={() => setOcassion(ocassion)}
            >
              <option value="occasion">Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="comments-content">
            <label htmlFor="comments">Comments</label>
            <textarea
              placeholder="Special requests, etc..."
              id="comments"
              name="comments"
            ></textarea>
          </div>
          <div className="sections">
            <input
              type="submit"
              disabled={!getIsFormValid()}
              value="Submit"
            ></input>
          </div>
        </form>
      </section>
    </main>
  );
};

export default BookingForm;
