// Types
import { SlideTextContentProps as Props } from "./types"

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
            className={`${styles["content-header--compact"]} ${
              textColor === "black" ? `${styles["content-header--black"]}` : ""
            }`}
          >
            {smallTitleContent}
          </h2>
          <h3
            className={`${styles["content-header"]} ${
              textColor === "black" ? `${styles["content-header--black"]}` : ""
            }`}
          >
            {titleContent}
          </h3>
          <div className={styles["button-set"]}>
            {numberOfButtons &&
              (numberOfButtons >= 2 ? (
                <div className={styles["button-set--container"]}>
                  {children}
                </div>
              ) : (
                <div className={styles["button-wrapper"]}>{children}</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
