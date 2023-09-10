import { PropsWithChildren } from "react"

export interface SlideTextContentProps extends PropsWithChildren<{}> {
  smallTitleContent?: string | JSX.Element
  titleContent?: string | JSX.Element
  textColor?: string
  numberOfButtons: number
}
