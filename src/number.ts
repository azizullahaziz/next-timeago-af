import type { LocaleCode } from "./types";

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"] as const;
const ARABIC_INDIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"] as const;

export type DigitSystem = "latin" | "persian" | "arabicIndic";

export function shapeDigits(input: string | number, system: DigitSystem): string {
  const s = String(input);
  if (system === "latin") return s;

  const map = system === "persian" ? PERSIAN_DIGITS : ARABIC_INDIC_DIGITS;
  // Replace only ASCII digits.
  return s.replace(/\d/g, (d) => map[Number(d)]);
}

export function digitsForLocale(locale: LocaleCode): DigitSystem {
  if (locale === "ps") return "arabicIndic";
  if (locale === "fa" || locale === "fa-AF") return "persian";
  return "latin";
}
