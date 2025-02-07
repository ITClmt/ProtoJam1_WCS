import NavBar from "../components/NavBar";
import { useUser } from "../context/UserContext";
import "../style/Profile.css";

export default function Profile() {
  const { userData } = useUser();

  return (
    <section
      className="background-section"
      style={{
        backgroundImage: `linear-gradient(rgba(206, 198, 168, 0.7), rgba(11, 11, 11, 0.7)), url('/Arene.webp')`,
      }}
    >
      <div className="div-logo">
        <img
          src="/Glader_V2_Centered.png"
          alt="Glader"
          className="first-page-image"
        />
        <h2>Mon profil</h2>
      </div>

      <section>
        <article className="information">
          <img src="/profil_matchlogo.png" alt={userData?.firstName} />
          <p className="Welcome">
            {userData
              ? `Welcome, ${userData.firstName}!`
              : "You are not logged in."}
          </p>
          <div className="profile-information">
            <p>⌛ {userData?.age}</p>
            <p>🏛️ {userData?.city}</p>
            <p>🚻 {userData?.gender}</p>
            <p>🔱 {userData?.gladiatorType}</p>
            <p>💘 {userData?.preferences}</p>
          </div>
        </article>
      </section>
      <NavBar />
    </section>
  );
}
