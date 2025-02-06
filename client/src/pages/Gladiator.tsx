import { useLoaderData } from "react-router-dom";

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
