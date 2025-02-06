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
}
