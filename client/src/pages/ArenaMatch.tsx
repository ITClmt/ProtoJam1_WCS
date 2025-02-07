import { useUser } from "../context/UserContext";
import "../style/ArenaMatch.css";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

export default function ArenaMatch() {
  const { matchedProfiles } = useUser();
  console.info(matchedProfiles);

  if (!matchedProfiles.length) {
    return (
      <div className="arena-empty">
        <h2>Pas encore de match dans l'arène</h2>
        <p>Continue à swiper pour trouver ton adversaire !</p>
        <Link to="/home">Retour à la page d'accueil</Link>
      </div>
    );
  }

  return (
    <section className="arena-section">
      <h1>Tes adversaires dans l'arène</h1>
      <div className="arena-grid">
        {matchedProfiles.map((profile) => (
          <article key={profile.firstname} className="arena-card">
            <img
              src={`${import.meta.env.VITE_API_URL}${profile.profilePicture}`}
              alt={profile.firstname}
              className="arena-profile-image"
            />
            <div className="arena-profile-info">
              <h3>{profile.firstname}</h3>
              <p>{profile.gladiatorType}</p>
              <p>📍 {profile.city}</p>
            </div>
          </article>
        ))}
      </div>
      <Navbar />
    </section>
  );
}
