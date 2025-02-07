import { type ReactNode, createContext, useContext, useState } from "react";

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>({
    age: 25,
    city: "Lutèce",
    firstName: "Tototus",
    gender: "Gladiateur",
    gladiatorType: "Thraex",
    preferences: "Gladiatrice",
  });

  const [matchedProfiles, setMatchedProfiles] = useState<MatchedProfile[]>([]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, matchedProfiles, setMatchedProfiles }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
