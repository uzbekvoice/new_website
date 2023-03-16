import React, { useState } from "react";
import styles from "../styles/Modal.module.css";
import PartnersApi from "../pages/partnersapi/static.json";
import { useRouter } from "next/router";

export default function Modal({ setModal }) {

  const [name, setName] = useState("");
  const [checked, setChecked] = useState("");
  const [email, setEmail] = useState("");

  const { locale } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && email !== "") {

      console.log(name, email, checked);

      fetch("https://admin.uzbekvoice.ai/items/waitlist_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email
        }),
      }).then(function (response) {
        console.log(response);
      }).catch(err => console.log(err));
    }
    setName("");
    setEmail("");
  };

  return (
    PartnersApi.waitless
      .filter((p) => p.languages_code === locale)
      .map(value =>
        <div key={value.id}>
          <div className={styles.modal_bg} >
            <div onClick={(e) => e.stopPropagation()} className={styles.modal_content}>

              <div className={styles.modal_close}>
                <h3>{value.title}</h3>
                <div onClick={() => setModal(false)}>
                  <img src="/modal-times.svg" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className={styles.body}>
                <label htmlFor="name">{value.label_name}</label>
                <input onChange={(e) => setName(e.target.value)} type={'text'} id="name" placeholder={value.placeholder_name} />
                <label htmlFor="email">{value.label_comment}</label>
                <input onChange={(e) => setEmail(e.target.value)} type={'email'} id="email" placeholder={value.placeholder_email} />

                <div className={styles.checkbox}>
                  <input onChange={(e) => setChecked(e.target.checked)} type={'checkbox'} />
                  <span>{value.descr}</span>
                </div>

                <button type="submit">{value.button}</button>
              </form>
            </div>
          </div>
        </div>
      )
  );
}
