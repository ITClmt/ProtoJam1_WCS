import { Link, useLoaderData } from "react-router-dom";
import "../style/matchpage.css";

export default function MatchPage() {
  const gladiator = useLoaderData() as GladiatorTypes;

  return (
    <section
      className="matchpage-section"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.7)), url('/public/matchpage_background.png')`,
      }}
    >
      <Link to={"/home"} className="close-page">
        X
      </Link>
      <div className="match">
        <h1>C'est l'heure du combat !</h1>
        <p>{gladiator.firstname} veut aussi t'affronter dans l'arène !</p>

        <div className="match-swords">
          <img src="/public/profil_matchlogo.png" alt="matchlogo" />
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/512px/2694.png"
            alt="crossed swords"
            className="crossed-swords"
          />
          <div className="match-logo">
            <div className="match-logo-picture">
              <img
                src={`${import.meta.env.VITE_API_URL}${gladiator.profilePicture}`}
                alt={gladiator.firstname}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="interaction">
        <Link to={"#"} className="message">
          Provocatum
        </Link>
        <Link to={"#"} className="arena">
          Choisissez votre arène
        </Link>
        <Link to={"/arene"} className="arena">
          Voir mes adversaires
        </Link>
      </div>
    </section>
  );
}
