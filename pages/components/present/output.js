import styles from "../../../styles/Home.module.css"

function presentOutput(voice, [presentActive, presentPassive]) {
                if (voice == "both") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[presentActive]}</p><p className={styles.index_item}>{[presentPassive]}</p></div>)
                }
                else if (voice == "active") {
                    return (<div className={styles.index}><p className={styles.index_item}>{[presentActive]}</p></div>)
                }
                else {
                    return (<div className={styles.index}><p className={styles.index_item}>{[presentPassive]}</p></div>)
                }
            }
            export default presentOutput