import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserCard from "../components/UserCard";
import "../style/HomePage.css";

export default function HomePage() {
  const users = useLoaderData() as User[];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % users.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + users.length) % users.length);
  };

  return (
    <div className="home-container">
      <h1>Trouve ton duel !</h1>
      <div className="card-container">
        <UserCard
          user={users[currentIndex]}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>
    </div>
  );
}
