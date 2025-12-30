import styles from './SocialLinksProfile.module.css'
import jessicaProfile from '@/assets/avatar-jessica.jpeg'

export default function SocialLinksProfile() {
  return (
    <div className={styles.root}>
      <article>
        <img src={jessicaProfile} alt="profile picture" />

        <div className={styles.profile}>
          <h1>Jessica Randall</h1>
          <p>London, United Kingdom</p>
        </div>

        <p className={styles.about}>"Front-end developer and avid reader."</p>

        <ul>
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            <a href="">Frontend Mentor</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </article>

      <div className={styles.attribution}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
        Coded by <a href="#">Keven</a>.
      </div>
    </div>
  )
}
