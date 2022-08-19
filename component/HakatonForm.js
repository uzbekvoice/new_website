import React, { useState } from "react";
import styles from "../styles/HakatonForm.module.css";
import PartnersApi from "../pages/partnersapi/static.json";
import { useRouter } from "next/router";

export default function Partners() {
  const { locale } = useRouter();
  const [alert, setAlert] = useState("false");
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tg_nike, setTgNike] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [place_work, setPlaceWork] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [isTeam, setIsTeam] = useState("");
  const [position, setPosition] = useState("");
  const [teamName, setTeamName] = useState("");
  // const [teamCount, setTeamCount] = useState("");
  const [confirm, setConfirm] = useState("");
 
  const onConfirm = (e) => {
    if (e.target.checked) setConfirm("yes");
    else setConfirm("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      fio !== "" &&
      email !== "" &&
      phone !== "" &&
      tg_nike !== "" &&
      dateOfBirth !== "" &&
      country !== "" &&
      place_work !== "" &&
      // age !== "" &&
      problem !== "" &&
      position !== "" &&
      teamName !== "" &&
      // teamCount !== "" &&
      confirm !== ""
    ) {
      setAlert("true");
      const users = {
        name_surname: fio,
        email,
        telephone_number: phone,
        city: country,
        study_work_place: place_work,
        // age,
        solution: problem,
        is_team: isTeam,
        position,
        team_title: teamName,
        // number_participants: teamCount,
        confirmation: confirm,
        telegram_nik: tg_nike,
        date_of_birth: dateOfBirth,
      };

      console.log(users);
      try {
        const res = await fetch(
          "https://admin.uzbekvoice.ai/items/hackathon_registration_form",
          {
            method: "POST",
            body: JSON.stringify(users),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // const resData = await res.json()
        console.log("response data:", res);
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
    setDateOfBirth("");
    setTgNike("");
    setCountry("");
    setPlaceWork("");
    // setAge("");
    setProblem("");
    setIsTeam("");
    setPosition("");
    setTeamName("");
    // setTeamCount("");
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
        label_tg_nike,
        label_date_of_brith,
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
        placeholder_tg,
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
        country,
        position_role,
      }) => (
        <div className={styles.hackaton} key={id}>
          <h3>{title}</h3>
          <p>{descr}</p>
          <div className={styles.partners}>
            <div className={styles.partners_left}>
              <li>{parag}</li>
              <li>{parag1}</li>
              <li>{parag2}</li>
              <li>{parag3}</li>
              <li>{parag4}</li>
              <li>{parag5}</li>
            </div>
            <form
              className={styles.partners_right}
              onSubmit={handleSubmit}
              style={{ display: alert === "true" ? "none" : "flex" }}
              method="post"
            >
              <h4>Персональная информация</h4>
              <hr></hr>

              <label>
                {label_fio}

                <input className={styles.firstinp}
                  value={fio}
                  type="text"
                  placeholder={placeholder_fio}
                  onChange={(e) => setFio(e.target.value)}
                />
              </label>
              <label>
                {label_date_of_brith}
                <input
                  value={dateOfBirth}
                  type="date"
                  placeholder={""}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </label>
              <label>
                {label_country}
                <select onChange={(e) => setCountry(e.target.value)}>
                  <option disabled selected>
                    Choose
                  </option>
                  {country.map(({ id, value }) => (
                    <option key={id}>{value}</option>
                  ))}
                </select>
              </label>
              <label>
                {label_place_work}
                <input
                  value={place_work}
                  type="text"
                  placeholder={placeholder_place_work}
                  onChange={(e) => setPlaceWork(e.target.value)}
                />
              </label>

              {/*  Contact data */}
              <h4>Контактные данные</h4>
              <hr></hr>
              <label>
                {label_phone}
                <input
                  value={phone}
                  type="number"
                  placeholder={placeholder_phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>
                {label_email}
                <input
                  value={email}
                  type="email"
                  placeholder={placeholder_email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                {label_tg_nike}
                <input
                  value={tg_nike}
                  type="text"
                  placeholder={placeholder_tg}
                  onChange={(e) => setTgNike(e.target.value)}
                />
              </label>

              {/*  Contact data */}
              <h4>Дополнительная информация</h4>
              <hr></hr>

              {/* <label>
                {label_age}
                <input
                  value={age}
                  type="number"
                  placeholder={placeholder_age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label> */}

              <label>
                {label_problem}
                <textarea
                  value={problem}
                  type="text"
                  placeholder={placeholder_problem}
                  onChange={(e) => setProblem(e.target.value)}
                />
              </label>
              <div>
                <p>{label_isTeam}</p>
                <label htmlFor="yes">
                  <input
                    className={styles.radioInput}
                    name="isTeam"
                    id="yes"
                    type="radio"
                    value={isTeam}
                    onChange={() => setIsTeam("yes")}
                  />
                  Yes
                </label>
                <label htmlFor="no">
                  <input
                    className={styles.radioInput}
                    name="isTeam"
                    id="no"
                    type="radio"
                    value={isTeam}
                    onChange={() => setIsTeam("no")}
                  />
                  No
                </label>
              </div>

              <div>
                <p>{label_position}</p>
                {position_role.map(({ id, value }) => (
                  <label>
                    <input
                      key={id}
                      className={styles.radioInput}
                      name={position}
                      // id={value}
                      type="radio"
                      value={value}
                      onChange={() => setPosition(value)}
                    />
                    {value}
                  </label>
                ))}
              </div>
         
              
                <label>{label_team_name}
                  <input
                    value={teamName}
                    type="text"
                    placeholder={placeholder_team_name}
                    onChange={(e) => setTeamCount(e.target.value)}
                  />
                </label>
          


              <h4> Просим ознакомиться с офертой (link)
             </h4>
              <hr></hr>
              <div>
                <p>{label_confirm}</p>
                <label htmlFor="confim">
                  
                  <input
                    className={styles.radioInput}
                    id="confim"
                    type="checkbox"
                    value={confirm}
                    onChange={(e) => onConfirm(e)}
                  /> Принимаю 
                </label>
              </div>

              <hr></hr>

              <div className={styles.finally}>
                <button type="submit">{button}</button>
                <div
                  style={{ display: alert === "error" ? "flex" : "none" }}
                  className={styles.error}
                >
                  {locale === "uz-UZ" ? (
                    <span>Iltimos maydonlarni to'ldiring</span>
                  ) : locale === "ru-RU" ? (
                    <span>Пожалуйста, заполните поля</span>
                  ) : (
                    <span>Please fill in the fields</span>
                  )}
                </div>
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
