import { useUser } from "../context/UserContext";

export default function MatchedProfiles() {
  const { matchedProfiles } = useUser();

  return (
    <div className="p-profile">
      <h1> Tes compétitarium !!!!</h1>
      <div className="m-profiles">
        {matchedProfiles.map((profile) => (
          <div key={profile.id} className="m-card">
            <img src={profile.profilePicture} alt="{profile.name}" />
            <h2>Num: {profile.name}</h2>
            <p>Agum: {profile.age}</p>
            <p>Villum: {profile.city}</p>
            <p>Genrum: {profile.gender}</p>
            <p>Typum: {profile.gladiatorType}</p>
            <p>Biographium: {profile.biographie}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
