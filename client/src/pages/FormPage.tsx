import { type SubmitHandler, useForm } from "react-hook-form";
import "../style/FormPage.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

interface IFormInput {
  firstName: string;
  age: number;
  gender: GenderEnum;
  preferences: string;
  city: CityEnum;
  gladiatorType: GladiatorEnum;
}

enum GenderEnum {
  female = "Gladiatrice",
  male = "Gladiateur",
  NB = "Non-Binairus",
}

enum CityEnum {
  lutece = "Lutèce",
  konoha = "Konoha",
  sparta = "Sparte",
  rome = "Rome",
  carthage = "Carthage",
  alexandria = "Alexandrie",
  athens = "Athènes",
}

enum GladiatorEnum {
  Thraex = "Thraex",
  Dimachaerus = "Dimachaerus",
  Retiarius = "Retiarius",
  Secutor = "Secutor",
  Hoplomachus = "Hoplomachus",
  Amazon = "Amazon",
  Murmillo = "Murmillo",
}

export default function FormPage() {
  const { setUserData } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setUserData(data);
    navigate("/home");
    console.info(data);
  };

  return (
    <section className="section-container">
      <h1 className="form-title">Inscris toi dans l'arène</h1>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">
            Quel est ton nom ?
          </label>
          <input
            className="form-input"
            {...register("firstName", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            placeholder="Ton nom"
          />
          {errors.firstName && (
            <p className="form-error">Ton nom est obligatoire</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="age">
            Quel est ton âge ?
          </label>
          <input
            type="number"
            className="form-input"
            {...register("age", {
              required: "L'âge est obligatoire",
              min: {
                value: 18,
                message: "Tu dois avoir au moins 18 ans pour t'inscrire",
              },
              max: {
                value: 100,
                message: "L'âge maximum est de 100 ans",
              },
            })}
            placeholder="Ton âge"
          />
          {errors.age && <p className="form-error">{errors.age.message}</p>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="gender">
            Quel est ton genre ?
          </label>
          <select className="form-input" {...register("gender")}>
            <option value="female">Gladiatrice</option>
            <option value="male">Gladiateur</option>
            <option value="other">Non-Binairus</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="preferences">
            Que recherches-tu ?
          </label>
          <select className="form-input" {...register("preferences")}>
            <option value="female">Gladiatrice</option>
            <option value="male">Gladiateur</option>
            <option value="other">Pas de préférence</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="city">
            Dans quelle cité habites-tu ?
          </label>
          <select className="form-input" {...register("city")}>
            {Object.values(CityEnum).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="gladiatorType">
            Quel type de gladiateur es-tu ?
          </label>
          <select className="form-input" {...register("gladiatorType")}>
            {Object.values(GladiatorEnum).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="form-button">
          Valider
        </button>
      </form>
    </section>
  );
}
