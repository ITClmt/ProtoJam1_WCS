import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "../style/UserCard.css";

export default function UserCard({
  user,
  handleNext,
  handlePrevious,
}: {
  user: User;
  handleNext: () => void;
  handlePrevious: () => void;
}) {
  const [exitDirection, setExitDirection] = useState<number>(0);

  const handleLike = () => {
    setExitDirection(1);
    setTimeout(handleNext, 10);
  };

  const handleDislike = () => {
    setExitDirection(-1);
    setTimeout(handlePrevious, 10);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={user.firstname}
        className="user-card"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{
          x: exitDirection * 300,
          opacity: 0,
          rotate: exitDirection * 20,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          duration: 0.1,
        }}
      >
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
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="tinder-button dislike-button"
              onClick={handleDislike}
              aria-label="Refuser le profil"
              type="button"
            >
              ✖
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="tinder-button like-button"
              onClick={handleLike}
              aria-label="Accepter le profil"
              type="button"
            >
              ⚔️
            </motion.button>
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}
