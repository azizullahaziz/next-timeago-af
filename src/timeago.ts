import { getLocale } from "./locales";
import { digitsForLocale, shapeDigits, type DigitSystem } from "./number";
import type { LocaleCode, TimeAgoOptions, TimeUnit, UnitSelection } from "./types";

const SECOND = 1;
const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

export function selectUnit(diffSeconds: number): { unit: TimeUnit; value: number } {
  const abs = Math.abs(diffSeconds);

  if (abs < MINUTE) return { unit: "second", value: abs / SECOND };
  if (abs < HOUR) return { unit: "minute", value: abs / MINUTE };
  if (abs < DAY) return { unit: "hour", value: abs / HOUR };
  if (abs < WEEK) return { unit: "day", value: abs / DAY };
  if (abs < MONTH) return { unit: "week", value: abs / WEEK };
  if (abs < YEAR) return { unit: "month", value: abs / MONTH };
  return { unit: "year", value: abs / YEAR };
}

export function getUnitSelection(date: Date | number, now: Date | number = Date.now()): UnitSelection {
  const a = date instanceof Date ? date.getTime() : date;
  const b = now instanceof Date ? now.getTime() : now;
  const diffSeconds = Math.round((a - b) / 1000);
  const isFuture = diffSeconds > 0;
  const { unit, value } = selectUnit(diffSeconds);

  return {
    unit,
    value: Math.abs(value),
    diffSeconds,
    isFuture
  };
}

export function formatTimeAgo(date: Date | number, options: TimeAgoOptions = {}): string {
  const localeCode: LocaleCode = options.locale ?? "en";
  const locale = getLocale(localeCode);

  const { unit, value, isFuture } = getUnitSelection(date);
  const round = options.round ?? Math.round;
  const n = Math.max(0, round(value));

  const style = locale.units[unit];
  if (!style) {
    // fallback to English if missing
    const en = getLocale("en");
    const enStyle = en.units[unit]!;
    const text = (isFuture ? enStyle.future : enStyle.past).replace("{n}", String(n));
    return text;
  }

  const digits: DigitSystem = options.digits ?? locale.digits ?? digitsForLocale(localeCode);
  const shaped = shapeDigits(n, digits);

  return (isFuture ? style.future : style.past).replace("{n}", shaped);
}
