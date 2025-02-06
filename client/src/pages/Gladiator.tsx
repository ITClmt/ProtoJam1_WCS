import { useLoaderData } from "react-router-dom";

interface GladiatorTypes {
  firstname: string;
  lastname: string;
  biographie: string;
  genre: string;
  age: number;
  gladiatorType: string;
  city: string;
  swordSize: string;
  profilePicture: string;
}

export default function Gladiator() {
  const getGladiator = useLoaderData() as GladiatorTypes[];

  return (
    <section className="container">
      {getGladiator.map((gladiator) => (
        <h1 key={gladiator.firstname}>{gladiator.firstname}</h1>
      ))}
    </section>
  );
}
