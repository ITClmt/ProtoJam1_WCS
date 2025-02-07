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
  match: boolean;
}

interface UserData {
  firstName: string;
  age: number;
  gender: GenderEnum;
  preferences: PreferenceEnum;
  city: CityEnum;
  gladiatorType: GladiatorEnum;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  matchedProfiles: MatchedProfile[];
  setMatchedProfiles: (data: MatchedProfile[]) => void;
  // setMatchedProfiles: React.Dispatch<React.SetStateAction<MatchedProfile[]>>; ce que propose ia
}

interface User {
  age: number;
  biographie: string;
  city: string;
  firstname: string;
  genre: string;
  gladiatorType: string;
  lastname: string;
  profilePicture: string;
  swordSize: string;
  match: boolean;
}

interface UserData {
  age: string;
  city: string;
  firstName: string;
  gender: string;
  gladiatorType: string;
  preferences: string;
}

interface MatchedProfile {
  id: number;
  name: string;
  age: number;
  city: string;
  gender: string;
  gladiatorType: string;
  profilePicture: string;
  biographie: string;
}
