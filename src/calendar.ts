import * as jalaali from "jalaali-js";
import type { CalendarSystem } from "./types";

export interface CalendarDateParts {
  year: number;
  month: number; // 1-12
  day: number; // 1-31
}

export function toCalendarParts(date: Date, calendar: CalendarSystem): CalendarDateParts {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  if (calendar === "gregorian") return { year: y, month: m, day: d };

  const j = jalaali.toJalaali(y, m, d);
  return { year: j.jy, month: j.jm, day: j.jd };
}

export function fromCalendarParts(parts: CalendarDateParts, calendar: CalendarSystem): Date {
  if (calendar === "gregorian") {
    return new Date(parts.year, parts.month - 1, parts.day);
  }

  const g = jalaali.toGregorian(parts.year, parts.month, parts.day);
  return new Date(g.gy, g.gm - 1, g.gd);
}
