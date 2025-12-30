import styles from './QRCode.module.css'
import qrImage from '@/assets/qrimage.svg'

export default function QRCode() {
  return (
    <div className={styles.root}>
      <article>
        <img src={qrImage} alt="qr-image" />
        <div className={styles.about}>
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </article>
    </div>
  )
}
