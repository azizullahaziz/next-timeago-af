export type LocaleCode = "en" | "fa" | "fa-AF" | "ps";

export type CalendarSystem = "gregorian" | "jalali";

export type TimeUnit =
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year";

export interface FormatStyle {
  past: string;
  future: string;
}

export type LocaleUnitForms = Partial<Record<TimeUnit, FormatStyle>>;

export interface LocaleDefinition {
  code: LocaleCode;
  digits: "latin" | "persian" | "arabicIndic";
  defaultCalendar: CalendarSystem;
  units: LocaleUnitForms;
}

export interface TimeAgoOptions {
  locale?: LocaleCode;
  round?: (n: number) => number;
  digits?: "latin" | "persian" | "arabicIndic";
}

export interface UnitSelection {
  unit: TimeUnit;
  value: number;
  diffSeconds: number;
  isFuture: boolean;
}
