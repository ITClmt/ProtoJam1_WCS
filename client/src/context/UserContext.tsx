import { type ReactNode, createContext, useContext, useState } from "react";

const UserContext = createContext(null as UserContextType | null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState(null as UserData | null);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
      }}
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
