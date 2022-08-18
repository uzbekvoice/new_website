import React, { useState } from "react";
import styles from "../styles/HakatonForm.module.css";
import PartnersApi from "../pages/partnersapi/static.json";
import { useRouter } from "next/router";

export default function Partners() {
  const { locale } = useRouter();
  const [alert, setAlert] = useState("error");
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [place_work, setPlaceWork] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [isTeam, setIsTeam] = useState("");
  const [position, setPosition] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamCount, setTeamCount] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fio !== "" &&
      email !== "" &&
      phone !== "" &&
      country !== "" &&
      place_work !== "" &&
      age !== "" &&
      problem !== "" &&
      position !== "" &&
      teamName !== "" &&
      teamCount !== ""
    ) {
      setAlert("true");

      const users = {
        fio,
        email,
        phone,
        country,
        place_work,
        age,
        problem,
        isTeam,
        position,
        teamName,
        teamCount,
        confirm,
      };

      //   console.log(users);
      try {
        const res = await fetch("https://admin.uzbekvoice.ai/items/hackathon_registration_form", {
          method: "POST",
          // mode: 'no-cors',
          body: JSON.stringify(users),
          headers: {
            'Content-Type': 'application/json',
          }
        });

        // const resData = await res.json()
        console.log("response data:", res)
      } catch (error) {
        console.log("Error: ", error);
      }

      setTimeout(() => setAlert("false"), 8000);
    } else {
      setAlert("error");
      setTimeout(() => setAlert("false"), 5000);
    }

    setFio("");
    setEmail("");
    setPhone("");
    setCountry("");
    setPlaceWork("");
    setAge("");
    setProblem("");
    setIsTeam("");
    setPosition("");
    setTeamName("");
    setTeamCount("");
    setConfirm("");
  };

  return PartnersApi.hack_form
    .filter((p) => p.languages_code === locale)
    .map(
      ({
        id,
        title,
        descr,
        label_fio,
        label_email,
        label_phone,
        label_country,
        label_place_work,
        label_age,
        label_problem,
        label_isTeam,
        label_position,
        label_team_name,
        label_team_count,
        label_confirm,
        placeholder_fio,
        placeholder_email,
        placeholder_phone,
        placeholder_country,
        placeholder_place_work,
        placeholder_age,
        placeholder_problem,
        placeholder_position,
        placeholder_team_name,
        placeholder_team_count,
        button,
        parag,
        parag1,
        parag2,
        parag3,
        parag4,
        parag5,
      }) => (
        <div className={styles.hackaton} key={id}>
          <h3>{title}</h3>
          <p>{descr}</p>
          <div className={styles.partners}>
            <ul className={styles.partners_left}>
              <li>{parag}</li>
              <li>{parag1}</li>
              <li>{parag2}</li>
              <li>{parag3}</li>
              <li>{parag4}</li>
              <li>{parag5}</li>
            </ul>
            <form
              className={styles.partners_right}
              onSubmit={handleSubmit}
              style={{ display: alert === "true" ? "none" : "flex" }}
              method="post"
            >
              <label>{label_fio}
                <input
                  value={fio}
                  type="text"
                  placeholder={placeholder_fio}
                  onChange={(e) => setFio(e.target.value)}
                />
              </label>
              <label>{label_email}
                <input
                  value={email}
                  type="email"
                  placeholder={placeholder_email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>{label_phone}
                <input
                  value={phone}
                  type="number"
                  placeholder={placeholder_phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>{label_country}
                <input
                  value={country}
                  type="text"
                  placeholder={placeholder_country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </label>
              <label>{label_place_work}
                <input
                  value={place_work}
                  type="text"
                  placeholder={placeholder_place_work}
                  onChange={(e) => setPlaceWork(e.target.value)}
                />
              </label>
              <label>{label_age}
                <input
                  value={age}
                  type="number"
                  placeholder={placeholder_age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label>{label_problem}
                <input
                  value={problem}
                  type="text"
                  placeholder={placeholder_problem}
                  onChange={(e) => setProblem(e.target.value)}
                />
              </label>
              <div>
                <p>{label_isTeam}</p>
                <label htmlFor="yes">Yes
                  <input
                    name="isTeam"
                    id="yes"
                    type="radio"
                    onChange={(e) => setIsTeam(e.target.value)}
                  />
                </label>
                <label htmlFor="no">No
                  <input
                    name="isTeam"
                    id="no"
                    type="radio"
                    onChange={(e) => setIsTeam(e.target.value)}
                  />
                </label>
              </div>
              <label>{label_position}
                <input
                  value={position}
                  type="text"
                  placeholder={placeholder_position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </label>
              <label>{label_team_name}
                <input
                  value={teamName}
                  type="text"
                  placeholder={placeholder_team_name}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </label>
              <label>{label_team_count}
                <input
                  value={teamCount}
                  type="number"
                  placeholder={placeholder_team_count}
                  onChange={(e) => setTeamCount(e.target.value)}
                />
              </label>
              <div>
                <p>{label_confirm}</p>
                <label htmlFor="confim">Yes
                  <input
                    id='confim'
                    type="radio"
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                </label>
              </div>

              <div
                style={{ display: alert === "error" ? "block" : "none" }}
                className={styles.error}
              >
              <button type="submit">{button}</button>
                {locale === "uz-UZ" ? (
                  <span>Iltimos maydonlarni to'ldiring</span>
                ) : locale === "ru-RU" ? (
                  <span>Пожалуйста, заполните поля</span>
                ) : (
                  <span>Please fill in the fields</span>
                )}
              </div>
            </form>

            <div
              className={styles.thanks}
              style={{ display: alert === "true" ? "flex" : "none" }}
            >
              {locale === "uz-UZ" ? (
                <span>
                  Murojatingiz uchun raxmat. Biz siz bilan yaqin orada aloqaga
                  chiqamiz.
                </span>
              ) : locale === "ru-RU" ? (
                <span>
                  Спасибо за ваш запрос. Мы свяжемся с Вами в скором времени.
                </span>
              ) : (
                <span>
                  Thank you for your message. We will contact you as soon as
                  possible.
                </span>
              )}
            </div>
          </div>
        </div>
      )
    );
}
