import marioadrian2 from "./marioadrian2.jpg";

export default function Footer() {
  return (
    <footer>
      <img
        className="footer-image"
        alt="Mario and Adrian in the resto"
        src={marioadrian2}
      />

      <ul className="nav-footer">
        <li>
          <a href="#">Home</a>
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
      <ul className="contact-footer">
        <li>
          <a href="#">Contact</a>
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
      <ul className="social-media-footer">
        <li>
          <a href="#">Social Media</a>
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
