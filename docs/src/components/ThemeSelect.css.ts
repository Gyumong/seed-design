import { vars } from "@seed-design/design-token";
import { style } from "@vanilla-extract/css";

import * as u from "../styles/utils.css";

export const selectContainer = style([
  {
    position: "relative",
  },
]);

export const select = style([
  u.flexCenter,
  u.cursorPointer,
  {
    fontSize: "14px",

    width: "106px",
    height: "36px",

    borderRadius: "6px",
    border: `1px solid ${vars.$scale.color.gray300}`,
    backgroundColor: vars.$semantic.color.paperDefault,

    color: vars.$scale.color.gray800,

    padding: "8px 12px",

    gap: "4px",

    transition: "border 0.2s ease",

    ":hover": {
      border: `1px solid ${vars.$scale.color.gray600}`,
    },
  },
]);

export const optionList = style([
  u.flexColumnCenter,
  {
    position: "absolute",
    top: "28px",
    left: 0,

    width: "100%",

    backgroundColor: vars.$scale.color.gray00,

    borderRadius: "6px",
    border: `1px solid ${vars.$scale.color.gray300}`,

    paddingInlineStart: 0,
    padding: "6px 0px",

    gap: "6px",
  },
]);

export const option = style([
  u.flexAlignCenter,
  u.cursorPointer,
  {
    width: "90%",
    height: "28px",

    fontSize: "14px",

    borderRadius: "4px",

    padding: "4px",

    gap: "4px",

    ":hover": {
      backgroundColor: vars.$scale.color.gray50,
    },
  },
]);