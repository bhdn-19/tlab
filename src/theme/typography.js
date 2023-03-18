import { pxToRem } from "../utils"

const FONT_PRIMARY = "Nunito Sans"
const FONT_SECONDARY = "Quicksand"

const typography = {
  fontFamily: FONT_PRIMARY,
  h1: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: pxToRem(72),
    fontSize: pxToRem(48)
  },
  h2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: pxToRem(48),
    fontSize: pxToRem(32)
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: pxToRem(48),
    fontSize: pxToRem(32)
  },
  h4: {
    fontWeight: 400,
    lineHeight: pxToRem(36),
    fontSize: pxToRem(24)
  },
  subtitle1: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 400,
    lineHeight: pxToRem(32),
    fontSize: pxToRem(18)
  },
  subtitle2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: pxToRem(25.27),
    fontSize: pxToRem(14)
  },
  body2: {
    fontWeight: 400,
    lineHeight: pxToRem(44.32),
    fontSize: pxToRem(16)
  },
  caption: {
    fontWeight: 400,
    lineHeight: pxToRem(19.85),
    fontSize: pxToRem(11)
  },
  button: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: pxToRem(28.88),
    fontSize: pxToRem(16)
  },
}

export default typography