import React from "react";
import styles from "../styles/InitiativePartners.module.css";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function InitiativePartners(props) {
  const { locale } = useRouter();
  const { HomeContent, partners } = props;

  const Responsive = {
    0: {
      items: 2,
      margin: 5,
    },

    580: {
      items: 2,
      margin: 10,
    },

    900: {
      items: 3,
      margin: 20,
    },

    1200: {
      items: 4,
      margin: 20,
    },

    1400: {
      items: 4,
      margin: 10,
    },
  };
  return (
    <div className={styles.initpartners + " initpartners"}>
      {HomeContent.partner
        .filter((p) => p.languages_code === locale)
        .map((HomeContent, i) => {
          const { title, desc } = HomeContent;
          return (
            <div key={i}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          );
        })}

      <div className={styles.sliders + ' sliders'}>
        <OwlCarousel
          className={styles.slider}
          loop
          margin={10}
          dots={false}
          nav={true}
          responsive={Responsive}
          autoplay
          autoplayTimeout={1500000}
        >
          {
            partners.map(({id, partner_link, partner_image, partner_title }) =>
              <Link href={partner_link} key={id}>
                <a className={styles.item}>
                  <img src={`https://admin.uzbekvoice.ai/assets/${partner_image}`} />
                  <span>{partner_title}</span>
                </a>
              </Link>
            )
          }
        </OwlCarousel>
      </div>
    </div>
  );
}
