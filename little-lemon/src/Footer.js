import marioadrian2 from "./marioadrian2.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        className="column footer-image"
        alt="Mario and Adrian in the resto"
        src={marioadrian2}
      />

      <ul className="column column1">
        <li>
          <a href="#"><b>Home</b></a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <ul className="column column2">
        <li>
          <a href="#"><b>Contact</b></a>
        </li>
        <li>
          <a href="#">Address</a>
        </li>
        <li>
          <a href="#">Phone Number</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
      <ul className="column column3">
        <li>
          <a href="#"><b>Social Media</b></a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
    </footer>
  );
}
