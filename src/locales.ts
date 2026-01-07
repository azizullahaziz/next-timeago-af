import type { LocaleDefinition } from "./types";

export const LOCALES: Record<LocaleDefinition["code"], LocaleDefinition> = {
  en: {
    code: "en",
    digits: "latin",
    defaultCalendar: "gregorian",
    units: {
      second: { past: "{n} seconds ago", future: "in {n} seconds" },
      minute: { past: "{n} minutes ago", future: "in {n} minutes" },
      hour: { past: "{n} hours ago", future: "in {n} hours" },
      day: { past: "{n} days ago", future: "in {n} days" },
      week: { past: "{n} weeks ago", future: "in {n} weeks" },
      month: { past: "{n} months ago", future: "in {n} months" },
      year: { past: "{n} years ago", future: "in {n} years" }
    }
  },
  fa: {
    code: "fa",
    digits: "persian",
    defaultCalendar: "jalali",
    units: {
      second: { past: "{n} ثانیه پیش", future: "{n} ثانیه بعد" },
      minute: { past: "{n} دقیقه پیش", future: "{n} دقیقه بعد" },
      hour: { past: "{n} ساعت پیش", future: "{n} ساعت بعد" },
      day: { past: "{n} روز پیش", future: "{n} روز بعد" },
      week: { past: "{n} هفته پیش", future: "{n} هفته بعد" },
      month: { past: "{n} ماه پیش", future: "{n} ماه بعد" },
      year: { past: "{n} سال پیش", future: "{n} سال بعد" }
    }
  },
  "fa-AF": {
    code: "fa-AF",
    digits: "persian",
    defaultCalendar: "jalali",
    units: {
      second: { past: "{n} ثانیه پیش", future: "{n} ثانیه بعد" },
      minute: { past: "{n} دقیقه پیش", future: "{n} دقیقه بعد" },
      hour: { past: "{n} ساعت پیش", future: "{n} ساعت بعد" },
      day: { past: "{n} روز پیش", future: "{n} روز بعد" },
      week: { past: "{n} هفته پیش", future: "{n} هفته بعد" },
      month: { past: "{n} ماه پیش", future: "{n} ماه بعد" },
      year: { past: "{n} سال پیش", future: "{n} سال بعد" }
    }
  },
  ps: {
    code: "ps",
    digits: "arabicIndic",
    defaultCalendar: "gregorian",
    units: {
      second: { past: "{n} ثانیې مخکې", future: "په {n} ثانیو کې" },
      minute: { past: "{n} دقیقې مخکې", future: "په {n} دقیقو کې" },
      hour: { past: "{n} ساعت مخکې", future: "په {n} ساعتونو کې" },
      day: { past: "{n} ورځې مخکې", future: "په {n} ورځو کې" },
      week: { past: "{n} اونۍ مخکې", future: "په {n} اونیو کې" },
      month: { past: "{n} میاشتې مخکې", future: "په {n} میاشتو کې" },
      year: { past: "{n} کاله مخکې", future: "په {n} کلونو کې" }
    }
  }
};

export function getLocale(code: LocaleDefinition["code"] = "en"): LocaleDefinition {
  return LOCALES[code] ?? LOCALES.en;
}
