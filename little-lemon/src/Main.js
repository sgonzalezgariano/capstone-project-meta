export default function Main() {
  return (
    <main className="main-content">
      <section className="book-content">
        <h1>Book a Table</h1>
        <div className="sections date-time-content">
          <h4>Select the date and time</h4>
          <input type="datetime-local" />
        </div>
        <div className="sections diners-content">
          <h4>Select the number of diners</h4>
          <div>
            <select className="diners-content" name="number">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="more">More</option>
            </select>
          </div>
        </div>
        <div className="sections occasion-content">
          <h4>Select the occasion</h4>
          <div>
            <select className="occasion-content" name="ocassion">
              <option value="occasion">Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="comments-content">
          <h4>Comments</h4>
          <div>
            <textarea id="comments" name="comments">
              Special requests, etc...
            </textarea>
          </div>
        </div>
      </section>
      <section className="card-content">
        <p className="card-title">
          Please provide your credit card data to finish with the reservation
        </p>
        <form>
        <div className="card-input">
          <label for="fullname">
            Full name <span className="astrix">*</span>
          </label>
          <input type="text" name="fullname"></input>
        </div>
        <div className="card-input">
          <label for="number">Credit card number <span className="astrix">*</span></label>
          <input type="text" name="number">
            
          </input>
        </div>
        <div className="card-input">
          <label for="securitycode">
            Security code <span className="astrix">*</span>
          </label>
          <input type="password" name="securitycode"></input>
          <p className="details"><span className="astrix">*</span>Required field</p>
        </div>
        <div className="card-input">
        <input type="submit" value="Submit"></input>
        </div>
        </form>
        
        
      </section>

      <section className="about-content"></section>
    </main>
  );
}
