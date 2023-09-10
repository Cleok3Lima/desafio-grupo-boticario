// Types
import { ButtonProps as Props } from "./types"

import styles from "./styles.module.scss"

export default function Button(props: Props) {
  const { buttonType, buttonText, buttonPadding, buttonHref, className } = props

  return (
    <a
      href={buttonHref}
      className={`
      ${styles[`button__${buttonType}`]}
      ${styles.button}
      ${styles[`button__${buttonPadding}`]}
      ${className}`}
    >
      {buttonText}
    </a>
  )
}
