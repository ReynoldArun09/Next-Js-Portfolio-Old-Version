"use client";

import { ThemeProvider as CustomThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types"

export default function ThemeProvider({children, ...props}: ThemeProviderProps) {
  return <CustomThemeProvider {...props}>{children}</CustomThemeProvider>;
}
