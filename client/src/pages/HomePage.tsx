import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";
import { useUser } from "../context/UserContext";
import "../style/HomePage.css";

export default function HomePage() {
  const users = useLoaderData() as User[];
  const { userData } = useUser();
  const [currentIndex, setCurrentIndex] = useState(0);

  const femaleUsers = users.filter((user) => user.genre === "Femme");
  const maleUsers = users.filter((user) => user.genre === "Homme");

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % users.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + users.length) % users.length);
  };

  return (
    <div className="home-container">
      <div className="card-container">
        <UserCard
          user={
            userData?.preferences === "female"
              ? femaleUsers[currentIndex % femaleUsers.length]
              : userData?.preferences === "male"
                ? maleUsers[currentIndex % maleUsers.length]
                : users[currentIndex]
          }
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>
      <div className="user-info">
        <h3>Choisis ton ame-soeur</h3>
        <p>{userData?.firstName}</p>
      </div>
      <NavBar />
    </div>
  );
}
