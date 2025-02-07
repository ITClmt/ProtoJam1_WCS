import { Link } from "react-router-dom";
import "../style/NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Accueil</Link>
        </li>
        <li>
          <Link to="/form">Formulaire</Link>
        </li>
        <li>
          <Link to="/profile">Profil</Link>
        </li>
        <li>
          <Link to="/arene">Arena</Link>
        </li>
      </ul>
    </nav>
  );
}
