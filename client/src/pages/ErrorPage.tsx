import { Link } from "react-router-dom";
import "../style/errorpage.css";

export default function ErrorPage() {
  return (
    <section
      className="error-container"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.7)), url('/public/errorpage_background.jpg')`,
      }}
    >
      <div id="leaves">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <h1>Vous êtes bien loin de votre arène !</h1>
      <div className="sword">
        <div className="l-container container">
          <div className="l-sword">
            <div className="l-handle-orb handle-orb" />
            <div className="l-handle-block handle-block" />
            <div className="l-handle-block-curve handle-block-curve" />
            <div className="l-handle handle" />
            <div className="l-small-handle-block handle-block" />
            <div className="l-large-handle-block-curve handle-block-curve" />
            <div className="l-blade">
              <div className="l-blade-top blade-top" />
              <div className="l-blade-left blade-left" />
              <div className="l-blade-right blade-right" />
              <div className="l-blade-bottom blade-bottom" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/home"}>
          <button type="button">Retour à l'acceuil</button>
        </Link>
      </div>
    </section>
  );
}
