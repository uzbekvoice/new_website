import React, { useState } from "react";
import styles from "../styles/HakatonForm.module.css";
import PartnersApi from "../pages/partnersapi/static.json";
import { useRouter } from "next/router";

export default function Partners() {
  const { locale } = useRouter();
  const [alert, setAlert] = useState("false");
  const [name_surname, setName] = useState("");
  const [telephone_number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [team_title, setTeam] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name_surname !== "" && telephone_number !== "") {
      setAlert("true");

      const users = {
        team_title,
        name_surname,
        telephone_number,
        position,
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

    setName("");
    setNumber("");
    setPosition("");
    setTeam("");
  };

  return PartnersApi.hack_form
    .filter((p) => p.languages_code === locale)
    .map(
      ({
        id,
        title,
        guide,
        label_phone,
        label_comment,
        descr,
        label_name,
        label_command,
        placeholder_command,
        placeholder_name,
        placeholder_comment,
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
              <label>{label_command}</label>
              <input
                value={team_title}
                type="text"
                placeholder={placeholder_command}
                onChange={(e) => setTeam(e.target.value)}
              />
              <label>{label_name}</label>
              <input
                value={name_surname}
                type="text"
                placeholder={placeholder_name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>{label_phone}</label>
              <input
                value={telephone_number}
                type="number"
                placeholder="+998"
                onChange={(e) => setNumber(e.target.value)}
              />
              <label>{label_comment}</label>
              <input
                value={position}
                type="text"
                placeholder={placeholder_comment}
                onChange={(e) => setPosition(e.target.value)}
              />

              <button type="submit">{button}</button>
              <div
                style={{ display: alert === "error" ? "block" : "none" }}
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
