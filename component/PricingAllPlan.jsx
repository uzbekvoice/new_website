import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/PricingAllPlan.module.css'

const PricingAllPlan = ({ pricing }) => {

    const { locale } = useRouter();

    return (
        pricing?.data.filter((p) => p.languages_code === locale)
            .map((value) =>
                <div className={styles.PricingAllPlan}>

                    <h2>{value?.all_plans_include}</h2>
                    <div className={styles.wrapper}>
                        <div className={styles.left_section}>
                            {/* <h3>Credits and capabilities</h3> */}
                            <ul>
                                <li>{value?.left_text}</li>
                            </ul>
                        </div>
                        <div className={styles.right_section}>
                            {/* <h3>Standard features</h3> */}
                            <ul>
                            <li>{value?.right_text}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
    )
}

export default PricingAllPlan