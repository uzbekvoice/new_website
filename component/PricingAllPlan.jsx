import React from 'react'
import styles from '../styles/PricingAllPlan.module.css'

const PricingAllPlan = () => {
    return (
        <div className={styles.PricingAllPlan}>

            <h2>All plans include:</h2>
            <div className={styles.wrapper}>
                <div className={styles.left_section}>
                    <h3>Credits and capabilities</h3>
                    <ul>
                        <li>$150 in free credit to start; that’s up to 12,000 minutes free</li>
                        <li>2 audio channels included (additional channels available at $0.0040/channel)</li>
                        <li>Use of all language, dialect, and use case models</li>
                        <li>Choice of model tier — Base or Enhanced</li>
                        <li>Choice of audio type — pre-recorded or live streaming audio transcription</li>
                        <li>Use of developer tools including REST APIs, SDKs, and documentation</li>
                        <li>Basic email support</li>
                        <li>Per-second billing, no rounding up</li>
                        <li>Cloud deployment</li>
                    </ul>
                </div>
                <div className={styles.right_section}>
                    <h3>Standard features</h3>
                    <ul>
                        <li>$150 in free </li>
                        <li>2 audio chann</li>
                        <li>Use of all la</li>
                        <li>Choice of mod</li>
                        <li>Choice of aud</li>
                        <li>Use of develo</li>
                        <li>Basic email s</li>
                        <li>Per-second bi</li>
                        <li>Cloud deploym</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PricingAllPlan