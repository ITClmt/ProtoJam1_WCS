import { Link } from "react-router-dom";
import "../style/NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/arene">Arena</Link>
        </li>
      </ul>
    </nav>
  );
}
