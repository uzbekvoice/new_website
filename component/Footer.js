import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.css'
import FooterApi from '../pages/footerapi/static.json'
import Link from 'next/link'

export default function Footer() {
  const router = useRouter()
  const { locale } = router;

  return (

    FooterApi.footer
      .filter((p) => p.languages_code === locale)
      .map(({
        id, powered_by, guide, join_in_project, partners, descr, github, telegram, mozillo
      }) =>
        <footer className={styles.footer} key={id}>
          <div className="container__fluid">
            <div className={styles.footer__body}>
              <div className={styles.footer__main}>
                <img className={styles.footer__logo} src="/newlogo.png" alt='logofooter' />
                <div className={styles.powered}>
                  <h3>{powered_by}</h3>
                </div>

                <img className={styles.footer__logo2} src="/footer__logo-img.png" />
              </div>
              <div className={styles.footer__menu}>
                <div className={styles.menu_footer}>
                  <ul >
                    <li>
                      <Link href="/guide">
                        <a>{guide}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://t.me/UzbekVoiceBot">
                        <a>{join_in_project}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/hamkorlar">
                        <a>{partners}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.menu_footer}>
                  <ul >
                    <li>
                      <Link href="https://github.com/uzbekvoice">
                        <a target={'_blank'}>
                          <img src="/github.png" />
                          <span>{github}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://t.me/joinchat/P84ptL81sN8yNWRi">
                        <a target={'_blank'}>
                          <img src="/telegramm.png" />
                          <span>{telegram}</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://discourse.mozilla.org/c/voice/uz/">
                        <a target={'_blank'}>
                          <img
                            className="menu-footer-block-img"
                            src="/mozila.png"
                          />
                          <span>{mozillo}</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h3>{descr}</h3>
          </div>
        </footer>
      )
  )
}
