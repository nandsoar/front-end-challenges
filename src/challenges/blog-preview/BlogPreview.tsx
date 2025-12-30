import styles from './BlogPreview.module.css'
import blogImage from '@/assets/blog-image.svg'
import userPic from '@/assets/userpic.svg'

export default function BlogPreview() {
  const badge = 'Learning'
  const heading = 'HTML & CSS foundations'
  const publishDate = 'Published 21 Dec 2023'
  const description =
    'These languages are the backbone of every website, defining structure, content, and presentation.'
  const author = 'Greg Hooper'

  return (
    <div className={styles.root}>
      <article>
        <img src={blogImage} className={styles.cardArt} alt="article art" />
        <div className={styles.content}>
          <div className={styles.badge}>{badge}</div>
          <p className={styles.publishDate}>{publishDate}</p>
          <h1>{heading}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.author}>
          <img src={userPic} alt="author" />
          <p>{author}</p>
        </div>
      </article>
    </div>
  )
}
