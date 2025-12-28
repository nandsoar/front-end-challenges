import styles from '@/styles/OneGrid.module.css'

export default function OneGrid() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.letter}>A</div>
      <div className={styles.letter}>B</div>
      <div className={styles.letter}>C</div>
      <div className={styles.letter}>D</div>
    </div>
  )
}
