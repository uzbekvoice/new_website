import { useState } from "react";
import style from "../styles/Bosqich.module.css";
import FormRegister from "./OnliOfflineRegisterForm";
import { useRouter } from "next/router";

const OnlineOfline = ({ data }) => {
  const { locale } = useRouter();
  const dates = data.filter((c) => c.languages_code === locale);
  const liston = dates[0].online_strings;
  const listoff = dates[0].offline_strings;

  const [show, setShow] = useState(false);
  return (
    <>
      {dates.map(
        ({ camp_second_title, online, offline, participate_button_title }) => (
          <div className={style.onlineOfline}>
            <h2
              style={{
                textAlign: "center",
              }}
            >
              {camp_second_title}
            </h2>
            <div className={style.tableOnline}>
              <div className={style.table}>
                <ul>
                  <h2>{online}</h2>

                  {liston.map(({ online_string }) => (
                    <li>{online_string}</li>
                  ))}
                </ul>
                <ul>
                  <h2>{offline}</h2>
                  {listoff.map(({ offline_string }) => (
                    <li>{offline_string}</li>
                  ))}
                </ul>
              </div>
              <div className={style.btn}>
                <a
                  style={{
                    marginBottom: "30px",
                  }}
                  onClick={() => setShow(!show)}
                >
                  {participate_button_title}
                </a>
              </div>

              {show ? <FormRegister /> : null}
            </div>
          </div>
        )
      )}
    </>
  );
};
export default OnlineOfline;
