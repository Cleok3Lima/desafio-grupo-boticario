// Types
import { SlideTextContentProps as Props } from "./types"

// Styles
import styles from "./styles.module.scss"

export default function SlideTextContent(props: Props) {
  const {
    smallTitleContent,
    titleContent,
    numberOfButtons,
    textColor,
    children,
  } = props

  return (
    <div className={styles.container}>
      <div className={styles["text-wrapper"]}>
        <div className={styles.content}>
          <h2
            className={`${styles["content__header--compact"]} ${
              textColor === "black" ? `${styles["content__header--black"]}` : ""
            }`}
          >
            {smallTitleContent}
          </h2>
          <h3
            className={`${styles["content__header"]} ${
              textColor === "black" ? `${styles["content__header--black"]}` : ""
            }`}
          >
            {titleContent}
          </h3>
          <div className={styles["button__set"]}>
            {numberOfButtons >= 2 ? (
              <div className={styles["button__set--container"]}>{children}</div>
            ) : (
              <div className={styles["button-wrapper"]}>{children}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
