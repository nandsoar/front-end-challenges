import styles from '@/styles/HolyGrail.module.css'

export default function HolyGrail() {
  return (
    <div className={styles.root}>
      <header>Header</header>

      <aside className={styles.sidebarLeft}>Left Sidebar</aside>

      <article>Article</article>
      <article>Article</article>

      <aside className={styles.sidebarRight}>Right Sidebar</aside>

      <footer>Footer</footer>
    </div>
  )
}
