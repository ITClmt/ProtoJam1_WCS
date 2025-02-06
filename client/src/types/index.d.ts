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
