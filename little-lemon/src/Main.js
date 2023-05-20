export default function Main() {
  return (
    <main className="main-content">
      <section className="book-content">
        <h1>Book a Table</h1>
        <div className="date-time-content">
          <h4>Select the date and time</h4>
          <input type="datetime-local" />
        </div>
      </section>
      <section className="card-content"></section>
      <section className="about-content"></section>
    </main>
  );
}
