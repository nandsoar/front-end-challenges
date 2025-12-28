import styles from './BlogPreview.module.css'

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
        <img src="blog-image.svg" className={styles.cardArt} alt="article art" />
        <div className={styles.content}>
          <div className={styles.badge}>{badge}</div>
          <p className={styles.publishDate}>{publishDate}</p>
          <h1>{heading}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.author}>
          <img src="userpic.svg" alt="author" />
          <p>{author}</p>
        </div>
      </article>
    </div>
  )
}
