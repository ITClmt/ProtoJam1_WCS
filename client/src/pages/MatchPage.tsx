import { Link, useLoaderData } from "react-router-dom";
import "../style/matchpage.css";

export default function MatchPage() {
  const getGladiator = useLoaderData() as GladiatorTypes;
  console.info(getGladiator);

  return (
    <section
      className="matchpage-section"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.7)), url('/public/matchpage_background.png')`,
      }}
    >
      <Link to={"/firstpage"} className="close-match">
        X
      </Link>
      <div className="match">
        <h1>C'est l'heure du combat !</h1>
        <p>
          {getGladiator.match ? getGladiator.firstname : ""}
          veut aussi t'affronter dans l'arène !
        </p>
      </div>
      <div className="interaction">
        <Link to={"#"} className="message">
          Écrit lui
        </Link>
        <Link to={"#"} className="arena">
          Choissez votre arène
        </Link>
      </div>
    </section>
  );
}
