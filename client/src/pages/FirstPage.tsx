import { useNavigate } from "react-router-dom";
import "../style/FirstPage.css";

export default function FirstPage() {
  const navigate = useNavigate();
  return (
    <div className="first-page-container">
      <img
        src="public/Glader_V2_Centered.png"
        alt="Glader"
        className="first-page-image"
      />
      <h1 className="first-page-title">Glader</h1>
      <p className="first-page-description">
        Trouve ton ame-soeur dans l'arène.
      </p>
      <p className="first-page-description">
        Crée ton profil et trouve ton duel.
      </p>
      <button
        type="button"
        onClick={() => navigate("/form")}
        className="first-page-button"
      >
        Crée ton profil
      </button>
    </div>
  );
}
