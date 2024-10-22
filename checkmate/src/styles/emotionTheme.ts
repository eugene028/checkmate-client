import { Theme } from "@emotion/react";
import { palette } from "./palette";
import { typo } from "./typo";

export const emotionTheme: Theme = {
  palette,
  typo,
};

export type TypeOfPalette = typeof palette;
export type KeyOfPalette = keyof typeof palette;

export type KeyofTheme = keyof typeof emotionTheme;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;

export type TextType = {
  typo: KeyOfTypo;
  color: KeyOfPalette;
};
