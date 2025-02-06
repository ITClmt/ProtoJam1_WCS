import "../style/UserCard.css";

export default function UserCard({
  user,
  handleNext,
  handlePrevious,
}: { user: User; handleNext: () => void; handlePrevious: () => void }) {
  return (
    <article className="user-card">
      <img
        src={`${import.meta.env.VITE_API_URL}${user.profilePicture}`}
        alt={user.firstname}
        className="user-card-image"
      />
      <div className="user-card-content">
        <h2 className="user-card-name">
          {user.firstname} {user.age}
        </h2>
        <p className="user-card-bio">{user.biographie}</p>
        <div className="user-card-info">
          <span className="user-card-location">📍 {user.city}</span>
        </div>
        <div className="user-card-buttons">
          <button
            className="tinder-button dislike-button"
            onClick={handlePrevious}
            aria-label="Refuser le profil"
            type="button"
          >
            ✖
          </button>
          <button
            className="tinder-button like-button"
            onClick={handleNext}
            aria-label="Accepter le profil"
            type="button"
          >
            ⚔️
          </button>
        </div>
      </div>
    </article>
  );
}
