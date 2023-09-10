// Types
import { LegalTextProps as Props } from "./types"

// Styles
import styles from "./styles.module.scss"

export default function LegalText(props: Props) {
  const { legalText } = props
  return (
    <div className={styles.container}>
      <p className={styles.text}>{legalText}</p>
    </div>
  )
}
