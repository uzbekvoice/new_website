import React, { useState } from "react";
import styles from "../styles/HakatonForm.module.css";
import PartnersApi from "../pages/partnersapi/static.json";
import { useRouter } from "next/router";
import "react-phone-number-input/style.css";
import Input from "react-phone-number-input/input";

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
  const [problem, setProblem] = useState("");
  const [isTeam, setIsTeam] = useState("");
  const [position, setPosition] = useState("");
  const [teamName, setTeamName] = useState("");
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
      problem !== "" &&
      position !== "" &&
      // teamName !== "" &&
      confirm !== ""
    ) {
      setAlert("true");
      const users = {
        name_surname: fio,
        email,
        telephone_number: phone,
        city: country,
        study_work_place: place_work,
        solution: problem,
        is_team: isTeam,
        position,
        team_title: teamName,
        confirmation: confirm,
        telegram_nik: tg_nike,
        date_of_birth: dateOfBirth,
      };

      // console.log(users);
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

        // console.log("response data:", res);
      } catch (error) {
        console.log("Error: ", error);
      }

      setTimeout(() => setAlert("false"), 8000);
    } else {
      setAlert("error");
      setTimeout(() => setAlert("false"), 5000);
    }
  };
  
  

  return PartnersApi.hack_form
    .filter((p) => p.languages_code === locale)
    .map(
      ({
        id,
        title,
        descr,
        form_title,
        form_title2,
        form_title3,
        confirm_accept,
        link,
        oferta,
        label_fio,
        label_email,
        label_phone,
        label_tg_nike,
        label_date_of_brith,
        label_country,
        label_place_work,
        label_problem,
        label_isTeam,
        label_position,
        // label_team_name,
        label_confirm,
        // placeholder_fio,
        // placeholder_email,
        // placeholder_tg,
        // placeholder_place_work,
        placeholder_problem,
        placeholder_team_name,
        // placeholder_team_count,
        choose,
        yes,
        no,
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
              <h4>{parag}</h4>
           
              <div className={styles.cards}>
              <li>{parag1}</li>
              </div>
              <div className={styles.cards}>
              <li>{parag2}</li>
              </div>
              <div className={styles.cards}>
              <li>{parag3}</li>
              </div>
              <div className={styles.cards}>
              <li>{parag4}</li>
              </div>
              <div className={styles.cards}>
              <li>{parag5}</li>
              </div>
            </div>

            <h6>{descr}</h6>
           
            <form
              className={styles.partners_right}
              onSubmit={handleSubmit}
              style={{ display: alert === "true" ? "none" : "flex" }}
              method="post"
            >
              <h4>{form_title}</h4>
              <hr></hr>
              <div className={styles.userbox}>
                <input
                  required
                  value={fio}
                  type="text"
                  // placeholder={placeholder_fio}
                  onChange={(e) => setFio(e.target.value)}
                />
                <label>{label_fio} </label>
              </div>

              <div className={styles.userbox}>
                <input
                  value={dateOfBirth}
                  type="date" 
                 
                  required
                  
                  // placeholder={""}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
 
                <label>{label_date_of_brith}</label>
              </div>

              <div className={styles.city}>
                <label>
                  {label_country} <span>*</span>
                  <select onChange={(e) => setCountry(e.target.value)}>
                    <option disabled selected>
                      {choose}
                    </option>
                    {country.map(({ id, value }) => (
                      <option key={id}>{value}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className={styles.userbox}>
                <input
                  value={place_work}
                  type="text"
                  required
                  // placeholder={placeholder_place_work}
                  onChange={(e) => setPlaceWork(e.target.value)}
                />
                <label>{label_place_work}</label>
              </div>

              {/*  Contact data */}
              <h4>{form_title2}</h4>
              <hr></hr>
              <div className={styles.userbox}>
                <Input
                  international
                  country="UZ"
                  defaultCountry="UZ"
                  withCountryCallingCode
                  maxlength="17"
                  value={phone}
                  required
                  onChange={setPhone}
                />
                <label>{label_phone}</label>
              </div>

              <div className={styles.userbox}>
                <input 
                  value={email}
                  type="email"
                  required
              
                 
                  // placeholder={placeholder_email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>{label_email}</label>
              </div>
              <div className={styles.userbox}>
                <input
                  value={tg_nike}
                  type="text"
                  // placeholder={placeholder_tg}
                  required
                  onChange={(e) => setTgNike(e.target.value)}
                />
                <label>{label_tg_nike}</label>
              </div>

              {/*  Contact data */}
              <h4>{form_title3}</h4>
              <hr></hr>

              <label>
                {label_problem} <span>*</span>
                <textarea
                  value={problem}
                  type="text"
                  placeholder={placeholder_problem}
                  onChange={(e) => setProblem(e.target.value)}
                />
              </label>
              <div className={styles.teamyes}>
                <p>{label_isTeam}</p>
                <label htmlFor="yes">
                  <input
                    className={styles.radioInput}
                    name="isTeam"
                    id="yes"
                    type="radio"
                    value={isTeam}
                    required
                    onChange={() => setIsTeam("yes")}
                  />
                  {yes}
                </label>
                <label htmlFor="no">
                  <input
                    className={styles.radioInput}
                    name="isTeam"
                    id="no"
                    type="radio"
                    required
                    value={isTeam}
                    onChange={() => setIsTeam("no")}
                  />
                  {no}
                </label>
              </div>

              
              {isTeam === "yes" ? (
               <div className={styles.userbox}>
                  <input
                    value={teamName}
                    type="text"
                    required
                    // placeholder={placeholder_team_name}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                  <label>
                  {placeholder_team_name} 
                </label>
                </div>
              ) : (
                false
              )}
             
          

              <div className={styles.position}>
                <p>{label_position}</p>
                {position_role.map(({ id, value }) => (
                  <label>
                    <input
                      key={id}
                      required
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

              <h4>
                {" "}
                {oferta}
                <a
                  href="https://docs.google.com/document/d/1VNxNKmMLo1KtuZN_jjnsOS9PqftUDUPz/edit$1usp=sharing&ouid=105377763824178379927&rtpof=true&sd=true"
                  target="_blank"
                >
                  {link}
                </a>
              </h4>
              <div className={styles.lastline}>
                <hr></hr>
              </div>

              <div>
                <p>{label_confirm}</p>
                <label htmlFor="confim">
                  <input
                    className={styles.radioInput}
                    id="confim"
                    type="checkbox"
                    required
                    value={confirm}
                    onChange={(e) => onConfirm(e)}
                  />{" "}
                  {confirm_accept}
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
