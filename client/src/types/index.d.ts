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
}
