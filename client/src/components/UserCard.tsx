import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/UserCard.css";
import { useUser } from "../context/UserContext";

export default function UserCard({
  user,
  handleNext,
  handlePrevious,
}: {
  user: User;
  handleNext: () => void;
  handlePrevious: () => void;
}) {
  const navigate = useNavigate();
  const [exitDirection, setExitDirection] = useState<number>(0);
  const { matchedProfiles, setMatchedProfiles } = useUser();
  const handleLike = () => {
    setExitDirection(1);
    setTimeout(handleNext, 10);
    if (user.match === true) {
      const isAlreadyMatched = matchedProfiles.some(
        (profile) => profile.firstname === user.firstname,
      );

      if (!isAlreadyMatched) {
        setMatchedProfiles([...matchedProfiles, user]);
        console.info("Nouveau match ajouté:", user.firstname);
      }
      navigate(`/matchpage/${user.firstname}`);
    }
  };

  const handleDislike = () => {
    setExitDirection(-1);
    setTimeout(handlePrevious, 10);
  };

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
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
          stiffness: 300,
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
          <button
            type="button"
            onClick={openModal}
            className="user-card-button-open"
          >
            Voir le profil
          </button>
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

        <dialog className="user-details-dialog" ref={dialogRef}>
          <div className="user-details-dialog-content">
            <img
              src={`${import.meta.env.VITE_API_URL}${user.profilePicture}`}
              alt={user.firstname}
            />
            <h2>
              {user.firstname} {user.lastname}
            </h2>
            <div className="user-details-dialog-bio-container">
              <p className="user-details-dialog-bio">{user.biographie}</p>
              <p className="user-details-dialog-city">Cité : {user.city} 🏛️</p>
              <p className="user-details-dialog-age">{user.age} ans ⌛</p>
              <p className="user-details-dialog-genre">
                {user.genre === "Homme" ? "Gladiateur" : "Gladiatrice"} 🚻
              </p>
              <p className="user-details-dialog-gladiatorType">
                Type de combattant : {user.gladiatorType} 🔱
              </p>
              <p className="user-details-dialog-swordSize">
                {user.swordSize ? `Taille de l'épée : ${user.swordSize} 🗡️` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="user-details-dialog-close"
            >
              X
            </button>
          </div>
        </dialog>
      </motion.article>
    </AnimatePresence>
  );
}
