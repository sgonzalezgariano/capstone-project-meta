const BookingForm = ({
  availableTimes,
  dispatch,
  setFormData,
  formData,
  submitForm,
}) => {
  /*   const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [ocassion, setOcassion] = useState(""); */

  const handleTimeSelection = (e, time) => {
    e.preventDefault();
    dispatch({ type: "SELECT_TIME", payload: time });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    setFormData({
      date: new Date(),
      guests: "",
      time: "",
      occasion: "None",
      fname: "",
      lname: "",
      requests: "",
      email: ""
    });
    alert(`Reservation successfull for: ${formData.fname} ${formData.lname}. A confirmation email will be sent to your address with the details of your reservation.`);
  };

  const handleDateSelection = (e) => {
    e.preventDefault();
    const f = new Date(e.target.value);
    dispatch({ type: "SELECT_DATE", payload: f });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <main className="main-content">
      <section className="book-content">
        <h1>Book a Table</h1>
        <form onSubmit={handleSubmit}>
          <div className="sections date-time-content">
            <label htmlFor="res-date">Choose date</label>
            <input
              required
              type="date"
              id="res-date"
              name="date"
              value={formData.date}
              onChange={(e) => {
                handleChange(e);
                handleDateSelection(e);
              }}
              min={new Date().toISOString().split("T")[0]}
            />
            <label htmlFor="res-time">Choose time</label>
            <div className="time-button-container" id="time-button">
              {availableTimes.availableTimes.map((time, idx) => (
                <button
                  key={idx}
                  className="timebutton"
                  name="time"
                  value={time}
                  onClick={(e) => {
                    handleTimeSelection(e, time);
                    handleChange(e);
                  }}
                  disabled={availableTimes.selectedTime === time}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="sections diners-content">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              required
              placeholder="1"
              min="1"
              max="10"
              step="1"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            />
          </div>
          <div className="sections occasion-content">
            <label htmlFor="occasion">Occasion</label>
            <select
              className="occasion-content"
              name="occasion"
              aria-label="Select Occasion"
              required
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="occasion">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="comments-content">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              required
              id="first_name"
              value={formData.fname}
              onChange={handleChange}
              name="fname"
            />
          </div>

          <div className="comments-content">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              required
              id="last_name"
              value={formData.lname}
              onChange={handleChange}
              name="lname"
            />
          </div>
          <div className="comments-content">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              placeholder="Please enter your email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            ></input>
          </div>
          <div className="comments-content">
            <label htmlFor="comments">Comments</label>
            <textarea
              placeholder="Special requests, etc..."
              id="comments"
              name="comments"
              value={formData.commments}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="sections">
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </section>
    </main>
  );
};

export default BookingForm;
