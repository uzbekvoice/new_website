import { useState } from "react";
import style from "../styles/Bosqich.module.css";
import "react-phone-number-input/style.css";
import Input from "react-phone-number-input/input";
import { useRouter } from "next/router";
const FormRegister = () => {
  const { locale } = useRouter();
  const [alert, setAlert] = useState("false");
  const [fio, setFio] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [size, setSize] = useState("");
  const [level, setLevel] = useState("");
  const [confirm, setConfirm] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      fio !== "" &&
      level !== "" &&
      phone !== "" &&
      age !== "" &&
      country !== "" &&
      size !== "" &&
      confirm !== ""
    ) {
      setAlert("true");
      const users = {
        name_surname: fio,
        contacts: phone,
        city: country,
        age: age,
        size_sweat: size,
        region: country,
        confirmation: confirm,
        level_of_uzbek: level,
      };
      try {
        const res = await fetch("https://admin.uzbekvoice.ai/items/camp_form", {
          method: "POST",
          body: JSON.stringify(users),
          headers: {
            "Content-Type": "application/json",
          },
        });

        // console.log("response data:", res);
      } catch (error) {
        console.log("Error: ", error);
      }

      setTimeout(() => setAlert("false"), 9000);
    } else {
      setAlert("error");
      setTimeout(() => setAlert("false"), 6000);
    }
  };
  return (
    <>
      <form
        className={style.onlineRegister}
        onSubmit={handleSubmit}
        method="post"
      >
        <input
          onChange={(e) => setFio(e.target.value)}
          placeholder="Ism familiya"
          type="text"
          required
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Yoshingiz"
          type="number"
          maxLength="2"
          required
        />
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
        {/* <input onChange={(e) => setPhone(e.target.value)} placeholder="Telefon raqamingiz" type="phone" re /> */}

        <label >Futbolka o'lchami:</label>
        <div className={style.radio_container}>
          <div className={style.radiobtn}>
            <input
              value="XS"
              type="radio"
              name="sweater"
              onChange={(e) => setSize(e.target.value)}
              id="xs"
             
            />
            <label for="xs">XS </label>
          </div>
          <div className={style.radiobtn}>
            <input
              value="S"
              type="radio"
              name="sweater"
              onChange={(e) => setSize(e.target.value)}
              id="s"
            />
            <label for="s">S </label>
          </div>
          <div className={style.radiobtn}>
            <input
              value="M"
              type="radio"
              name="sweater"
              onChange={(e) => setSize(e.target.value)}
              id="m"
            />
            <label for="m">M </label>
          </div>
          <div className={style.radiobtn}>
            <input
              value="L"
              type="radio"
              name="sweater"
              onChange={(e) => setSize(e.target.value)}
              id="l"
            />
            <label for="l">L </label>
          </div>
          <div className={style.radiobtn}>
            <input
              value="XL"
              type="radio"
              name="sweater"
              onChange={(e) => setSize(e.target.value)}
              id="xl"
            />
            <label for="xl">XL </label>
          </div>
          <div className={style.radiobtn}>
            <input
              value="XXL"
              type="radio"
              name="sweater"
              onChange={(e) => setSize(e.target.value)}
              id="xxl"
            />
            <label for="xxl">XXL </label>
          </div>
        </div>
        {/* <select onChange={(e) => setSize(e.target.value)}>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select> */}
        <p>Qaysi viloyatdansiz ?</p>
        <select name="region" onChange={(e) => setCountry(e.target.value)} id="region" required>
        <option value="">Iltimos tanlang</option> 
          <option value="Andijon viloyati">Andijon viloyati</option>
          <option value="Buxoro viloyati">Buxoro viloyati</option>
          <option value="Fargʻona viloyati">Fargʻona viloyati</option>
          <option value="Jizzax viloyati">Jizzax viloyati</option>
          <option value="Xorazm viloyati">Xorazm viloyati</option>
          <option value="Namangan viloyati">Namangan viloyati</option>
          <option value="Navoiy viloyati">Navoiy viloyati</option>
          <option value="Qashqadaryo viloyati">Qashqadaryo viloyati</option>
          <option value="Qoraqalpogʻiston Respublikasi">
            Qoraqalpogʻiston Respublikasi
          </option>
          <option value="Samarqand viloyati">Samarqand viloyati</option>
          <option value="Sirdaryo viloyati">Sirdaryo viloyati</option>
          <option value="Surxondaryo viloyati">Surxondaryo viloyati</option>
          <option value="Toshkent viloyati">Toshkent viloyati</option>
        </select>
        <p>O'zbek tilini bilish darajangiz</p>
        <select name="level" onChange={(e) => setLevel(e.target.value)} id="level" required>
        <option value="">Iltimos tanlang</option> 
          <option value="yomon">yomon</option>
          <option value="urtacha"> o'rtacha</option>
          <option value="yaxshi">yaxshi</option>
          <option value="onatilim">ona tilim</option>
        </select>
        <div className={style.agree}>
          <label htmlFor="agree">
            Lager <a href="#">Nizomi</a> bilan tanishib chiqdim
          </label>
          <input
            onChange={(e) => setConfirm(e.target.value)}
            type="checkbox"
            name=""
            id="agree"
            required
          />
        </div>
        <div className={style.btn}>
          <button type="submit">Jo'natish</button>
        </div>
      </form>
      <div
                  style={{ display: alert === "error" ? "flex" : "none" }}
                  className={style.error}
                >
                  {locale === "uz-UZ" ? (
                    <span>Iltimos maydonlarni to'ldiring</span>
                  ) : locale === "ru-RU" ? (
                    <span>Пожалуйста, заполните поля</span>
                  ) : (
                    <span>Please fill in the fields</span>
                  )}
                </div>
      <div
        className={style.thanks}
        style={{ display: alert === "true" ? "flex" : "none" }}
      >
        <img src="/tick_green.webp" alt="" />
        {locale === "uz-UZ" ? (
          <span>Biz siz bilan yaqin orada aloqaga chiqamiz.</span>
        ) : locale === "ru-RU" ? (
          <span>Мы свяжемся с Вами в скором времени.</span>
        ) : (
          <span>We will contact you as soon as possible.</span>
        )}
      </div>
    </>
  );
};
export default FormRegister;
