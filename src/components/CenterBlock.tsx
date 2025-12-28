import styles from '@/styles/CenterBlock.module.css'

function CenterBlock() {
  return (
    <div>
      <main className={styles.inlineCenter}>
        <div>I'm an element that is block-like with my siblings and we're centered in a row.</div>
        <div>
          I'm an element that is block-like with my siblings and we're centered in a row. I have more content
          in me than my siblings do.
        </div>
        <div>I'm an element that is block-like with my siblings and we're centered in a row.</div>
      </main>

      <main className={styles.flexCenter}>
        <div>I'm an element that is block-like with my siblings and we're centered in a row.</div>
        <div>
          I'm an element that is block-like with my siblings and we're centered in a row. I have more content
          in me than my siblings do.
        </div>
        <div>I'm an element that is block-like with my siblings and we're centered in a row.</div>
      </main>
    </div>
  )
}

export default CenterBlock
