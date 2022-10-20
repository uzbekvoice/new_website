import { useState } from "react";
import style from '../styles/Bosqich.module.css'

const FormRegister = () => {
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
                const res = await fetch(
                    "https://admin.uzbekvoice.ai/items/camp_form",
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
    return (
        <>
            <form
                className={style.onlineRegister}
                onSubmit={handleSubmit}
                method="post"
            >
                <input onChange={(e) => setFio(e.target.value)} placeholder="Ism familiya" type="text" />
                <input onChange={(e) => setAge(e.target.value)} placeholder="Yoshingiz" type="text" />
                <input onChange={(e) => setPhone(e.target.value)} placeholder="Telefon raqamingiz" type="phone" />
                <h2>Size of Sweatshirt</h2>
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
                <h2>Qaysi viloyatdansiz ?</h2>
                <select onChange={(e) => setCountry(e.target.value)}>
                    <option value="Andijon viloyati">Andijon viloyati</option>
                    <option value="Buxoro viloyati">Buxoro viloyati</option>
                    <option value="Fargʻona viloyati">Fargʻona viloyati</option>
                    <option value="Jizzax viloyati">Jizzax viloyati</option>
                    <option value="Xorazm viloyati">Xorazm viloyati</option>
                    <option value="Namangan viloyati">Namangan viloyati</option>
                    <option value="Navoiy viloyati">Navoiy viloyati</option>
                    <option value="Qashqadaryo viloyati">Qashqadaryo viloyati</option>
                    <option value="Qoraqalpogʻiston Respublikasi">Qoraqalpogʻiston Respublikasi</option>
                    <option value="Samarqand viloyati">Samarqand viloyati</option>
                    <option value="Sirdaryo viloyati">Sirdaryo viloyati</option>
                    <option value="Surxondaryo viloyati">Surxondaryo viloyati</option>
                    <option value="Toshkent viloyati">Toshkent viloyati</option>
                </select>
                <h2>O'zbek tilini bilish darajangiz</h2>
                <select onChange={(e) => setLevel(e.target.value)}>
                    <option value="yomon">yomon</option>
                    <option value="urtacha"> o'rtacha</option>
                    <option value="yaxshi">yaxshi</option>
                    <option value="motherlevel">ona tilim</option>
                </select>
                <div className={style.agree}>
                    <label htmlFor="agree">Lager Nizomi bilan tanishib chiqdim</label>
                    <input onChange={(e) => setConfirm(e.target.value)} type="checkbox" name="" id="agree" />
                </div>
                <div className={style.btn}>
                <button type="submit">Jo'natish</button>
                </div>
               
            </form>
        </>
    )
}
export default FormRegister