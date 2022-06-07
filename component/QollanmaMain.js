import React from 'react'
import styles from '../styles/QollanmaMain.module.css'

const data = [
    {
        id: 1,
        title: 'General Information#',
        descr: 'We collect the e-mail addresses of those who communicate with us via e-mail, aggregate information on what pages consumers access or visit, and information volunteered by the consumer (such as survey information and/or site registrations). The information we collect is used to improve the content of our Web pages and the quality of our service, and is not shared with or sold to other organizations for commercial purposes, except to provide products or services you’ve requested, when we have your permission, or under the following circumstances:',
        date: 'Sep 30, 2021',
        poster: '/video-poster.jpg',
        video: '/video.mp4'
    },
    {
        id: 2,
        title: 'Information Gathering and Usage#',
        descr: 'When you register for Siteleaf we ask for information such as your name, email address, billing address, credit card information. Members who sign up for the free account are not required to enter a credit card',
        date: 'Sep 30, 2021',
        poster: '/video-poster.jpg',
        video: '/video.mp4'
    },
    {
        id: 3,
        title: 'Cookies',
        descr: 'A cookie is a small amount of data, which often includes an anonymous unique identifier, that is sent to your browser from a web site’s computers and stored on your computer’s hard drive.',
        date: 'Sep 30, 2021',
        poster: '/video-poster.jpg',
        video: '/video.mp4'
    },
    {
        id: 4,
        title: 'Data Storage#',
        descr: 'Siteleaf uses third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run Siteleaf. Although Siteleaf owns the code, databases, and all rights to the Siteleaf application, you retain all rights to your data',
        date: 'Sep 30, 2021',
        poster: '/video-poster.jpg',
        video: '/video.mp4'
    },
    {
        id: 5,
        title: 'Disclosure#',
        descr: 'Siteleaf may disclose personally identifiable information under special circumstances, such as to comply with subpoenas or when your actions violate the Terms of Service.',
        date: 'Sep 30, 2021'
    },
    {
        id: 6,
        title: 'Changes',
        descr: 'Siteleaf may periodically update this policy. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your Siteleaf primary account holder account or by placing a prominent notice on our site. Such notice will be given at least 3 days in advance of the date the new policy will be applied.',
        date: 'Sep 30, 2021'
    },
    {
        id: 7,
        title: 'Questions',
        descr: 'Any questions about this Privacy Policy should be addressed to team@siteleaf.com',
        date: 'Sep 30, 2021'
    },
]

const QollanmaMain = () => {
    return (
        <div className={styles.qollanmaMain}>
            <h3>Qo`llanma\Instruksia</h3>
            <div className={styles.gradientOne}></div>
            <div className={styles.gradientTwo}></div>
            <div className={styles.gradientThree}></div>
            <div className={styles.gradientFour}></div>
            <div className={styles.gradientFive}></div>

            <div>
                {
                    data.map(({ id, title, date, descr, video, poster }) => (
                        <div key={id} className={styles.qollanmaCard}>
                            {
                                video && poster &&
                                <div className={styles.qollanmaCardMobileHeader}>
                                    <video
                                        poster={poster}
                                        src={video}
                                        controls
                                        muted
                                        loop
                                    // autoPlay
                                    ></video>
                                </div>
                            }

                            <div className={styles.qollanmaCardBody}>
                                <span>{date}</span>
                                <h4>{title}</h4>
                                <p>{descr}</p>
                            </div>
                            {
                                video && poster &&
                                <div className={styles.qollanmaCardHeader}>
                                    <video
                                        poster={poster}
                                        src={video}
                                        controls
                                        muted
                                        loop
                                    // autoPlay
                                    ></video>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default QollanmaMain